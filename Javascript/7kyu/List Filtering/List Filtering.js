function filter_list(l) {
    const newlist = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] === 'number') {
        newlist.push(l[i]);
      }
    }
    return newlist;
  }