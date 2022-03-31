var users = [
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

function LogIn() {
    var nombre = document.getElementById('nombre').value
    var contraseña = document.getElementById('contraseña').value
    for (var i = 0; i < users.length; i++) {
        if (users[i].nombre === nombre && users[i].contraseña === contraseña) {
            location.href='menu.html'
            return true
        } else {
            alert('Usuario y/o contraseña incorrectos');
        }
    }

    return false
}



//////MENUS//////////

//SALDO

// var saldo = users[0].saldo
// document.getElementById('saldotxt').innerHTML = '$' + saldo;

// var saldoMisato=users[1].saldo
// document.getElementById('saldotxt').innerHTML = '$'+saldoMisato;

// var saldoLucas=users[2].saldo
// document.getElementById('saldotxt').innerHTML = '$'+saldoLucas;

//OPERACIONES
// var cantRetiro = document.getElementById('cantRetiro')
// var cantDeposito = document.getElementById('cantDeposito')


// function enterRetiro() {
//     var numRet = Number(cantRetiro.value)
//     if ((saldo - numRet) < 10) {
//         alert('Tu saldo no puede se menor a $10')
//     } else {
//         saldo -= numRet
//         document.getElementById('saldotxt').innerHTML = "$" + '' + saldo;
//     }
// }



// function enterDeposito() {
//     var numRet = Number(cantDeposito.value)
//     saldo += numRet;

//     if (saldo > 990) {
//         alert('Tu saldo no puede se mayor a $990')
//         saldo -= numRet
//         return;

//     }

//     document.getElementById('saldotxt').innerHTML = "$" + '' + saldo;

// }


