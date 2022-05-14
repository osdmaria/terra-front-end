<template>
  <v-app>
      <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
  }),
};
</script>


<style scoped>
#app{
  font-family: 'Poppins', sans-serif;

}
v-app{
  align-items: center;
}

</style>
