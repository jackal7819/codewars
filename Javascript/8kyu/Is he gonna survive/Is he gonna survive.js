function hero(bullets, dragons){
    if (dragons <= bullets / 2) {
      return true;
    }
    return false;
  }