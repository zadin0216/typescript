function printName(firstName, func) {
    console.log(func(firstName));
}
function lastName(name) {
    return "".concat(name, "\uAE38\uB3D9");
}
printName('홍', lastName);
// console.log('1')
function cleaning(arr) {
    var numbers = [];
    arr.forEach(function (i) {
        if (typeof i === 'string') {
            numbers.push(parseInt(i));
        }
        else {
            numbers.push(i);
        }
    });
    return numbers;
}
var arr = cleaning([1, 2, '3', '4']);
console.log(arr + '확인');
var a = { subject: 'math' };
var b = { subject: ['science', 'english'] };
var c = { subject: ['science', 'art', 'korean'] };
function getLastSubject(obj) {
    if (Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    }
    else {
        return obj.subject;
    }
}
console.log(getLastSubject(c));
