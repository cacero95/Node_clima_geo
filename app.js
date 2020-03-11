const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direction: {
        alias:'d',
        desc:'Town direction for reach its weather',
        demand:true
    }
}).argv;

lugar.getLugarlatLn(argv.direction).then((out)=>{
    console.log(out)
    clima.getClima(out).then((salida)=>{
        console.log(salida);
    }).catch(err=>console.log(err))
});
