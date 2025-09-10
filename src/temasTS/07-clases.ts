
class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);}
}
const personal = new Persona('', 0);
personal.nombre='Juan';
personal.edad=30;
personal.imprimir();


