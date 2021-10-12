var checkParanthesis = function(s) {
    if(typeof s !== "string" || s.length % 2 !== 0) return "Brackets are not Ballanced";
    let i = 0;
    let arr = [];
    while(i<s.length) {
        if(s[i]=== "{" || s[i]=== "(" || s[i]=== "[") {
           arr.push(s[i]);
        } else if(s[i] === "}" && arr[arr.length-1] === "{") {
            arr.pop()
        } else if(s[i] === ")" && arr[arr.length-1] === "(") {
            arr.pop()
        } else if(s[i] === "]" && arr[arr.length-1] === "[") {
            arr.pop()
        } else {
            return "Brackets are not Ballanced";
        }
        i++
    }
    return arr.length === 0;
};
let str = "{([])}";
console.log(checkParanthesis(str))