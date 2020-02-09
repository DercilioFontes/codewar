function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let count = 0;
  for (; window < h; count++) {
    h *= bounce;
    if (window < h) count++;
  }
  return count;
}

module.exports = bouncingBall;