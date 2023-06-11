function deleteNth(arr, n) {
    for (let i = arr.length; i > 0; i--) {
        let count = 0;
        for (let k of arr) {
            if (arr[i] === k) {
                count = count + 1;
                if (count > n) {
                    arr.splice(i, 1);
                    i = arr.length;
                }
            }
        }
    }
    return arr;
}