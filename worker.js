// Sentinel Worker
// Monitors the availability and performance of specified services

const axios = require('axios');

// Configuration
const CHECK_INTERVAL = 30000; // 30 seconds
const TIMEOUT = 5000; // 5 seconds
const MAX_RETRIES = 3;

// State management
let monitoringItems = [];
let isChecking = false;

// Initialize worker
function init(items) {
  monitoringItems = items || [];
  console.log(`[Worker] Initialized with ${monitoringItems.length} items`);
  startMonitoring();
}

// Main monitoring loop
function startMonitoring() {
  checkAll();
  setInterval(checkAll, CHECK_INTERVAL);
}

// Fixed checkAll function with proper counter reset and synchronization
function checkAll() {
  if (isChecking) {
    console.log('[Worker] Check already in progress, skipping...');
    return;
  }

  isChecking = true;
  
  // Reset counters at the beginning of each detection cycle
  let onlineCount = 0;
  let offlineCount = 0;
  
  console.log(`[Worker] Starting health check cycle at ${new Date().toISOString()}`);

  // Create promise array for parallel checking
  const checkPromises = monitoringItems.map((item, index) => {
    return performHealthCheck(item, index)
      .then(result => {
        // Synchronize counter updates
        if (result.status === 'online') {
          onlineCount++;
        } else {
          offlineCount++;
        }
        return result;
      })
      .catch(error => {
        console.error(`[Worker] Error checking item ${index}: ${error.message}`);
        offlineCount++;
        return {
          index,
          status: 'offline',
          error: error.message,
          timestamp: new Date().toISOString()
        };
      });
  });

  // Wait for all checks to complete
  Promise.all(checkPromises)
    .then(results => {
      // All results have been processed with synchronized counters
      const summary = {
        timestamp: new Date().toISOString(),
        totalChecked: monitoringItems.length,
        online: onlineCount,
        offline: offlineCount,
        results: results
      };
      
      console.log(`[Worker] Health check cycle completed:`, summary);
      handleCheckResults(summary);
    })
    .finally(() => {
      isChecking = false;
    });
}

// Perform individual health check with retry logic
async function performHealthCheck(item, index) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const startTime = Date.now();
      
      const response = await axios({
        method: item.method || 'GET',
        url: item.url,
        timeout: TIMEOUT,
        validateStatus: (status) => status < 500 // Accept any status < 500
      });

      const duration = Date.now() - startTime;

      return {
        index,
        name: item.name,
        url: item.url,
        status: 'online',
        statusCode: response.status,
        duration: duration,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      lastError = error;
      
      if (attempt < MAX_RETRIES) {
        const backoffDelay = Math.pow(2, attempt - 1) * 1000;
        await new Promise(resolve => setTimeout(resolve, backoffDelay));
      }
    }
  }

  return {
    index,
    name: item.name,
    url: item.url,
    status: 'offline',
    error: lastError.message,
    timestamp: new Date().toISOString()
  };
}

// Handle and distribute check results
function handleCheckResults(summary) {
  // Send summary to monitoring dashboard or storage
  // This can be extended to send notifications, update database, etc.
  
  console.log(`[Worker] Summary - Online: ${summary.online}, Offline: ${summary.offline}`);
  
  // Emit event for results (if using EventEmitter)
  if (global.emit) {
    global.emit('health-check-complete', summary);
  }
}

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('[Worker] Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('[Worker] Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

// Export functions
module.exports = {
  init,
  checkAll,
  performHealthCheck,
  handleCheckResults
};
