const calculation =(num1,num2,operation)=>{
  switch (operation) {
    case "add":
    return   `${num1} + ${num2} = ${num1 + num2}`;
    
    case "sub":
     return  `${num1} - ${num2} = ${num1 - num2}`;
     
    case "mul":
     return  `${num1} * ${num2} = ${num1 * num2}`;
     
    case "div":
  
        num2 !== 0
          ? result=`${num1} / ${num2} = ${num1 / num2}`
          : result= "Error: Division by zero!";
        return result; 
    default:
     return  "Invalid operation";
  }


}
module.exports=calculation