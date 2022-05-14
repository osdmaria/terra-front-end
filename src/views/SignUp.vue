<template>
  <div class="signup ">
    <NavBar />
    <div class="container d-flex  flex-row justify-around">

    <div class="div-left d-flex  flex-column">
      <h1 class="title1">Sign up</h1>
      <SignUpNote class="wid" />
    </div>
    <div class=" my-16 mainC flex-end">
      <SignUpCard />
    </div>
  </div>
  <div class="foot">      
          </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SignUpCard from "@/components/SignUpCard.vue";
import SignUpCard2 from "@/components/SignUpCard2.vue";
import SignUpNote from "@/components/SignUpNote.vue";

export default {
  name: "SignUp",
  components: {
    NavBar,
    SignUpCard,
    SignUpCard2,
    SignUpNote,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin:0;
 
}
.div-right {
  width: 100%;
}
.div-left {
  width: 100%;
}
.title1 {
  font-size:3em;
  padding-top : 1em;
  padding-left:2em ;
}
.mainC{
  width: 100%;
  margin-right:3em;
  padding: 0;
}
.wid{
  width: 100%;
  margin-left: 7em;
  margin-top: 4em;
}
.foot{
    position: absolute;
    background: url("https://media.discordapp.net/attachments/833101375982272592/974942269981470740/some_random_waves.png?width=959&height=213");
    background-size: cover ;
    height: 300px;
    margin-bottom: 4em;
    width: 100%;
}
</style>
