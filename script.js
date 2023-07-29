let exa = "0123456789ABCDEF";
let rezilta = "";

function rantreKoule (repons){
    let reponsUser = prompt(repons).toUpperCase();
    while (!reponsUser || reponsUser.length !== 6 || !kouleTest(reponsUser)) {

        if (!reponsUser){
            console.log("ou sipoze ranpli tout chan yo");
        }
        else if ( reponsUser.length != 6){
            console.log("ou dwe mete 6 karakte");
        }
        else {
            console.log("Ou sipoze rantre karakte egzadesimal selman");
        }
         reponsUser = prompt(repons).toUpperCase();
    }
    return reponsUser;
} 

function kouleTest(reponsUser) {
    for(let el of  reponsUser){
        if (!exa.includes(el)){
            return false;        
        }
    }
    return true;
}

const koule1 = rantreKoule ("Rantre yon premye koule");
const koule2 = rantreKoule ("Rantre yon dezyem koule");


 for (let i = 0;i < 6; i++ ){
    let randomNumber = Math.random();
 
    if (randomNumber<0.5){
        rezilta = rezilta + koule1[i];
    }else{
        rezilta = rezilta + koule2[i];
    }
 }
 

 console.info(`Maryaj koule ${koule1} ak ${koule2} se ${rezilta}`);


