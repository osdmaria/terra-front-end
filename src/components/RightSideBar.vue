<template>
  <v-container tag="right-sidebar" width="100%">
    <v-card height="auto" width="100%" elevation="0" >
      <v-navigation-drawer permanent bottom>
        <v-list-item>
          <v-list-item-content>
            <v-container tag="icon" class="d-flex">
              <v-avatar
                color="lightBlue"
                size="56"
                max-width="56"
                class="mx-auto"
              >
                <span class="white--text text-h5">AX</span>
              </v-avatar>
              <p class="my-auto">OUSSADI Maria</p>
            </v-container>
            <v-container tag="notifications">
              <h1>Notifications</h1>
              <v-container >
                <v-container class="lightGrey rounded mb-2">
                  <p class="notif red--text">Your blood sugar level was hih today, you should approach a doctor asap</p>
                </v-container>
                <v-container class="lightGrey rounded">
                  <p class="notif red--text">This is the second notification I just hope this shows up well</p>
                </v-container>
              </v-container>
            </v-container>
            <v-container tag="Recent-activities">
              <h1>Recent Activities</h1>
              <RecentActivity/>
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
import RecentActivity from "../components/RecentActivity.vue";
export default {
  name: "RightSideBar",
  components: {
    RecentActivity
  },
};
</script>

<style>
  .notif{
    font-size: 12px;
    margin: 0 !important;
  }
</style>
