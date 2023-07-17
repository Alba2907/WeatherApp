

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <div class="city-inner">
                  <input type="text" class="search">
                </div>
            <weather-summary />
              </div>
            </section>
            <section class="section section-right">
              <div class="section highlights">
                <div class="title">
                  Today's Highlights
                </div>
                <div class="highlights-wrapper">
                  <div class="highlight">
                    <div class="card">
                      <div class="card-title">
                        Wind
                      </div>
                      <div class="card-pic card-pic--wind"></div>
                      <div class="card-info">
                        <div class="card-justify">
                          <div class="info-main">
                            <div class="info-main-num">
                              3.6
                            </div>
                            <div class="info-main-text">
                              m/s
                            </div>
                          </div>
                          <div class="info-main">
                            <div class="info-main-num">
                              350
                            </div>
                            <div class="info-main-text">
                              deg
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-small">
                      <div class="card-small-title">
                        Wind gusts
                      </div>
                      <div class="card-small-info">
                        <div class="card-small-data">
                          <div class="info-main-num">
                            8.4
                          </div>
                          <div class="info-main-text">
                            m/s
                          </div>
                        </div>
                        <div class="card-small-hint">
                          <div class="card-small-pic card-small-pic--wind"></div>
                          <div class="card-small-text text-egorova">
                            Learn
                            <a href="https://www.windy.com/articles/weather-phenomena-what-s-the-difference-between-sustained-winds-and-wind-gusts-10390?satellite,7.787,115.115,5" target="_blank">more</a>
                            about gusts
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="highlight">
                    <div class="card">
                      <div class="card-title">
                        Pressure
                      </div>
                      <div class="card-pic card-pic--pressure"></div>
                      <div class="card-info">
                        <div class="card-centered">
                          <div class="info-main">
                            <div class="info-main-num">
                              765
                            </div>
                            <div class="info-main-text">
                              mm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-small">
                      <div class="card-small-title">
                        Feels like
                      </div>
                      <div class="card-small-info">
                        <div class="card-small-data">
                          <div class="info-main-num">
                            21
                          </div>
                          <div class="info-main-text">
                            °C
                          </div>
                        </div>
                        <div class="card-small-hint">
                          <div class="card-small-pic card-small-pic--margin card-small-pic--pressure"></div>
                          <div class="card-small-text">
                            How hot or cold it really feels
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="highlight">
                    <div class="card">
                      <div class="card-title">
                        Sunrise and sunset
                      </div>
                      <div class="card-pic card-pic--sun"></div>
                      <div class="card-info">
                        <div class="states">
                          <div class="state">
                            <div class="state-pic"></div>
                            <div class="state-title">
                              Sunrise
                            </div>
                            <div class="state-time">
                              07:31:42
                            </div>
                          </div>
                          <div class="state">
                            <div class="state-pic state-pic--flipped"></div>
                            <div class="state-title">
                              Sunset
                            </div>
                            <div class="state-time">
                              18:34:19
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-small">
                      <div class="card-small-title">
                        Cloudiness
                      </div>
                      <div class="card-small-info">
                        <div class="card-small-data">
                          <div class="info-main-num">
                            80
                          </div>
                          <div class="info-main-text">
                            %
                          </div>
                        </div>
                        <div class="card-small-hint">
                          <div class="card-small-pic card-small-pic--sun"></div>
                          <div class="card-small-text">
                            The sky fraction obscured by clouds
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="sections">
            <section class="section-bottom">
              <div
                  class="block-bottom"
              >
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-coords"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Longitude: 2.3488
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Longitude measures distance east or west of the prime meridian.
                      </div>
                    </div>
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Latitude: 48.8534
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to the equator.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="section-bottom">
              <div
                  class="block-bottom"
              >
                <div class="block-bottom-inner">
                  <div class="block-bottom-pic pic-humidity"></div>
                  <div class="block-bottom-texts">
                    <div class="block-bottom-text-block">
                      <div class="block-bottom-text-block-title">
                        Humidity: 60 %
                      </div>
                      <div class="block-bottom-text-block-desc">
                        Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye.
                        <br /><br />
                        The same amount of water vapor results in higher relative humidity in cool air than warm air.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
 import WeatherSummary from './components/WeatherSummary.vue'



