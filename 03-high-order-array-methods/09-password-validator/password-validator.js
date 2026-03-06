function validatePassword(password) {
    if (password.length < 8) return false;
    const chars = [...password];
    const hasUpper = chars.some(c => c >= 'A' && c <= 'Z');
    const hasLower = chars.some(c => c >= 'a' && c <= 'z');
    const hasDigit = chars.some(c => c >= '0' && c <= '9');
    return hasUpper && hasLower && hasDigit;
}

module.exports = validatePassword;
