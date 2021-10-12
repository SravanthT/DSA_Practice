function Hannoi(n,start,destination,through){
    if (n==0){
      return;
    }
    Hannoi(n-1,start,through,destination);
    
    console.log('Move disk from Tower '+ start +' to Tower '+ destination)
    
    Hannoi(n-1,through,destination,start)
    
  }
  
  Hannoi(3,"A","C","B")