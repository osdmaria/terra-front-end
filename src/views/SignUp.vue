<template>
  <div class="signup ">
    <NavBar />
    <div class="container d-flex  flex-row justify-around">

    <div class="div-left d-flex  flex-column">
      <h1 class="title1">Sign up</h1>
      <SignUpNote class="wid" />
    </div>
    <div class="div-right d-flex justify-center align-center my-16 mainC flex-end">
      <SignUpCard />
    </div>
  </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SignUpCard from "@/components/SignUpCard.vue";
import SignUpNote from "@/components/SignUpNote.vue";

export default {
  name: "SignUp",
  components: {
    NavBar,
    SignUpCard,
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
  padding-left:.2em ;
}
.mainC{
  width: 100%;
  margin-right:3em;
  padding: 0;
}
.wid{
  width: 100%;
  margin:2em 0em 0em;   
}
</style>
