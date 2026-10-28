export class Arma{

    //Atributos
    nombre; 
    danio; 
    tipo; 

    //Constructor parametrixado
    constructor(nombre,danio,tipo){
        this.nombre=nombre;
        this.danio=danio;
        this.tipo=tipo;
    }

    //Descripcion de cada arma mostrando el nombre tipo y danio
    descripcion(){
        console.log(this.nombre + "("+this.tipo+") - daño: "+this.danio);
    }

    //Getters y Setters
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getdanio() {
        return this.danio;
    }
    setdanio(danio) {
        this.danio = danio;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }

}