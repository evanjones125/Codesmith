/* 
these challenges weren't lengthy or difficult enough to warrant a full file dedicated to them
*/

// ---addWaldo---
const addWaldo = obj => {
    obj["Waldo"] = 'unknown';
    return obj;
}
// const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
// console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }


// ---function expression---
const myFunc = () => "Hi there!";
// console.log(myFunc());