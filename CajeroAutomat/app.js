var cuentas = [
    {
        nombre: 'Delia',
        contraseña: 'delia123',
        saldo: 500,
    },
    {
        nombre: 'Misato',
        contraseña: 'misato123',
        saldo: 600,

    },
    {
        nombre: 'Lucas',
        contraseña: 'lucas123',
        saldo: 700
    }
];
// console.log(cuentas[2].nombre)



function LogIn() {
    var nombre = document.getElementById('nombre').value
    var contraseña = document.getElementById('contraseña').value
    for (var i = 0; i < cuentas.lenght; i++) {
        if (cuentas[i].nombre == nombre && cuentas[i].contraseña == contraseña) {
             window.location='menu.html'
        } else {
            alert('Usuario y/o contraseña incorrectos');
        }
    }
}








//////MENUS//////////

//SALDO

// var saldo = cuentas[0].saldo
// document.getElementById('saldotxt').innerHTML = '$' + saldo;

// var saldoMisato=cuentas[1].saldo
// document.getElementById('saldotxt').innerHTML = '$'+saldoMisato;

// var saldoLucas=cuentas[2].saldo
// document.getElementById('saldotxt').innerHTML = '$'+saldoLucas;

//OPERACIONES
var cantRetiro = document.getElementById('cantRetiro')
var cantDeposito = document.getElementById('cantDeposito')


function enterRetiro() {
    var numRet = Number(cantRetiro.value)
    if ((saldo - numRet) < 10) {
        alert('Tu saldo no puede se menor a $10')
    } else {
        saldo -= numRet
        document.getElementById('saldotxt').innerHTML = "$" + '' + saldo;
    }
}



function enterDeposito() {
    var numRet = Number(cantDeposito.value)
    saldo += numRet;

    if (saldo > 990) {
        alert('Tu saldo no puede se mayor a $990')
        saldo -= numRet
        return;

    }

    document.getElementById('saldotxt').innerHTML = "$" + '' + saldo;

}


