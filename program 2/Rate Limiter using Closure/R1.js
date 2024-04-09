function createRateLimiter(limit, interval) {
    let lastExecutionTime = 0;
    let executions = 0;
  
    return function() {
      const now = Date.now();
      if (now - lastExecutionTime >= interval) {
        lastExecutionTime = now;
        executions = 1;
        return true;
      } else {
        if (executions < limit) {
          executions++;
          return true;
        } else {
          return false;
        }
      }
    };
  }
  const limiter = createRateLimiter(3, 1000); // Allow 3 executions per second
  console.log(limiter()); 
  console.log(limiter()); 
  console.log(limiter()); 
  console.log(limiter()); 
  