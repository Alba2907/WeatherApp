<script setup>
import {firstUpperCase, kInC} from "../utils/index.js";


const props = defineProps({
  weatherInfo: {
    type: [Object, null],
    required: true
  },
  city: {
    type: [String, null],
    required: true
  }
})

const newDate = new Date(); //  получаем дату
const sec = 1694833153 * 1000
const time = newDate.getHours()
console.log(time)

const year = newDate.getFullYear()
const day = newDate.getDay(); // получаем номер дня недели
const month = newDate.toLocaleString('en-US', { month: 'long' }) // default\en-US\ru-Rlong\short
const date = newDate.getDate() // получаем число

// var options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

const options = { weekday: 'short' };
const dayOfWeek = newDate.toLocaleString('en-US', options);
console.log(dayOfWeek)



</script>


<template>
  <div class="summary">
    <div
        :style="`background-image: url('weather-main/${weatherInfo?.weather[0].description}.png')`"
        class="pic-main"
    ></div>
    <div class="weather">
      <div class="temp">
        {{ kInC(weatherInfo?.main?.temp) }} °C
      </div>
      <div class="weather-desc text-block">
        {{ firstUpperCase(weatherInfo?.weather[0].description)  }}
      </div>
    </div>
    <div class="city text-block">
      {{ weatherInfo?.name }},
      {{ weatherInfo?.sys?.country }}
    </div>
    <div class="date text-block">
      {{ `${dayOfWeek}, ${month} ${date}, ${year}`}}
    </div>
  </div>
</template>


<style scoped lang="sass">

@import "../assets/styles/main"

.pic-main
  width: 60px
  height: 60px
  margin: 20px 0 12px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: contain


.city
  font-size: 24px

.weather
  margin: 0 0 20px
  padding: 20px 0
  border-bottom: 1px solid rgba(255, 255, 255, 0.4)

.temp
  padding-bottom: 8px
  font-size: 32px

.text-block
  position: relative
  padding-left: 24px
  padding-bottom: 8px
  font-size: 14px

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 20px
    height: 20px
    margin-right: 6px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain

.weather-desc

  &::before
    background-image: url('../assets/img/weather.svg')

.city

  &::before
    background-image: url('../assets/img/location.svg')

.date

  &::before
    left: 2px
    width: 15px
    height: 15px
    background-image: url('../assets/img/calendar.svg')



</style>
