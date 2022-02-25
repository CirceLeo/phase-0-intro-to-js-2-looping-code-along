function writeCards(namesArray, event) {
    let cardArray = []
    for (let i = 0; i < namesArray.length; i++){
        let tempMessage = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`
        cardArray.push(tempMessage)
    }
    return cardArray
}

function countDown(int){
    let counter = int;
    while (counter >=0){
        console.log(counter--)
    }
}