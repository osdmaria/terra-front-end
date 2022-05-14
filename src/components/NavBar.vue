<template>
  <div class="bigger-container">
    <div class="nav-container">
      <div>
        <img
          src="https://media.discordapp.net/attachments/833101375982272592/974714684085264394/Group_12_1.png"
          alt=""
        />
      </div>
      <div class="container-nav-1">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">FAQ</a>
      </div>
      <div class="container-nav-2">
        <a href="">Login</a>
        |
        <a href=""><span>Sign-up</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black !important;
}
a >span {
  color: #1572a1 ;
}
.bigger-container{
    padding: 0.5em 8em;
}
.container-nav-2,
.container-nav-1,
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container-nav-1 {
  width: 18em;
}
.container-nav-2 {
  width: 10em;
}
</style>
