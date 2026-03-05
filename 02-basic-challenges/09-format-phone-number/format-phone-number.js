function formatPhoneNumber(num) {
    let format = "(###) ###-####";
    for(let i=0; i < num.length; i++)
    {
        format = format.replace('#', num[i]);
    }
    return format;
}

module.exports = formatPhoneNumber;
