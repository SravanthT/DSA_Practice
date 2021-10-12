// Q3. Write a program to check if two strings are a rotation of each other?

console.log(checkRotation("ABCD","CDA"))
function checkRotation(string,str){
  
  if ((string + string).includes(str)){
    return "yes they are rotational"
  }else{
    return "NO"
  }
  
}