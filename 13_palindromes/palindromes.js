const palindromes = function (content) {
    let removed = content
    .split(' ').join('')   
    .split('!').join('')   
    .split('.').join('')  
    .split('?').join('')   
    .split(',').join('');  
    const original = removed.toLowerCase().split('').join('')
    const reversed = removed.toLowerCase().split('').reverse().join('')
    if (reversed === original)
    return true;
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
