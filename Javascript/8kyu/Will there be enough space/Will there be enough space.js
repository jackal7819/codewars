const enough = (cap, on, wait) =>
    wait - (cap - on) < 1 ? 0 : wait - (cap - on);
