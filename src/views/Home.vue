<template>
  <div class="home">
    <NavBar />
    <LandingPart/>
    <h1>Features</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import LandingPart from "@/components/LandingPart.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    LandingPart,
  },
};
</script>
