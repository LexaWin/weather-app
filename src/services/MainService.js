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

  URL =
    'http://api.weatherstack.com/current?access_key=918b7030f1eb44350aa0b549a842d49f';

  #transformData(data) {
    return {
      city: data.location.name,
      temperature: data.current.temperature,
      weatherDescription: data.current.weather_descriptions[0],
      weatherProperties: [
        { name: 'cloudcover', value: data.current.cloudcover, unit: '%' },
        { name: 'humidity', value: data.current.humidity, unit: '%' },
        { name: 'wind speed', value: data.current.wind_speed, unit: ' km/h' },
        { name: 'pressure', value: data.current.pressure, unit: ' mbar' },
        { name: 'uv index', value: data.current.uv_index, unit: '' },
        { name: 'visibility', value: data.current.visibility, unit: ' km' },
      ],
      isDay: data.current.is_day === 'yes',
    };
  }

  async getWeather(city) {
    const response = await fetch(`${this.URL}&query=${city}`);
    const data = await response.json();

    return this.#transformData(data);
    // switch (city) {
    //   case 'Los Angeles':
    //     return this.#transformData(this.#nightData);
    //   default:
    //     return this.#transformData(this.#dayData);
    // }
  }
}

export default MainService;
