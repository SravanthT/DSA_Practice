console.clear()
class Stack {
 
    constructor(){  
        this.elements = []; 
    }
    push(element){ 
        this.elements.push(element) 
    }
    pop(){ 
        if(this.elements.length === 0) return "Underflow situation"; 
        else return this.elements.pop();
    }
    isEmpty(){ 
        if(this.elements.length > 1) return false;
        else return true;
    }
    
}

function reverse(str){
    //Creates a new stack
    let stack = new Stack();
     
    let i = 0;
    let reversedStr = "";
    //Adds all the characters to the stack.
    while (i !== str.length) {
        stack.push(str[i]);
        i++;
    }
    let min = stack.elements[stack.elements.length-1]
    //Creates a reversed string by popping the stack.
    for(i= stack.elements.length-1; i>=0; i-- ) {
      if(min>stack.elements[i]){ 
        min = stack.elements[i]
        stack.pop()
      }
      else{
        stack.pop()
      }
    }
    //returns the reversed string.
    return min;
}
console.log(reverse([1,2,6,5,4,0,9,8,7]))