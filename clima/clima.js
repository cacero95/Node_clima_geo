const axios = require('axios');

const getClima = async (location) =>{
    console.log(location)
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=f578c7ad80a0bd95cd6e842412f084ea&units=metric`)
    return res.data.main; 
}
module.exports = {
    getClima
}