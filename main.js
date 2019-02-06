let calculo
class CalculadoraClass {
    constructor() {
        this.resultado = "";
        this.number1 = "";
        this.number2 = "";
        this.operator = "";
    }

    sumar() {this.resultado = this.getNumber1 + this.getNumber2; }
    restar() { this.resultado = this.getNumber1 - this.getNumber2; }
    multiplicar() { this.resultado = this.getNumber1 * this.getNumber2; }
    dividir() { this.resultado = this.getNumber1 / this.getNumber2; }

    igualar() {
        switch (this.getOperator) {
            case "+":
                this.sumar()
                break;

            case "-":
                this.restar()
                break;

            case "*":
                this.multiplicar()
                break;

            case "/":
                this.dividir()
                break;


            default:
                break;
        }
        this.setNumber1="";
        this.setNumber2="";
        this.setOperator="";
    };

    get getNumber1() { return parseInt(this.number1); }
    set setNumber1(value) { this.number1 = value; }

    get getNumber2() { return parseInt(this.number2); }
    set setNumber2(value) { this.number1 = value; }

    get getResultado() { return this.resultado; }
    set setResultado(value) { this.resultado = value; }

    get getOperator() { return this.operator; }
    set setOperator(value) { this.operator = value; }
}

concatenador = "El número 1 es: ";
let operator;
let resultado;

function getNumber(n) {

    if (calculo.operator == "") {

        calculo.number1 += n.toString();
        console.log("El número 1 es: " + calculo.getNumber1);


    } else {

        calculo.number2 += n.toString();
        console.log("El número 2 es: " + calculo.getNumber2);

    }


    calculo.setResultado = (calculo.getNumber1 + calculo.getOperator + calculo.getNumber2);
    console.log("El resultado es: " + calculo.getResultado);
}



function getOperator(operator) {
    calculo.operator = operator;
    console.log("El operador es: " + calculo.operator);
}

function getItCalculated() {
    calculo.igualar();
    console.log(calculo.getResultado)

}





function crearCalculo() {
    calculo = new CalculadoraClass("");
    console.log(calculo);
}

// function sumarOperacion(number1, number2) {
//     setResultado = calculo + calculo.sumar(number1, number2);
//     console.log(setResultado);
// }

// function restarOperacion(number1, number2) {
//     setResultado = calculo + calculo.restar(number1, number2);
//     console.log(setResultado);
// }

// function multiplicarOperacion(number1, number2) {
//     setResultado = calculo + calculo.multiplicar(number1, number2);
//     console.log(setResultado);
// }

// function dividirOperacion(number1, number2) {
//     calculo = new CalculadoraClass("");
//     setResultado = calculo + calculo.dividir(number1, number2);
//     console.log(setResultado);
// }


// let n1 = document.getElementById("1");
// let n2 = document.getElementById("2");
// let n3 = document.getElementById("3");
// let n4 = document.getElementById("4");
// let n5 = document.getElementById("5");
// let n6 = document.getElementById("6");
// let n7 = document.getElementById("7");
// let n8 = document.getElementById("8");
// let n9 = document.getElementById("9");
// let n0 = document.getElementById("0");
// let npunto = document.getElementById(".");
