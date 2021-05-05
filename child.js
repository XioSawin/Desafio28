const getRandomNumbers = (cant) => {
    let numbers = [];
    for (let i=0; i<cant; i++){
        let rndmNo = Math.floor(Math.random() * (1000 - 1 + 1))
     
        const found = !!numbers.find(numero => {
            return numero.number === rndmNo;
        })

        if(!found){
            numbers.push({"number": rndmNo, "cantidad": 1})
        } else{
            numbers.find(numero => {
                numero.cantidad = numero.cantidad++;
            })
        }
    }
}

process.on('message', cant => {
    const numerosRandom = getRandomNumbers(cant);
    process.send(numerosRandom);
})