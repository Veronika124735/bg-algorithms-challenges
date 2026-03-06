function isValidIPv4(input) {
const parts = input.split('.');
 if (parts.length !== 4) return false;
 for (const part of parts) {
    if (part.length > 1 && part[0] === '0') return false;
    const num = Number(part);
    if (num < 0 || num > 255 || isNaN(num) || part === '')
      return false;
    }
    return true;

}
module.exports = isValidIPv4;
