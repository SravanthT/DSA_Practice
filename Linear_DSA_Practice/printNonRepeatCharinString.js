// Q4. Write a program to print the first non-repeated character from a string?

chckNonRepeat('hhjklkjhhb')
function chckNonRepeat(s){
    for (i=0;i<s.length;i++){
      // console.log(s.indexOf(`${s[i]}`,i+1))
      // console.log(s.indexOf(s[i]))
        if (s.indexOf(s[i],i+1) == -1){
          console.log(s[i])     
          return s[i]
        }
    }
}