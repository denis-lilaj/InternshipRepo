function getdomainName(url) {
    if (typeof url !== 'string') {
        throw new Error('Input must be a string');
    }

    const expression = /(?:www\.|https?:\/\/)?([^\/]+)\.(.*)/;

    const match = url.match(expression);
    if (match) {
        return match[1];
    } else {
        return '';
    }
}

console.log(getdomainName('www.google.ca')); // google
console.log(getdomainName('http://google.com')); // google
console.log(getdomainName('https://google.com')); // google
console.log(getdomainName('http://google.co.jp')); // google
console.log(getdomainName('https://www.google.com')); // google