function countingValleys(steps, path) {
    // Write your code here
    let init = 0;
    let count = 0;
    
    for(let i = 0; i < steps; i++){
      if(path[i] == 'D'){
       if (init == 0){
          count++;  
       }
       init--;
      }
      else{
        init++;
      }
    }
    return count;
}