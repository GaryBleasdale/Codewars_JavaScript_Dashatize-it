function dashatize(n) {
  if (n<0){
    n = n*-1  
  }
  
 if (isNaN(n)){
   return "NaN"
 }

  let arr= Array.from(String(n),Number)
  let arr2=[]
  for (element of arr){
    if (element%2!=0){
      let pushable = "-"+element+"-"
      arr2.push(pushable)
    } else {
      arr2.push(element)
    }
  }
  let finalString = arr2.join('')
  let finalString2 =finalString.replace(/[-]{2}/g,"-")
  let veryFinalString2
  if (arr[0]%2!=0 && arr[arr.length-1]%2!=0){
    veryFinalString2 = finalString2.slice(1).slice(0,-1) 
  } else if (arr[0]%2!=0 && arr[arr.length-1]%2===0){
    veryFinalString2 = finalString2.slice(1)
  } else if (arr[0]%2===0 && arr[arr.length-1]%2!=0){
    veryFinalString2 = finalString2.slice(0,-1)
  } else {
    veryFinalString2 = finalString2
  }
  

   return veryFinalString2
}

