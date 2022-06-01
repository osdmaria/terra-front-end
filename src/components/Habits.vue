<template>
  <v-container class="pl-13 pr-13">
    <h1>Habits Tracking</h1>
    <p>Track your habits progress here</p>
    <div class=" d-flex justify-space-between pt-10">
      <h3>Discover new Activities</h3>
      <v-btn>View More</v-btn>
    </div>
    
    <div class=" d-flex justify-space-around align-center pb-8">
      <img src="../assets/Group 107 (1).svg" width="270">
      <div>
        <ActivityCard activity="Yoga"/>
      </div>
      <div>
        <ActivityCard activity="Cardio"/>
      </div>
    </div>
    <div class=" d-flex justify-space-between">
      <h3>Tracked habits</h3>
      <v-btn>View More</v-btn>
    </div>
    <div class=" d-flex flex-column align-content-start">
      <HabitsCard habit="Steps" class="habit"/>
      <HabitsCard habit="Hydration" class="habit"/>
      <HabitsCard habit="Sleep" class="habit"/>
    </div>
  </v-container>
</template>

<script>
import ActivityCard from "./ActivityCard.vue";
import HabitsCard from "./HabitsCard.vue";
export default {
  components:{
    ActivityCard,
    HabitsCard,
  },
  name: "Habits",
};
</script>

<style>
  .habit{
    width: 40%;
  }
</style>
