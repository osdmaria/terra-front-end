<template>
  <div class="home">
    <NavBar />
    <LandingPart />
    <div class="huge-container">
      <div class="d-flex align-center flex-column mt-16">
        <h1>Features</h1>
        <div class="d-flex flex-row justify-space-between pa-6">
          <Feature
            source="https://media.discordapp.net/attachments/833101375982272592/974797925093871656/undraw_handcrafts_bar_chart_1_1.png"
            title="Personal Insights"
            paragraph="We provide a dashboard containing all your health data"
            class="feature"
          />
          <Feature
            source="https://media.discordapp.net/attachments/833101375982272592/974821241930272828/undraw_handcrafts_lock_1_1.png"
            title="Privacy"
            paragraph="We provide a dashboard containing all your health data"
            class="feature"
          />
          <Feature
            source="https://media.discordapp.net/attachments/833101375982272592/974821519660310598/undraw_handcrafts_search_files_1_1.png"
            title="Assistance"
            paragraph="We provide assistance & guides on maintaining a healthy life"
            class="feature"
          />
        </div>
      </div>

    </div>
    </div>
    <div class="d-flex align-center flex-column mt-16">
      <h1>Rewarding your efforts</h1>
      <RewardSection />
    </div>
    <div class="d-flex align-center flex-column mt-16">
      <FaQ />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import LandingPart from "@/components/LandingPart.vue";
import Feature from "@/components/Feature.vue";
import Footer from "@/components/Footer.vue"
import RewardSection from "@/components/RewardSection.vue"
import FaQ from "@/components/FaQ.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    LandingPart,
    Feature,
    Footer,
    RewardSection,
    FaQ,
  },
};
</script>

<style scoped>
.home {
  padding: 0.5em 8em;
}

h1 {
  font-size: 40px;
}
.feature {
  width: 15em;
  text-align: center;
  margin: 1em;
}

.features-container {
  z-index: -1;
}
.huge-container {
  background-image: url("https://media.discordapp.net/attachments/833101375982272592/974828776196296744/some_random_waves.png?width=1289&height=670");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
