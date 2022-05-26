function friend(friends){
    let my = [];
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length === 4) {
        my.push(friends[i]);
      }
    }
    return my;
  }