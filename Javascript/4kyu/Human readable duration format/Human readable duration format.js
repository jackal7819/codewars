function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    let arr = [];
    let years = Math.floor(seconds / 31536000);
    if (years) arr.push(`${years} year${years > 1 ? 's' : ''}, `);
    let days = Math.floor(seconds / 86400 % 365);
    if (days) arr.push(`${days} day${days > 1 ? 's' : ''}, `);
    let hours = Math.floor(seconds / 3600 % 24);
    if (hours) arr.push(`${hours} hour${hours > 1 ? 's' : ''}, `);
    let minutes = Math.floor(seconds / 60 % 60);
    if (minutes) arr.push(`${minutes} minute${minutes > 1 ? 's' : ''}, `);
    seconds = Math.floor(seconds % 60);
    if (seconds) arr.push(`${seconds} second${seconds > 1 ? 's' : ''}, `);
    if (arr.length === 1) return arr[0].slice(0, -2);
    arr[arr.length - 2] = arr[arr.length - 2].slice(0, -2) + ' and ';
    return arr.join('').slice(0, - 2);
}