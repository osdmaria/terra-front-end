<template>
  <v-flex xs12 sm6 class="cardpic">
        <v-card rounded-xl   hover   width="1000px">
         <div class="card-pic">

          <div class="back-pic">
          <img class="image" src="https://cdn.discordapp.com/attachments/833101375982272592/974806755336929300/Illustration_of_inscription.png" alt=""> 
          </div>
         </div>
         <v-divider></v-divider>
            <div class="card-bot">

          <v-card-title>
            <h2 class="title" >Okay , First what can i call you?</h2>
          </v-card-title>

          <v-card-text >
           <form class="form" action="">
                <input  type="text" placeholder="Username" v-model="username">
                <button class="lightBlue px-6 py-3 rounded-lg white--text font-weight-medium btnUp" >Next</button>
           </form>
          </v-card-text>
          
    </div>
        </v-card>
      </v-flex>
</template>
import Button from "@/components/Button.vue";
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
    height:100%;
    margin-top:2em;
    padding:0 5em 1em 5em 
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
</style>