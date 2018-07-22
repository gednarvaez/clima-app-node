const axios = require("axios");

const getClima = async (lat , lng) =>{
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=6e073c66c2e2c5f630adfc6d97fdb4cb`);
  
    return resp.data.main.temp
  //console.log (resp)
}

module.exports = {
    getClima
}