<template>
    <div>
        <v-stepper v-model="e1" class=" transparent" dark :flat="true" :elevation = '0'>

                    <v-stepper-items>
                      
                        <v-stepper-content
                          v-for="n in steps"
                          :key="`${n}-content`"
                          :step="n"
                        >
                        <div class="kari">
                          <div class="d-flex justify-center ">
                           <img v-if="e1==1" class="Image2" src=""> 
                        <img v-if="e1==2" class="Image2 " src="">
                        <img v-if="e1==3" class="Image2" src=""> 
                        </div> 
                        <div class="d-flex justify-space-between mt-5 mb-5">
                          <i class="fa fa-angle-left just_grey--text"></i>
                          <h4 class="grayish_green--text mt-2 mb-2 text">{{ descriptions[n-1] }}</h4>
                          <i class="fa fa-angle-right just_grey--text"></i>
                          
                        </div> 
                          </div>
                        
                          <v-card
                            
                            color="beige"
                            height="fit-content"
                            width="500">
                          

                          <form action="">
                            <div v-if="n==1" class="d-flex flex-column align-items-center justify-center">
                            
                            <h2>Hey New Joiner!</h2> 
                            <div class=" d-flex flex-wrap mt-4 align-items-center justify-center">

                              <div class=" d-flex flex-column mt-6 center">
                              <img src="../assets/Profile Interface-pana 2.svg" width="250" class="pb-5">
                              <label class="form-label" for="Nickname">Okay, first how should we call you?</label>
                              <input type="text" placeholder="First Name" id="firstName">
                              </div>
                            </div>
                            

                            </div>
                            
                            <div v-if="n==2" >
                              <div class="d-flex flex-column align-center">

                              <img src="../assets/Questions-pana 2.svg" alt="" width="250">
                              <div>
                                <div class="team-container">
                                  <span>important:</span> 
                                  <p> It is important for us to know if you're suffering from any form of chronical disease.
                                  </p>
                                </div>
                                
                                <div class=" pt-5 pb-5 ">
                                  <h5 class="ml-2 pb-4">Do you suffer from any chronical disease?</h5>
                                  <div class=" d-flex yes-no-container">
                                    <div>
                                      <input @click="click2(show1)" type="radio" name="decision" value="Yes" id="Yes" class="mr-3 ml-4" >
                                      <label for="Yes" class="teams-label"> Yes </label>
                                    </div>
                                    <div>
                                      <input @click="click1(show1)" type="radio" name="decision" value="No" id="No" checked  class="mr-3 ml-4">
                                      <label for="No" class="teams-label"> No </label>
                                    </div>
                                    
                                  </div>
                                  
                                </div>
                              </div>
                              </div>
                              <div v-if="show1">
                                <div class="d-flex flex-wrap">
                              <div v-for="n in num" :key="n" >
                                <v-btn 
                                color='#ffffff' 
                                class="rounded-pill black--text mt-3 mb-3 ml-5 mr-5 pt-2 pb-2"
                                :class="[diseases[n-1].value ? 'checked' : '' ]"
                                :ripple='false' 
                                
                                @click="Choose(diseases[n-1], finalArray)"> 
                                <v-icon size="18px"> mdi-plus </v-icon>
                                {{diseases[n-1].name}}
                                </v-btn>
                              </div>
                              <div class=" d-flex other-skills">
                                <h6 class="black--text ml-5" @click="clicked(show)">Others?</h6>
                                <textarea v-if="show" type="text" v-model="finalArray" placeholder="Write them here!" cols="40" rows="2" class="d-flex mt-3 mb-3 ml-5 mr-5 pt-2 pb-2 pl-3 pr-3" ></textarea>
                              </div>      
                              </div>
                              </div>
                              
                            </div>

                            <div v-if="n==3">
                              <div class="d-flex flex-column align-center">
                              <img src="../assets/Exciting news-bro 2.svg" width="250">
                              <div class="d-flex flex-column align-center">
                                <h3 class="font-weight-light black--text">Oh yeah</h3>
                                <h2 class="font-weight-bold">You ready!</h2>  
                              </div>
                              <div class="mt-10">
                                <p>Okay, now you’re ready to build some new and healthy habits</p>
                              </div>

                              </div>
                              
                            </div>

                          </form>
                          
                          <div class=" d-flex button-container hide">
                            <v-btn
                          v-if="n!==1"
                          
                          color="grayish_green"
                          @click="e1 = n-1"
                          class="pt-5 pb-5 pr-12 pl-12 rounded-pill mt-6"
                          >Back</v-btn>

                          <v-btn
                            v-if="n !==3"
                            :ripple="false"
                            color="#263238"
                            class="pt-5 pb-5 pr-12 pl-12 rounded-pill mt-6 "
                            @click="nextStep(n)"
                          >
                            Next
                          </v-btn>


                          <v-btn 
                            v-if="n==3" 
                            color="lightBlue" 
                            @click="done()"
                            class="pt-5 pb-5 pr-12 pl-12 rounded-pill mt-6 "
                            >Let's start!
                          </v-btn>
                          </div>
                          
                          </v-card>
                          <div class=" d-flex button-container hide-too">
                            <v-btn
                          v-if="n!==1"
                          
                          color="grayish_green"
                          @click="e1 = n-1"
                          class="pt-5 pb-5 pr-12 pl-12 rounded-pill mt-6 btn"
                          >Back</v-btn>

                          <v-btn
                            v-if="n !==3"
                            :ripple="false"
                            color="#394951"
                            class="pt-5 pb-5 pr-12 pl-12 rounded-pill mt-6 btn"
                            @click="nextStep(n)"
                          >
                            Next
                          </v-btn>


                          <v-btn 
                            v-if="n==3" 
                            color="lightBlue" 
                            @click="done()"
                            class="pt-5 pb-5 pr-12 pl-12 rounded-pill mt-6 btn"
                            >Let's Start!
                          </v-btn>
                          </div>

                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
    </div>
