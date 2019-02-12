function formatTime(number) {
    let days = Math.floor(number / 1440);
    let hours = Math.floor((number - (days * 1440)) / 60);
    let minutes = number - (days * 1440) - (hours *60);
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).';
}
formatTime(3601);

