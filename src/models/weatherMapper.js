const sanitizeUrl = require('@braintree/sanitize-url').sanitizeUrl

export const mapWeather = (weather = {}) => {
  return {
    icon: _mapWeatherIcon(weather.WeatherIcon, weather.IsDayTime),
    temperature: weather.Temperature.Metric.Value || '-',
    link: sanitizeUrl(weather.Link)
  }
}

export const mapWeatherIcon = _mapWeatherIcon
// https://developer.accuweather.com/weather-icons
function _mapWeatherIcon(weatherId, isDayTime = true) {
  switch (weatherId) {
    case 1:
    case 2:
    case 3:
      return 'el-icon-sunny'
    case 4:
    case 5:
    case 20:
      return 'el-icon-cloudy-and-sunny'
    case 6:
      return 'el-icon-partly-cloudy'
    case 7:
      return 'el-icon-cloudy'
    case 12:
    case 13:
    case 14:
      return 'el-icon-light-rain'
    case 15:
    case 16:
    case 17:
      return 'el-icon-lightning'
    case 18:
      return 'el-icon-heavy-rain'

    default:
      return isDayTime ? 'el-icon-sunny' : 'el-icon-moon'
  }
}