</template>

<script>

export default {
    name:'SignUpCardVue',
    data () {
      return {
        e1: 1,
        steps: 3,
        num: 4,
        descriptions:['Personal Information', 'Suffering from any diseases?', 'Confirmation'],
        diseases:[
          {
            name: 'Heart Disease',
            value: false
          },
          {
            name: 'Respiratory Disease',
            value: false
          },
          {
            name: 'Diabetes',
            value: false
          },
          {
            name: 'High Blood Pressure',
            value: false
          },
],
        SelectedDiseases:[],
        finalArray:[],
        show: false,
        show1:false,
        compteur:1,
      }
    },

    

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
      anotherEmail(compteur){
        if(compteur<5){
          return this.compteur=compteur+1
        }
      },
      deleteEmail(compteur){
        return this.compteur=compteur-1
      },
        
      clicked(show){
        this.show=!show
        },
      done (){
        console.log('the end');
      },
      click1(show1){
        if(show1==true)
          this.show1=false
      },
      click2(show1){
        if(show1==false)
          this.show1=true
      },
      
      
      Choose(disease, finalArray){
            if(disease.value == false){
              disease.value=!disease.value
              this.SelectedDiseases.push(disease)

            }else {
              disease.value=!disease.value}
            
            this.SelectedDiseases= this.SelectedDiseases.filter(disease => {
            return disease.value == true
            })
            
           
            finalArray = [... new Set(this.SelectedDiseases)]
            console.log(finalArray)
            return finalArray  //contains the final selected skills that will be transmitted to the db
          },
      
    },

}

</script>


