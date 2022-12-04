

function formatDate(dateStr){

    let date = new Date(dateStr);

    return date.toDateString() + " " + addLeadingZeros(date.getUTCHours()) +":"+ addLeadingZeros(date.getUTCMinutes());
}

function addLeadingZeros(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n
}

export { formatDate }
