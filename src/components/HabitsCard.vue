<template>
    <v-container>
        <div class="d-flex justify-space-between">
            <h4>{{habit}}</h4>
            <p class="grey--text">random Unit</p> 
        </div>
        <div class="container-bar rounded-pill">
            <div class="colored-bar darkBlue rounded-pill"></div>
        </div>
    </v-container>
</template>


<script>
export default {
    name:"HabitsCard",
    props:{
        "habit":String,
    },
}
</script>

<style scoped>
    .container-bar{
        height: 8px;
        width: fit content;
        background-color: white;
    }
    .colored-bar{
        height: 8px;
        width: 80%;
    }
</style>

