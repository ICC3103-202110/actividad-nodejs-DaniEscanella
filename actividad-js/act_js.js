
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
  
function fio(num){
    if (num == 0){
        return 0
    } else if (num ==1){
        return 1
    } else{
        value =fio(num-1)+fio(num-2)
        return value
    }
}

readline.question(`Choose a number: `, number => {

    total=fio(number);
    console.log(total)
    readline.close()
});
