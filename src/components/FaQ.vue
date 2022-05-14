<template>
    <div class="d-flex flex-row justify-space-around align-center">
        <div class="left-container">
            <h1>F&Q</h1>
            <div class="question d-flex justify-space-between align-center" v-on:click="isHidden = !isHidden">
                <div>
                <p class=" font-weight-medium">Why NPM init Mate?</p>
                <p class="answer" v-if="isHidden">Well, just read it in british english!</p>
                </div>
                <img src="https://media.discordapp.net/attachments/833101375982272592/974911111444979712/fluent_add-12-filled.png" >
            </div>
            <div class="question d-flex justify-space-between align-center">
                <p class=" font-weight-medium">How does your project stand out?</p>
                <img src="https://media.discordapp.net/attachments/833101375982272592/974911111444979712/fluent_add-12-filled.png" >
            </div>
            <div class="question d-flex justify-space-between align-center">
                <p class=" font-weight-medium">Are there any future plans?</p>
                <img src="https://media.discordapp.net/attachments/833101375982272592/974911111444979712/fluent_add-12-filled.png" >
            </div>
            <div class="question d-flex justify-space-between align-center">
                <p class=" font-weight-medium">How can we contact you?</p>
                <img src="https://media.discordapp.net/attachments/833101375982272592/974911111444979712/fluent_add-12-filled.png" >
            </div>
        </div>
        <div class="right-container">
            <img src="https://media.discordapp.net/attachments/833101375982272592/974909375380602910/Group_18.png" >
        </div>
    </div>
</template>


<script>
export default {
    name: "FaQ",

data: () => ({
    isHidden : false
  }),

}
</script>



<style scoped>
.left-container{
    width: 25em;
    margin-right: 2em ;
}
p{
    margin: 15px;
    font-size: 17px;
}
.question{
    border-bottom: 1px solid black;
    cursor: pointer;
}


</style>