<script setup>
import WeatherSummary from './components/WeatherSummary.vue'
import HighLights from "./components/HighLights.vue";
import {API_KEY, BASE_URL} from "./API/index.js";
import {ref, onMounted} from "vue";
import Coords from "./components/Coords.vue";
import Humidity from "./components/Humidity.vue";
import Error from "./components/Error.vue";

const city = ref('Krasnodar')
const weatherInfo = ref(null)



const getWeather = () => {
  // &units=metric можно вставить чтобы перевести метрику в цельсии
  fetch(`${BASE_URL}?q=${city.value}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => weatherInfo.value = data)
}



onMounted(getWeather)
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input
                      v-model="city"
                      @keyup.enter="getWeather"
                      type="text"
                      :class="[weatherInfo?.weather ? 'search' : 'search error']"
                  >
                </div>
            <weather-summary
            v-if="weatherInfo?.weather"
            :weatherInfo="weatherInfo"
            :city="city"
            />
                <error
                v-else
                />
              </div>
            </section>
            <section class="section section-right">
            <high-lights
            :weatherInfo="weatherInfo"
            />
            </section>
          </div>
          <div class="sections">
            <coords
                :weatherInfo="weatherInfo"
            />
            <humidity
                :weather-info="weatherInfo"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>



<style lang="sass" >

@import "assets/styles/main"

.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  padding: 20px 0
  background-color: #59585d

.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section-left
  width: 30%
  padding-right: 10px

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.section-right
  width: 70%
  padding-left: 10px

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('./assets/img/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  padding: 16px
  font-family: 'Inter', Arial, sans-serif
  color: $white
  background-color: rgba(0, 0, 0, 0.75)
  border-radius: 16px
  border: none
  outline: none
  cursor: pointer

.search.error
  color: red
  text-decoration: underline


.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%


    //---highlight--//

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

.text-block::before
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

.weather-desc::before
  background-image: url("./assets/img/weather.svg")

.city::before
  background-image: url("./assets/img/location.svg")

.date::before
  left: 2px
  width: 15px
  height: 15px
  background-image: url("./assets/img/calendar.svg")

.pic-coords
  background-image: url("./assets/img/compass.png")

.pic-humidity
  background-image: url("./assets/img/humidity.png")

.block-bottom
  height: 100%
  margin-left: 10px
  padding: 28px 16px 16px
  background: url('./assets/img/gradient-1.jpg') no-repeat 0% 0%
  background-size: cover
  border-radius: 25px

  &-inner
    display: flex
    align-items: center

    @media (max-width: 575px)
      flex-direction: column

  &-pic
    width: 15%
    height: 70px
    background-size: contain
    background-repeat: no-repeat
    border-radius: 16px

    @media (max-width: 575px)
      width: 30%
      margin-right: 0

  &-texts
    width: 85%
    padding-left: 20px

    @media (max-width: 575px)
      width: 100%
      padding-top: 16px
      padding-left: 0

  &-text-block

    &:first-child
      padding-bottom: 12px

    &-title
      padding-bottom: 4px
      font-size: 15px
      font-weight: 700

    &-desc
      font-size: 13px
      color: rgba($white, 0.75)


</style>
