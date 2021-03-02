import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import HourlyWeatherItem from '../HourlyWeatherItem/HourlyWeatherItem';
import './hourlyWeatherList.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const HourlyWeatherList = ({ futureWeather }) => (
  <div className="hourly-weather-list">
    <Swiper
      id="main"
      navigation
      pagination={{ clickable: true }}
      spaceBetween={1}
      slidesPerView={4}
    >
      {futureWeather.map(({ weather, dt: hour, main }) => (
        <SwiperSlide key={hour}>
          <HourlyWeatherItem
            icon={weather[0].icon}
            temperature={main.temp}
            hour={hour}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default HourlyWeatherList;
