// prac4.js

class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.ldisponibles = [];
    }
}

class Tienda extends Productos {
    constructor(nombre, precio, televisores, laptops, smartphone, accesorios) {
        super(nombre, precio);
        this.televisores = televisores;
        this.laptops = laptops;
        this.smartphone = smartphone;
        this.accesorios = accesorios;
    }

    multi() {
        let tele = this.televisores * this.precio
        let lap = this.laptops * this.precio
        let smart = this.smartphone * this.precio
        let accesori = this.accesorios * this.precio

        return tele + lap + smart + accesori
    }
}

let nom = prompt("Nombre cliente");
let v1 = parseFloat(prompt("Cantidad de televisores"));
let v2 = parseFloat(prompt("Precio televisores"));
let v3 = parseFloat(prompt("Cantidad de laptops"));
let v4 = parseFloat(prompt("Precio laptops"));
let v5 = parseFloat(prompt("Cantidad de smartphones"));
let v6 = parseFloat(prompt("Precio smartphones"));
let v7 = parseFloat(prompt("Cantidad de accesorios"));
let v8 = parseFloat(prompt("Precio accesorios"));

let tienda = new Tienda(nom, v1, v2, v3, v4, v5, v6, v7, v8);

document.getElementById('nombre').innerText = nom;
document.getElementById('cantidad1').innerText = v1;
document.getElementById('precio1').innerText = v2;
document.getElementById('cantidad2').innerText = v3;
document.getElementById('precio2').innerText = v4;
document.getElementById('cantidad3').innerText = v5;
document.getElementById('precio3').innerText = v6;
document.getElementById('cantidad4').innerText = v7;
document.getElementById('precio4').innerText = v8;
document.getElementById('total').innerText = tienda.multi();

