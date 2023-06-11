const order = words => words.split(' ').sort((a, b) => Number(a.match(/(\d+)/g)[0]) - Number((b.match(/(\d+)/g)[0]))).join(' ');
