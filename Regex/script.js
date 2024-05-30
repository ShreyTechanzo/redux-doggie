let str = "We will be the Best as we move forward"
let regexp = /we /gi;

console.log(str.match(regexp));

let match = "Javascript".match(/HTML/g) || [];

if (!match.length) {
    console.log("Error")
}

console.log("We will replace and we will".replace(/we/gi, "Anybody"));