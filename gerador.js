let numeros = [
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60
 ];

 let luckyNumber = [];

 let valueBet = {
    "6": "5,00",
    "7": "35,00",
    "8": "140,00",
    "9": "420,00",
    "10": "1.050,00",
    "11": "2.310,00",
    "12": "4.620,00",
    "13": "8.580,00",
    "14": "15.015,00",
    "15": "25.025,00",
    "16": "40.040,00",
    "17": "61.880,00",
    "18": "92.820,00",
    "19": "135.660,00",
    "20": "193.800,00"
 }

 let numeroSorteado = document.getElementById("numero_sorteado");
 let btnGerar = document.getElementById("btn_gerar");
 let numberQty = document.getElementById("number_qty");
 let betValue = document.getElementById("valor_aposta");
 let valueBetDiv = document.getElementsByClassName("hidden");

 let MAX_NUMBER = numberQty.value;

 betValue.innerText = valueBet[MAX_NUMBER]


 function getRandomNumber(){
    return numeros[ Math.floor( Math.random()*numeros.length)]
 }

 function generateMegaSenaNumbers(){
    luckyNumber = [];
    while(true){
        let randomNum = getRandomNumber();
        if(!luckyNumber.includes(randomNum)){
            luckyNumber.push(randomNum);
        }
        if(luckyNumber.length == MAX_NUMBER){
            break;
        }
    }
    luckyNumber.sort((a,b)=>a-b)
 }

 function clearPreviusLuckyNumber(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function calculateBetValue(){
    betValue.innerText = valueBet[MAX_NUMBER];
    valueBetDiv[0].classList.remove('hidden');
}

function createNumberElement(value){
    const div = document.createElement("div");
    const num = document.createTextNode(value);
    div.classList.add('number')
    div.appendChild(num);
    return div;
}

numberQty.addEventListener('change', ()=>{
    MAX_NUMBER = numberQty.value;
 })

btnGerar.addEventListener('click', function(){

    clearPreviusLuckyNumber(numeroSorteado);

    generateMegaSenaNumbers();

    luckyNumber.map(value => {
        const numDiv = createNumberElement(value)
        numeroSorteado.appendChild(numDiv)
    })
    
    calculateBetValue()

})

