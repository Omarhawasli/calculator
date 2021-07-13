const getHistory = () => {
    return document.getElementById("history-value").innerText;
}
const printHistroy = (num) => {
    return document.getElementById("history-value").innerText = num;
}
const getOutput = () => {
    return document.getElementById("output-value").innerText;
}
const printOutput = (num) => {
    if(num === ""){
        document.getElementById("output-value").innerText = (num);
    }else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}
const getFormattedNumber = (num) => {
    if(num === "-"){
        return ""
    }
    let number = Number(num)
    let value = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
    return value
}
printOutput("")

const reverseNumberFormat = (num) => {
    return Number(num.replace(/,/g,''))
}


const number = document.querySelectorAll(".number")
number.forEach(item => {
    item.addEventListener('click',function(){
        let output = reverseNumberFormat(getOutput())
        if(output !== NaN){
            output = output + this.id
            printOutput(output)
        }
    })
})

document.querySelectorAll('.operator').forEach(function(item) {
    item.addEventListener('click',function(){
        let output = getOutput();
        let history = getHistory();
        switch(this.id) {
            case "clear":
                printHistroy("");
                printOutput("");
              break;
            case "backspace":
                var num = reverseNumberFormat(getOutput()).toString()
                if(output){
                    output = num.substr(0, output.length-1);
                    printOutput(output)}
                break;
            case "+":                     
                if(output){
                    printHistroy(`${output} + ${history}`)
                    printOutput("")
                    console.log("plus");
                }
              break;
            case "-":
                if(output){
                    printHistroy(`${output} - ${history}`)
                    printOutput("")
                }
            break;
            case "*":
                if(output){
                    printHistroy(`${output} * ${history}`)
                    printOutput("")
                }
               break;
               case "/":
                   if(output){
                        printHistroy(`${output} / ${history}`)
                        printOutput("")
                   }
               break;
            case "=":
             if(output.length && history.length){
                 printHistroy(new String(`${output} ${history}`))
                 printOutput(eval(history + output))
            }
            printHistroy("")
              break;
          }
    })
});
