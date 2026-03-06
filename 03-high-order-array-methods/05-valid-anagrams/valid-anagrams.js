function validAnagrams(str1, str2) {
     if (str1.length !== str2.length) return false;
     const s1 = str1.split('').sort().join('');
     const s2 = str2.split('').sort().join('');
     return s1 === s2;
}
console.log(validAnagrams('listen', 'silent'));
console.log(validAnagrams('hello', 'world'));
module.exports = validAnagrams;
