<template>
  <v-flex xs12 sm6 class="cardpic">
        <v-card   hover   width="1000px"  class="rounded-card">
         <div class="card-pic ">

          <div class="back-pic d-flex -justify-center px-16 ">
          <img class="image" src="https://media.discordapp.net/attachments/833101375982272592/974951931460071424/Questions-pana_1.png" alt=""> 
          </div>
         </div>
         <v-divider></v-divider>
            <div class="card-bot">

          <v-card-title>
            <h2 class="title" >Choose any chronical desease you have</h2>
          </v-card-title>

          <v-card-text >
              <div class="buttons d-flex flex-column">

            <v-btn
                color="white"
                dark
                large
                class="dispre"
                >
                diabete
                </v-btn>
            <v-btn
                color="white"
                dark
                large
                class="dispre"
                >
                Heart desiese
                </v-btn>
            <v-btn
                color="white"
                dark
                large
                class="dispre"
                >
                Insomnia
                </v-btn>
              </div>
          </v-card-text>
    </div>
        </v-card>
          
      </v-flex>
</template>

<script>

export default {
    name: "SignUpCard",
  
  
}

</script>

<style scoped>
.cardpic{
    width: 100%;

}
.card-bot{
    width: 100%;
    flex-wrap: nowrap;
    background: #EFDAD7;
}
.image{
    width: 100%;
    margin-top:2em;
    padding:0 5em 1em 5em ;
}
input{
    
    width: 100%;
  padding: 12px 20px;
  
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;
}
.back-pic{
    background: #E3BEC6;
    border-top-right-radius: 49px !important;
    border-top-left-radius: 40px !important;
}
.form{
    padding:2em;
    
    
}
.title{
    font-size:2em ;
    padding-left: 2em;
    font-weight :bolder;
}
.btnUp{
    margin:10em 2em 0 16em ;
}
.dispre{
    color: black !important;
    width :30%;
}
.buttons{
    justify-content: space-between;
}
</style>