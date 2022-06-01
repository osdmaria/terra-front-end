<template>
  <v-container class="pl-13 pr-13">
    <div>
      <h2>Gifts</h2>
      <p>Here are the rewards you get for each accomplished goal</p>
    </div>
    <div>
      <h3>Rewards and Coupons</h3>
    </div>
    <v-card class="pb-16">

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          flat
        >
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Rewareds",
  data () {
      return {
        tab: null,
        items: [
          { tab: 'Claimed', content: "Here will show up the claimed coupons" },
          { tab: 'Not Yet', content: "Here will show up the coupons that you can claim after accomplishing certain goals you've set" },
        ],
      }
    },
};
</script>

<style></style>
