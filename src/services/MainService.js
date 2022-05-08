class MainService {
  #dayData = {
    request: {
      type: 'City',
      query: 'Kaluga, Russia',
      language: 'en',
      unit: 'm',
    },
    location: {
      name: 'Kaluga',
      country: 'Russia',
      region: 'Kaluga',
      lat: '54.536',
      lon: '36.271',
      timezone_id: 'Europe/Moscow',
      localtime: '2022-05-07 12:26',
      localtime_epoch: 1651926360,
      utc_offset: '3.0',
    },
    current: {
      observation_time: '09:26 AM',
      temperature: 13,
      weather_code: 122,
      weather_icons: [
        'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png',
      ],
      weather_descriptions: ['Overcast'],
      wind_speed: 18,
      wind_degree: 193,
      wind_dir: 'SSW',
      pressure: 1027,
      precip: 0,
      humidity: 58,
      cloudcover: 100,
      feelslike: 11,
      uv_index: 3,
      visibility: 10,
      is_day: 'yes',
    },
  };

  #nightData = {
    request: {
      type: 'City',
      query: 'Los Angeles, United States of America',
      language: 'en',
      unit: 'm',
    },
    location: {
      name: 'Los Angeles',
      country: 'United States of America',
      region: 'California',
      lat: '34.052',
      lon: '-118.243',
      timezone_id: 'America/Los_Angeles',
      localtime: '2022-05-07 02:25',
      localtime_epoch: 1651890300,
      utc_offset: '-7.0',
    },
    current: {
      observation_time: '09:25 AM',
      temperature: 17,
      weather_code: 113,
      weather_icons: [
        'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png',
      ],
      weather_descriptions: ['Clear'],
      wind_speed: 4,
      wind_degree: 10,
      wind_dir: 'N',
      pressure: 1013,
      precip: 0,
      humidity: 80,
      cloudcover: 0,
      feelslike: 17,
      uv_index: 1,
      visibility: 16,
      is_day: 'no',
    },
  };

  #transformData(data) {
    return {
      city: data.location.name,
      temperature: data.current.temperature,
      weatherDescription: data.current.weather_descriptions[0],
      weatherProperties: {
        cloudcover: data.current.cloudcover,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_speed,
        pressure: data.current.pressure,
        uvIndex: data.current.uv_index,
        visibility: data.current.visibility,
      },
      isDay: data.current.is_day === 'yes',
    };
  }

  getWeather(city) {
    return this.#transformData(this.#dayData);
  }
}

export default MainService;
