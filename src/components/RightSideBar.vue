<template>
  <v-container tag="right-sidebar" width="100%">
    <v-card height="1600" width="100%">
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
            <v-container tag="calender">
              <h1>Calender</h1>
              <Calender />
            </v-container>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
import Calender from "@/components/Calender.vue";
export default {
  name: "RightSideBar",
  components: {
    Calender,
  },
};
</script>

<style></style>
