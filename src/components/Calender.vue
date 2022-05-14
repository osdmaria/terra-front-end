<template>
  <v-calendar :now="today" :value="today" color="primary">
    <template v-slot:day="{ past, date }">
      <v-row>
        <template v-if="past && tracked[date]">
          <v-sheet
            v-for="(percent, i) in tracked[date]"
            :key="i"
            :title="category[i]"
            :color="colors[i]"
            :width="`${percent}%`"
            height="100%"
            tile
          ></v-sheet>
        </template>
      </v-row>
    </template>
  </v-calendar>
</template>

<script>
export default {
  name: "calender",
  data: () => ({
    today: "2019-01-10",
    tracked: {
      "2019-01-09": [23, 45, 10],
    },
    colors: ["#1867c0", "#fb8c00", "#000000"],
    category: ["Development"],
  }),
};
</script>

<style></style>
