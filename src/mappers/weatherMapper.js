export const mapWeather = (data = {}) => {
  return {
    icon: `http://openweathermap.org/img/wn/${
      data?.weather ? data.weather[0].icon : '01d'
    }@2x.png`,
    temperature: parseInt(data?.main?.temp) || '-'
  }
}
