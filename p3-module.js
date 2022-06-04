/*
    CIT 281 Project 3
    Name: J.R. Herrera
*/
module.exports = {
    coinCount,
};

function validDenonmination(coin) {
    validCoinValues = [1,5,10,25,50,100];
    return validCoinValues.indexOf(coin) !== -1;
}

let quarter = {
    denom: 25,
    count: 2,
};

let nickel = {
    denom: 5,
    count: 5,
};

let dime = {
    denom: 10,
    count: 3,
};

const valueFromCoinObject = (obj) => {
    const { denom, count } = obj;
    return denom * count;
};

//console.log(valueFromCoinObject(nick));

//let arra = [nickel, quarter, dime];

const valueFromArray = (arr) => {
    newarr = [];
    for (const obj of arr) {
        if (!validDenonmination(obj)) {
            newarr.push(valueFromCoinObject(obj))
        }
    }
    return newarr.reduce(function(total, num) {return total + num}, 0);
}

function coinCount(...coinage) {
    return valueFromArray(coinage);
};

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
//console.log(valueFromArray(arra));

