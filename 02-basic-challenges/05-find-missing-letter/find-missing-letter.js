function findMissingLetter(arr) 
{
    for (let i = 0; i < arr.length; i++) 
        {
            let current = arr[i].charCodeAt(0);
            if (arr[i + 1].charCodeAt(0) !== current + 1) 
                {
                    return String.fromCharCode(current + 1);
                }
            }
            return '';
}

module.exports = findMissingLetter;
