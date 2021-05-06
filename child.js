const getRandomNumbers = () => {
    let numbers = [];
    const cantDef = 2000;
    for (let i=0; i<cantDef; i++){
        let rndmNo = Math.floor(Math.random() * (1000 - 1) + 1);
     
        const foundNumber = numbers.find(item => {
            return item.number === rndmNo;
        })

        const foundIndex = numbers.findIndex(item => {
            return item.number === rndmNo;
        })

        if(!foundNumber){
            numbers.push({number: rndmNo, cantidad: 1})
        } else {
            let cantidad = numbers[foundIndex].cantidad;
            numbers[foundIndex].cantidad = cantidad+1;
        }
    }
    return numbers;
}

process.on('message', msg => {
    const numerosRandom = getRandomNumbers();
    process.send(numerosRandom);
})
