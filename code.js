 
 let resultBox = document.querySelector(".container-top");
 
 
 function  topDisplay(num){
    console.log(num);
    let value = num.innerHTML;
    let boxValue = resultBox.innerHTML;
    console.log(boxValue);
    
    if (boxValue === "0"){
    resultBox.innerHTML = value.toString();  
    }
    else 
      resultBox.innerHTML =  boxValue.toString() + value.toString();  
    console.log( " after " + resultBox.innerHTML);     
 }

 function calculator (){
    let result = resultBox.innerHTML;
    console.log("result" + result);
    let y = result.substring(0,result.length-1); 

    if (y.includes("%")){
      let final =  y.replace("%","/");
      resultBox.innerHTML = eval(final);
    }
    else if (y.includes("x")){
     final =  y.replace("x","*");
     console.log(final);
     resultBox.innerHTML = eval(final);
    }
    else 
        resultBox.innerHTML = eval(y);   
 }

 
     