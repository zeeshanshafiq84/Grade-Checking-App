
function GradeCalculate (event){
        {event.preventDefault()}


let percentage = document.getElementById("percentage").value;
let result = ""

if (percentage <0){
   result ='Invalid percentage, must be between 0 and 100'
   console.log(result);

} else if (percentage <=0 && percentage <50) {
    result ='Sorry you are failed'
    console.log(result);

}else if(percentage >=50 && percentage <60){
    result ='Grade C'
    console.log(result);
 
}else if(percentage >=60 && percentage <70){
    result ='Grade B'
    console.log(result);
 
}else if(percentage >=70 && percentage <80){
    result ='Grade A'
    console.log(result);
    

}else if(percentage >=80 && percentage <=100){
    result ='Grade A1'
    console.log(result);

} else {
    result ='Invalid percentage, must be between 0 and 100'
    console.log(result);
}

document.querySelector("#result").innerHTML=result


}