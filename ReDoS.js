var safeRegex = require('safe-regex');

var userDefinedEmail = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX';
var whitelistRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// Check if the regex is safe
var isSafe = safeRegex(whitelistRegex);

if (!isSafe) {
  console.error('The regex may be vulnerable to REDoS.');
} else {
  console.log('The regex is safe.');
}

console.time('Email Regex Took');
var isValid = whitelistRegex.test(userDefinedEmail);
console.timeEnd('Email Regex Took');
console.log('Email is INValid', isValid);
