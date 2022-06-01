<template>
    <v-container>
        <div class="rounded card d-flex flex-column justify-space-between pa-4">
            <h2>{{activity}}</h2>
            <div>
                <i class="fa-solid fa-timer pink"></i>
                <p>60 minutes</p>
            </div>
            <div>
                <i class="fa-solid fa-fire pink"></i>
                <p>430kcal/hour</p>
            </div>
            <v-btn class="lightBlue">Try it Now</v-btn>
            
        </div>
    </v-container>
</template>

<script>
export default {
    name:"ActivityCard",
    props:{
        "activity":String,
    }
}
</script>

<style scoped>

.card{
    background-color: white;
    width: 12em;
    height: 12em;
}
</style>
