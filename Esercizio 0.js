"use strict"

function Trasformastringa (stringa) {

    for (let iterazione of stringa){

        if(iterazione.length>=3){

            let Parte1 = iterazione.slice(0,2);
            let Parte2 = iterazione.slice(-2,);
            console.log(Parte1+Parte2);

        } else {

            if((iterazione.length)<2){

                console.log("-");

            }
            else {

            console.log(iterazione+iterazione);  

            }

        }
    } 
};

const Prova = ["spring", "it", "cat", "a"];

Trasformastringa(Prova);


