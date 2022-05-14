<template>
  <v-container tag="main-dashboard">
    <v-container tag="text-container">
      <h1>Daily Activity</h1>
      <p>Visualize all your health data here</p>
    </v-container>
    <v-container tag="plots-container">
      <v-row>
        <v-col>
          <h3>Progress</h3>
          <Bar :chart-data="chartData" height="40%" width="35%" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Line :chart-data="chartData3" />
        </v-col>
      </v-row>
    </v-container>
    <Doughnut :chart-data="chartData2" />
  </v-container>
</template>

<script>
import { Doughnut, Bar, Line } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "Dashboard",
  components: {
    Bar,
    Doughnut,
    Line,
  },
  data() {
    return {
      chartData: {
        labels: ["S", "S", "M", "T", "W", "T", "F"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#9AD0EC",
            color: "#fff",
            data: [40, 20, 100, 12, 60, 80, 10],
          },
        ],
      },
      chartData2: {
        labels: ["Completed", "In progress"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#E3BEC6", "#1572A1"],
            data: [65, 35],
          },
        ],
      },

      chartDate3: {
        labels: ["calories", "colesterol", "carbohydrates"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    };
  },
};
</script>

<style></style>