<style scoped>
.center{
  align-items: center;
}
.everything{
        display: flex;
    }
    .right-container{
        width: 30%;
        background: #E8F3F1;
        padding: 3em 0;
        display:flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
    }
    .Image1{
        width: 200px;
        margin: 5em 2em 2.5em 2em;
    }
    .v-stepper__wrapper{
      width: 100%;
    }
    .kari{
      display: none;
    }
    i{
      font-size: 35px;
    }
    a{
        text-decoration: none;
        color: #263238;
        margin: 0.2em 1em;
        font-family: 'Poppins','Sans-serif';
        font-weight: 600;

    }
    h3{
        font-family: 'Poppins','Sans-serif';
        font-weight: 600;
        font-size: 16px;
        margin: 1em 0 ;
        letter-spacing: -0.6px;
    }
    i{
        color: black;
        
    }
    .hide-too{
      visibility: hidden;
    }
    .host{
        margin-top: 6em;
    }
    .left-container{
        background: #263238;
        width: 70%;
        padding: 2em 2.6em 2em 4em;
    }
    .v-divider{
      border-width: 1.5px 0 0 0;
    }
    h4{
      font-family: 'Poppins','Sans-serif';
      font-size: 15px;
      font-weight: 500;
    }
    h2{
      font-family: 'Poppins','Sans-serif';
      font-weight: 500;
      font-size: 25px;
      letter-spacing: 1px;
      color: #263238;
    }
    h6{
      font-family: 'Poppins','Sans-serif' ;
      font-size: 13px;
      font-weight: 300;
      text-decoration: underline;
      cursor: pointer;
      color: #8d176a;
      width: fit-content;
    }
    .email-input{
      width:50% !important;
    }
    p{
      font-family: 'Poppins','Sans-serif';
      color: black;
      margin: 0;
      font-size: 15px;
      margin: 0 0 0 1em ; 
    }
    span{
      font-weight: 600;
      font-family: 'Poppins','Sans-serif';
      color: black;
      height: fit-content;
    }
    h5, .teams-label{
      font-family: 'Poppins','Sans-serif';
      font-size: 16px;
      color: black;
      font-weight: 600;
    }
    .form-label{
      font-family: 'Poppins','Sans-serif';
      font-size: 15px;
      color: #263238;
      font-weight: 500;
      margin-left: 15px;
    }
    input{
      font-family: 'Poppins','Sans-serif';
      border: 1.5px solid rgba(0, 0, 0, 0.233);
      border-radius: 8px;
      padding: 0.8em 2em;
      margin: 0.2em 2em 0.2em 0.2em;
      background-color: white;
      color: #00000093;
    }
    .v-card{
      padding: 2em 2em 7em 2em;
      
    }
    .diseases{
      padding: 0.5em;
      margin: 1em;
    }
    .other-skills{
      align-items: center;
    }
    .checked{
      background-color: #9AD0EC !important; 
      color: white !important;
    }
    .team-container{
      background-color:#ff8d8dbb;
      padding: 1em 2em;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      width: fit-content;
    }
    .button-container{
      justify-content: center;
    }
    input[type=radio] {
    transform: scale(1.5);
    }
    textarea{
      font-family: 'Poppins','Sans-serif';
      size-adjust: none;
      border: 1.5px solid rgba(0, 0, 0, 0.233);
      border-radius: 8px;
      resize: none;
      width: 100%;
      background: white;
    }
    .v-btn{
      font-family:'Poppins','Sans-serif' ;
      padding: 1em 2em;
      margin: 0 1em;
    }
@media only screen and (max-width: 1250px ) {
  .v-stepper__content{
       width: 90%;
     }
}
@media only screen and (max-width: 750px ) {
  .v-stepper__content{
       width: 100%;
     
}
  .text{
    font-size: 18px;
  }
  .logo{
    width: 75px;
    margin: 1em ;
  }
  .right-container{
    display:none;
  }
  .left-container{
    width:100%;
    padding: 1em 1em 1em 1em;
  }
  p{
    margin:0;
  }
  h2{
    font-size: 22px;
  }
  .hide{
    visibility: hidden;
  }
  .hide-too{
    visibility: visible;
  }
  .kari{
      display: inherit;
    }
  .Image2{
    width: 140px;
    margin: 1em;
    }
  
  .v-stepper__header {
    display: none;
  }
  .skills{
    border: none;
    background: transparent;
    margin: 0;
  }
  input{
    width:100%;
    padding: 0.7em 1.5em;
    background-color: white !important;
    border-radius: 3px !important;
  }
  .v-stepper__content{
    padding:0;
  }
  .button-container{
    justify-content: space-around;
  }
  .v-card{
    padding: 1em 0.8em;
  }
  .team-container{
    width:100%;
    display: inherit;
  }
  .other-skills{
    flex-wrap: wrap;
  }
  .yes-no-container{
    display: flex;
    justify-content: space-around;
  }
  .btn{
    padding: 1.5em 2.4em !important;
  }                     /*fix the buttons*/
  .yes-no-container input{
    width: fit-content;
  }
  .email-input{               
    width:100% !important; 
    
  }
}
</style>