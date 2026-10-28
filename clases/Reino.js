export class Reino{

    //Atributos
    nombre;
    casas;
    rey;

    //Constructor parametrizado
    constructor(nombre,rey){
        this.nombre=nombre;
        this.casas=[];
        this.rey=rey;
    }

    //Metodo de añadir casa, nada simplemente comprueba si no hay duplicados con la variable existe y lo meto en el array
    añadir_casa(casa){
        let existe=this.casas.some(c=>c.nombre===casa.nombre);
        if(!existe){
            this.casas.push(casa);
            console.log("La Casa "+casa.nombre+" ha sido añadido al Reino de "+this.nombre);
        }
    }

    //Metodo que lista todas las casas de un reino 
    mostrar_casas(){
        console.log("Casas del Reino de "+this.nombre+":");
        for(let casa of this.casas){
            console.log("- Casa "+casa.nombre);
        }
    }

    //Metodo que muestra informacion del rey de el Reino
    mostrar_info_rey(){
        console.log("Rey actual:");
        console.log("El rey actual es "+this.rey.nombre+" de la Casa "+this.nombre);
    }

    //Metodo que proclamara rey al rey que le pasemos por parametro
    proclamar_rey(rey) {
        if(rey instanceof Rey){
            this.rey = rey;
            console.log(rey.nombre+" ha sido proclamado rey de "+this.nombre);
        }
    }

    //Getters and Setters
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    getCasas(){
        return casas;
    }
    setCasas(casas){
        this.casas=casas;
    }
    getRey(){
        return rey;
    }
    setRey(rey){
        this.rey=rey;
    }

}