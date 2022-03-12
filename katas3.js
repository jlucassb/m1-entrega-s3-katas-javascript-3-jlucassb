const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(valor){
    console.log(valor)
}
function kata1() {
    let resultado = []
    for(let i = 1; i <= 25; i++){
       resultado.push(i)
    }
    return resultado
}
showResults(kata1())

function kata2() {
    let resultado = []
    for(let i = 25; i > 0; i--){
        resultado.push(i)
    }
    return resultado
}
showResults(kata2())

function kata3() {
    let resultado = []
    for(let i = -1; i >= -25; i--){
        resultado.push(i)
    }
    return resultado
}
showResults(kata3())

function kata4() {
    let resultado = []
    for(let i = -25; i < 0; i++){
        resultado.push(i)
    }
    return resultado
}
showResults(kata4())

function kata5() {
    let resultado = []
    for(let i = 25; i >= -25; i--){
        if(i % 2 !== 0){
            resultado.push(i)
        }
    }
    return resultado
}
showResults(kata5())

function kata6() {
    let resultado = []
    for(let i = 3; i <= 100; i++){
        if(i % 3 === 0){
            resultado.push(i)
        }
    }
    return resultado
}
showResults(kata6())

function kata7() {
    let resultado = []
    for(let i = 7; i <= 100; i++){
        if(i % 7 === 0){
            resultado.push(i)
        }
    }
    return resultado
}
showResults(kata7())

function kata8() {
    let resultado = []
    for(let i = 100; i >= 3; i--){
        if(i % 3 === 0 || i % 7 === 0){
            resultado.push(i)
        }
    }
    return resultado
}
showResults(kata8())

function kata9() {
    let resultado = []
    for(let i = 5; i <= 100; i++){
        if(i % 5 === 0 && i % 2 !== 0){
            resultado.push(i)
        }
    }
    return resultado
}
showResults(kata9())

function kata10() {
    let resultado = []
    for(let i = 0; i < sampleArray.length; i++){
        resultado.push(sampleArray[i])
    }
    return resultado
}
showResults(kata10())

function kata11() {
    let resultado = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}
showResults(kata11())

function kata12() {
    let resultado = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}
showResults(kata12())

function kata13() {
    let resultado = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            resultado.push(sampleArray[i])
        }
    }
    return resultado
}
showResults(kata13())

function kata14() {
    let resultado = []
    for(let i = 0; i < sampleArray.length; i++){
        resultado.push(sampleArray[i] * sampleArray[i])
    }
    return resultado
}
showResults(kata14())

function kata15() {
    let resultado = 0
    for(let i = 0; i <= 20; i++){
        resultado +=i
    }
    return resultado
}
showResults(kata15())

function kata16() {
    let resultado = 0
    for(let i = 0; i < sampleArray.length; i++){
        resultado += sampleArray[i]
    }
    return resultado
}
showResults(kata16())

function kata17() {
    let resultado = 0
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > resultado){
            resultado = sampleArray[i]
        }
    }
    return resultado
}
showResults(kata17())

function kata18() {
    let resultado = 1000
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < resultado){
            resultado = sampleArray[i]
        }
    }
    return resultado
}
showResults(kata18())



function kataBonus1() {
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}

