<template>
  <div class="signup d-flex flex-row">
    <NavBar />
    <div class="div-left">
      <h1>Sign up</h1>
    </div>
    <div class="div-right">
      <v-flex xs12 sm6>
        <v-card hover class="rounded">
          <v-card-media
            src="https://raw.githubusercontent.com/ijklim/simon-game/gh-pages/assets/img/bg--game-pad.jpg"
            height="150px"
          >
          </v-card-media>

          <v-card-title>
            <h2>v-card-title</h2>
          </v-card-title>

          <v-card-text>
            line 1<br />
            line 2<br />
            line 3
          </v-card-text>
        </v-card>
      </v-flex>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "SignUp",
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
