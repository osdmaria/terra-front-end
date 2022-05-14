<template>
  <div class="bigger-container">
    <div class="d-flex flex-row justify-space-between pt-16">
      <div class="container-left pr-8 pt-16">
        <h1 >Unlock your full <span class="red--text">potential</span> with habito</h1>
        <p>Habito help you build new habits based on your health data</p>
        <div class="d-flex align-center">
          <Button :text = text />
          <img src="https://media.discordapp.net/attachments/833101375982272592/974786302211919913/akar-icons_watch-device_1.png" alt="">
          <p class="short-note">A smartwatch is required</p>
        </div>
      </div>
      <div class="container-right pt-16">
        <div>
          <img src="https://media.discordapp.net/attachments/833101375982272592/974728783233949717/Someone_meditating_1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button  from "./Button.vue";
export default {
  data() {
    return {
      text: 'Get Started',
    }
    },

  components: {
    Button,
  },
  name: "LandingPart",
  props: {},
  

};
</script>

<style scoped>
h1{
  font-size: 45px;
}
p{
  font-size: 20px;
  margin: 15px 0px;
  font-weight: 500;
}
.short-note{
  font-size: 15px !important;
}
.container-left{
  width: 35em;
}
.container-right{
  width: fit-content;
}
.bigger-container{
    padding: 0.5em 8em;
}
</style>