// quotaManager.js
export function checkQuota(formKey, max = 3, days = 3) {
  const RESET_WINDOW = days * 24 * 60 * 60 * 1000; // ms in given days
  const now = Date.now();

  const remainingKey = `${formKey}_remainingCount`;
  const resetKey = `${formKey}_lastReset`;

  let remainingCount = parseInt(localStorage.getItem(remainingKey) || max);
  let lastReset = parseInt(localStorage.getItem(resetKey) || now);

  // Reset if window passed
  if (now - lastReset > RESET_WINDOW) {
    remainingCount = max;
    lastReset = now;
    localStorage.setItem(remainingKey, remainingCount);
    localStorage.setItem(resetKey, lastReset);
  }

  const resetAt = lastReset + RESET_WINDOW;
  const timeLeft = Math.max(0, resetAt - now); // ms remaining

  return {
    remainingCount:parseInt(remainingCount),
    max,
    resetAt,
    timeLeft,
    useQuota: () => {
      if (remainingCount > 0) {
        remainingCount -= 1;
        localStorage.setItem(remainingKey, remainingCount);
        localStorage.setItem(resetKey, lastReset);
        return true;
      }
      return false;
    }
  };
}

export function formatTimeLeft(ms) {
  const totalSeconds = Math.floor(ms / 1000);

  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}


