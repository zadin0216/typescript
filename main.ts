function printName(firstName: string, func: (name: string) => string) {
    console.log(func(firstName))
}
function lastName(name: string): string {
    return `${name}길동`
}
printName('홍', lastName)
// console.log('1')

function cleaning(arr: (number | string)[]): number[] {
    let numbers: number[] = []
    arr.forEach((i: number | string) => {
        if (typeof i === 'string') {
            numbers.push(parseInt(i))
        } else {
            numbers.push(i)
        }
    })
    return numbers
}
let arr: number[] = cleaning([1,2,'3','4'])
console.log(arr + '확인')


let a = {subject : 'math'}
let b = {subject : ['science','english']}
let c = {subject : ['science', 'art', 'korean']}


function getLastSubject (obj :{subject: string|string[]}) :string {
    if(Array.isArray(obj.subject)){
        return obj.subject[obj.subject.length - 1]
    } else {
        return obj.subject
    }
}

console.log(getLastSubject(c))