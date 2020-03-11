const axios = require('axios');

const getLugarlatLn = async(address) =>{
    let output = {};
    const encodedUrl = encodeURI(address)
    // cuando la peticion saca un 200 significa que la peticion fue exitosa
    // un 404 es que no se encontro el url de la peticion
    // un 500 es un error del servidor
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': 'dfd139112cmshcca492e6101d344p10d009jsn25f6c91c70ca'}
      });
      const resp = await instance.get();
      console.log(resp.data);
      if (resp.data.Results.lenght == 0){
          throw new Error(`No hay resultados para ${address}`)
      }
      else {
          let data = resp.data.Results[0];
          output = {
              direction:data.name,
              lat:data.lat,
              lng:data.lon
          }
      }
      return output
    }
module.exports = {
    getLugarlatLn
}