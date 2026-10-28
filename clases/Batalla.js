import { Guerrero } from "./personajesEspeciales/Guerrero.js";

export class Batalla{

    #casaA;
    #casaB;
    #guerrerosMuertos;
    #guerrerosVivos;

    //Constructor parametrizado
    constructor(casaA,casaB){
        this.#casaA=casaA;
        this.#casaB=casaB;
        this.#guerrerosMuertos=[];
        this.#guerrerosVivos=[];
    }

    //Metodo iniciar batalla
    iniciarBatalla(casaA,casaB){

        //Mientras que la casa A no sea igual a la casa B entra
        if(casaA!=casaB){

            //Creamos dos arrays donde meteremos a los miembros que van a luchar de cada casa
            let guerrerosA = [];
            let guerrerosB = [];

            console.log("Iniciamos la lucha...");

            //Comprobamos si cada guerrero es un guerrero y si estan vivos
            guerrerosA = casaA.miembros.filter(p => p instanceof Guerrero && p.getVivo());
            guerrerosB = casaB.miembros.filter(p => p instanceof Guerrero && p.getVivo());

            let guerrero1 = this.elegirGuerrero(guerrerosA);
            let guerrero2 = this.elegirGuerrero(guerrerosB);

            console.log(`Los guerreros que pelearán de la casa ${casaA.getNombre()} serán los siguientes: `);
            console.log(guerrerosA);
            console.log(`Los guerreros que pelearán de la casa ${casaB.getNombre()} serán los siguientes: `);
            console.log(guerrerosB);

            this.#guerrerosMuertos = [];

            while(guerrerosA.length>0&&guerrerosB.length>0){

                console.log(`\nNuevo enfrentamiento: ${guerrero1.getNombre()} vs ${guerrero2.getNombre()}`);
                
                guerrero1.atacar(guerrero2);
                
                if(guerrero2.getVivo()){
                    guerrero2.atacar(guerrero1);
                }

                if(!guerrero1.getVivo()){
                    guerrerosA.shift();
                    this.#guerrerosMuertos.push(guerrero1);
                }

                if(!guerrero2.getVivo()){
                    guerrerosB.shift();
                    this.#guerrerosMuertos.push(guerrero2);
                }

                console.log(`${guerrero1.getNombre()}: ${guerrero1.getVida()} | ${guerrero2.getNombre()}: ${guerrero2.getVida()}`)
            
                //Si el guerrero 1 esta muerto y el ejercito A sigue tieniendo guerreros, elegimos otro
                if(!guerrero1.getVivo() && guerrerosA.length>0){
                    guerrero1 = this.elegirGuerrero(guerrerosA);
                }
                if(!guerrero2.getVivo() && guerrerosB.length>0){
                    guerrero2 = this.elegirGuerrero(guerrerosB);
                }
            }

            this.#guerrerosVivos = guerrerosA.concat(guerrerosB);

            //Si el ejercito A o el B no tiene guerreros significa que han perdido
            if(guerrerosA.length>0){
                console.log(`La batalla ha sido ganada por la Casa ${casaA.getNombre()}`);
            }
            else{
                console.log(`La batalla ha sido ganada por la Casa ${casaB.getNombre()}`);
            }
            
        }
        else{
            console.log("Una casa no puede enfrentarse a si misma");
        }
    }

    //Eligo que guerrero] va a luchar en la batalla con un random
    elegirGuerrero(guerreros){
        let indice = Math.floor(Math.random() * guerreros.length);
        return guerreros[indice];
    }

    //Metodo guerreros muestos le paso un array que creare en batalla que lo vaya cargando con los que mueren en combate
    mostrarGuerrerosMuertosEnCombate(){
        console.log(this.#guerrerosMuertos);
    }

    //Metodo mostrar supervivientes, ire mostrando un array que cargare en inicar Batalla en los que los guerreros salgan vivos del combate
    mostrarSupervivientes(){
        console.log(this.#guerrerosVivos);
    }

    //Getters y Setters
    getCasaA(){
        return this.#casaA;
    }
    setCasaA(casaA){
        this.#casaA=casaA;
    }
    getCasaB(){
        return this.#casaB;
    }
    setCasaB(casaB){
        this.#casaB=casaB;
    }

}