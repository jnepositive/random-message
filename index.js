const message = {
    _luckyDay: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    _luckyColor: ['Blue', 'Red', 'Yellow', 'Green', 'Orange', 'Purple'],
    get luckyDay() {
        return this._luckyDay;
    },
    get luckyColor() {
        return this._luckyColor
    }
};

function generateRandDay (obj) {
    let randIndex = Math.floor(Math.random() * 7);
    let randDay = obj.luckyDay[randIndex];
    return randDay;
};

function generateRandColor (obj) {
    let randIndex = Math.floor(Math.random() * 6);
    let randColor = obj.luckyColor[randIndex];
    return randColor;
}

function generateRandNumber (obj) {
    let randIndex = Math.floor(Math.random() * 99 + 1);
    return randIndex;
}

console.log(`Your lucky day is ${generateRandDay(message)}, lucky color is ${generateRandColor(message)}, and lucky number is ${generateRandNumber(message)}`);