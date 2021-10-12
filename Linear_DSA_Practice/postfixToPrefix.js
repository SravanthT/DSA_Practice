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
    peek(){
        return this.elements.length;}
    
}

function isOperator(x)
    {
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
 
    function postToPre(post_exp)
    {
        let sr = [];
  
        let length = post_exp.length;
  
        for (let i = 0; i < length; i++) {

            if (isOperator(post_exp[i])) {
 
                let op1 = sr[sr.length - 1];
                sr.pop();
                let op2 = sr[sr.length - 1];
                sr.pop();
 
                let temp = post_exp[i] + op2 + op1;
  
                sr.push(temp);
            }
  
            else {
  
                sr.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (sr.length > 0)
            ans += sr.pop();
        return ans;
    }
     
    let post_exp = "AB+CD-*";
        
    console.log("Prefix is " + postToPre(post_exp));