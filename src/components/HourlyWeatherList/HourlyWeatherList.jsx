import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import HourlyWeatherItem from '../HourlyWeatherItem/HourlyWeatherItem';
import './hourlyWeatherList.scss';
import 'swiper/swiper.scss';

const HourlyWeatherList = ({ futureWeather }) => (
  <div className="hourly-weather-list">
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
    >
      {futureWeather.map((item) => {
        const { weather, dt: hour, main } = item;
        return (
          <SwiperSlide>
            <HourlyWeatherItem
              icon={weather[0].icon}
              temperature={main.temp}
              hour={hour}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);

export default HourlyWeatherList;
