const getHistory = () => {
    return document.getElementById("history-value").innerText;
}
const printHistroy = (num) => {
    return document.getElementById("history-value").innerText=num;
}
const getOutput = () => {
    return document.getElementById("output-value").innerText;
}
const printOutput = (num) => {
    if(num === ""){
        document.getElementById("output-value").innerText=(num);
    }else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);

    }
}

const getFormattedNumber = (num) => {
    let number = Number(num)
    let value = number.toLocaleString("en")
    return value
}
printOutput("")

let reverseNumberFormat = (num) => {
    return Number(num.replace(/,/g,''))
}

let operator = document.getElementsByClassName("operator")
console.log("operator", typeof(operator));

document.querySelectorAll('.operator').forEach(function(item) {
    item.addEventListener('click',function(){
        switch(this.id) {
            case "clear":
                printHistroy("");
                printOutput("");
              break;
            case "backspace":
                var output = reverseNumberFormat(getOutput()).toString()
                if(output){
                    output = output.substr(0, output.length-1);
                    printOutput(output)}
                break;
            case "+": 
                var output = getOutput()
                var history = getHistory()
                printHistroy(`${output} + ${history}`)
                    printOutput("")
                    console.log("plus");
              break;
            case "-":
                var output = getOutput()
                var history = getHistory()
                printHistroy(`${output} - ${history}`)
                printOutput("")
            break;
            case "*":
                var output = getOutput()
                var history = getHistory()
                printHistroy(`${output} * ${history}`)
                printOutput("")
               break;
               case "/":
                printHistroy(`${output} / ${history}`)
                printOutput("")
               break;
            case "=":
                var history = getHistory();
                var output = getOutput();
             if(output.length && history.length){
                 printHistroy(new String (` ${history} ${output}`))
                 printOutput(eval(history + output))
            }
            printHistroy("")
              break;
          }
    })
});


let number =document.querySelectorAll(".number")
number.forEach(item => {
    item.addEventListener('click',function(){
        let output = reverseNumberFormat(getOutput())
        if(output !== NaN){
            output= output+this.id
            printOutput(output)
        }
    })
})
