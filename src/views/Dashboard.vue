<template>
  <v-containter tag="Dashboard" class="d-flex justify-space-between">
    <v-card height="auto" width="256" class=" white">
      <v-navigation-drawer permanent bottom>
        <v-list-item>
          <v-list-item-content>
            <img src="../assets/logo.svg" alt="" />
          </v-list-item-content>
        </v-list-item>

        <v-list class="pa-6 mt-10 darkBlue--text" dense nav>
          <v-list-item
            v-for="item in items"
            :key="item"
            class="mb-5"
            link
            selectable
            tag="dash-btns"
            @click="changeActive(item.component)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <v-container>
      <MainDashboard v-show="this.active == 'dashboard'"/>
      <Habits v-show="this.active == 'habits'" />
      <Rewards v-show="this.active == 'rewards'" />
    </v-container>
    <right-side-bar class="rightSide" />
  </v-containter>
</template>

<script>
import Habits from "@/components/Habits.vue";
import MainDashboard from "@/components/MainDashboard.vue";
import Rewards from "@/components/Rewards.vue";
import RightSideBar from "@/components/RightSideBar.vue";
export default {
  name: "Dashboard",
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          component: "dashboard",
        },
        {
          title: "Good Habits",
          icon: "mdi-abjad-hebrew",
          component: "habits",
        },
        { title: "Rewards", icon: "mdi-medal", component: "rewards" },
      ],
      active: "dashboard",
    };
  },

  components: {
    Habits,
    MainDashboard,
    Rewards,
    RightSideBar,
  },
  methods: {
    changeActive(component) {
      console.log('hi');
      console.log(component);
      this.active = component;
    },
  },
};
</script>

<style>
.rightSide {
  width: fit-content;
}

.v-main{
  background-color:#F7F8FA;
}

</style>
