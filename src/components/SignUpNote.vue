<template>
   <v-flex xs12 sm6 class="cardpic">
        <v-card rounded-xl   hover  max-width = "100%" class="wid rounded-card" width="1000px">
         
            <div class="card-bot">

                <v-card-title>
                <div class="note-elm d-flex flex-row align-center">
                    <img class="bell" src="https://cdn.discordapp.com/attachments/833101375982272592/974817725505499186/notifications_FILL0_wght400_GRAD0_opsz48.png" alt="">

                <div class="right-note">
                    <h2 class="title3" >Note :</h2> 
                    <h3>To sign up and get access to your health data, you must have a smart watch device</h3>
                </div>
            </div>
          </v-card-title>
    
    </div>
        </v-card>
      </v-flex>
</template>

<script>
export default {
 name: "SignUpNote",
}
</script>

<style>
.bell{
    height: 2.5em;
    padding-left: 1em ;
   
}
.note-elm{
    font-size:.77em;
}
.right-note{
 padding:0 3em 3em 3em;
 
}
.wid{
    widows: 100%    ;
    
}
.title3{
    padding-bottom: 0.5em;
    padding-top: 0.5em;
}
.card-bot{
    background: #EFDAD7;
    
}
.rounded-card{
    border-radius: 40px !important;
}
</style>