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
    let number = Number(num)
    let value = number.toLocaleString("en")
    return value
}
printOutput("")

const reverseNumberFormat = (num) => {
    return Number(num.replace(/,/g,''))
}

const operator = document.getElementsByClassName("operator")
console.log("operator", typeof(operator));


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
        const output = getOutput();
        const history = getHistory();
        switch(this.id) {
            case "clear":
                printHistroy("");
                printOutput("");
              break;
            case "backspace":
                const outputS = reverseNumberFormat(getOutput()).toString()
                if(output){
                    output = outputS.substr(0, output.length-1);
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
                printHistroy(`${output} / ${history}`)
                printOutput("")
               break;
            case "=":
             if(output.length && history.length){
                 printHistroy(new String (` ${history} ${output}`))
                 printOutput(eval(history + output))
            }
            printHistroy("")
              break;
          }
    })
});




// document.querySelectorAll('.operator').forEach(item => {
//     item.addEventListener('click', () => { 
//         console.log("clicked");
//         if(this.id === "clear"){
//             console.log("clear");
//             printHistroy("");
//             printOutput("")
//         } if(this.id === "backspace"){
//             var output = reverseNumberFormat(getOutput()).toString()
//             if(output){
//                 output = output.substr(0, output.length-1);
//             printOutput(output)}
//         }
//     })
// })