function bouncingBall(h, bounce, window) {
    if (bounce < 1 && bounce > 0 && h > 0 && window < h) {
        let count = -1;
        while (h > window) {
            h *= bounce;
            count += 2;
        }
        return count;
    } else {
        return -1;
    }
}