
//reference: https://flaviocopes.com/javascript-regular-expressions/
const matchAwesomePhrases = (num, awesomePhrases) => {
    let matched = false;
    const re = new RegExp(`^${num.toString()}$`);
    for(const phrase of awesomePhrases) { 
        if(re.test(phrase)) {
            matched = true;
        }
    }
    return matched;
}

console.log(matchAwesomePhrases(3, [1337, 256]));
console.log(matchAwesomePhrases(1336, [1337, 256]));
console.log(matchAwesomePhrases(1337, [1337, 256]));
console.log(matchAwesomePhrases(11208, [1337, 256]));
console.log(matchAwesomePhrases(11209, [1337, 256]));
console.log(matchAwesomePhrases(11211, [1337, 256]));