</script>

<style lang="sass" scoped>

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

.highlights
  padding: 28px 16px 16px
  background: url("./assets/img/gradient-4.jpg") no-repeat 0% 0%
  background-size: cover
  border-radius: 25px

.highlights-wrapper
  display: flex
  justify-content: space-between



  @media (max-width: 575px)
    .highlights-wrapper
      flex-direction: column


.title
  padding-bottom: 16px

.highlight
  width: 32%

  @media (max-width: 575px)
    .highlight
      width: 100%


.card
  min-height: 230px
  padding: 16px
  background: url("./assets/img/gradient-2.jpg") no-repeat 50% 50%
  background-size: cover
  border-radius: 8px

@media (max-width: 1199px)
.card
  padding: 12px


.card-centered
  display: flex
  justify-content: center
  margin-top: 40px

.card-justify
  display: flex
  justify-content: space-between
  margin-top: 40px

.card-title
  padding-bottom: 12px
  font-size: 13px

@media (max-width: 1199px)
.card-title
  font-size: 12px


.card-pic
  width: 100%
  height: 90px
  margin-bottom: 16px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: contain

.card-pic--wind
  background-image: url('./assets/img/equalizer (2).png')

.card-pic--pressure
  background-image: url('./assets/img/barometer.png')

.card-pic--sun
  background-image: url('./assets/img/sun-moving.png')

.states
  display: flex
  justify-content: space-between

.states--margin
  margin-top: 40px

.state
  width: 40%

.state:last-child
  text-align: right

.state-pic
  width: 20px
  height: 20px
  margin-bottom: 6px
  background: url("./assets/img/sun.svg") no-repeat 50% 50%
  background-size: cover

.state-pic--flipped
  margin-left: auto
  -webkit-transform: scaleX(-1)
  transform: scaleX(-1)

.state-title
  font-size: 12px
  color: $gold

.state-time
  font-size: 13px
  font-weight: 700

@media (max-width: 1199px)
.state-time
  font-size: 11px


.info-main
  display: flex
  align-items: flex-end

.info-main:last-child
  text-align: right

.info-main-num
  font-size: 20px

@media (max-width: 1199px)
.info-main-num
  font-size: 18px


.info-main-text
  padding-left: 2px
  padding-bottom: 3px
  font-size: 13px
  color: rgba(255, 255, 255, 0.75)

@media (max-width: 1199px)
.info-main-text
  padding-bottom: 1.5px
  font-size: 12px


.card-small
  margin-top: 12px
  padding: 12px 16px
  background: url("./assets/img/gradient-2.jpg") no-repeat 50% 50%
  background-size: cover
  border-radius: 8px

.card-small-title
  font-size: 13px

.card-small-info
  display: flex
  justify-content: space-between
  align-items: center

@media (max-width: 1199px)
.card-small-info
  flex-direction: column
  align-items: flex-start


.card-small-pic
  width: 20px
  height: 20px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: contain

@media (max-width: 1199px)
.card-small-pic
  display: none


.card-small-pic--margin
  width: 16px
  height: 16px
  margin-bottom: 3px

.card-small-pic--wind
  background-image: url('./assets/img/gusts.svg')

.card-small-pic--pressure
  background-image: url('./assets/img/humidity.svg')

.card-small-pic--sun
  background-image: url('./assets/img/cloud.svg')

.card-small-data
  display: flex
  align-items: flex-end
  width: 45%

@media (max-width: 1199px)
.card-small-data
  width: 100%
  padding-top: 8px


.card-small-hint
  width: 55%

@media (max-width: 1199px)
.card-small-hint
  width: 100%


.card-small-text
  font-size: 11px
  line-height: 1.2
  color: rgba(255, 255, 255, 0.6)

@media (max-width: 1199px)
.card-small-text
  min-height: 22px
  font-size: 9px


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
