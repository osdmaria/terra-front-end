<template>
<div>
  <div class="bigger-container">
    <div class="nav-container">
      <div>
        <img src="../assets/logo.svg" width="170px">
      </div>
      <div class="container-nav-1">
        <a>Home</a>
        <a>About</a>
        <a>Features</a>
        <a>FAQ</a>
      </div>
      <div class="container-nav-2"></div>
    </div>
  </div>
  <h1 class="sign-up">Sign Up</h1>
    <div class="everything">
        <div class="left-container white d-flex align-center justify-space-around">
            <img src="" alt="" width="100px" class="logo">
            <div>
                <div class="d-flex justify-space-between pink rounded-r-xl pa-5 align-center">
              <i class="fa-solid fa-bell pr-4"></i>
              <div class="d-flex align-start flex-column ">
              <h3 class="pt-0">Note</h3>
              <p class="ml-0">To sign up and get access to your health data, you must have a smart watch device</p>
              </div>
            </div>
            <div class="host d-flex align-center flex-column">
            <h3>BROUGH TO YOU BY</h3>
            <img src="../assets/logo.svg" width="170px">
            </div>
                
            </div>
                
        </div>
        <div class="right-container white">
            <SignUpForm/>
        </div>
    </div>
</div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
export default {
    name: 'Register',
    components:{
    SignUpForm,
    },
}    
</script>

<style scoped>
  .sign-up{
    padding: 1em 4em;
  }

   a {
  text-decoration: none;
  color: black !important;
}
a > span {
  color: #1572a1;
}
.bigger-container{
    padding: 0.5em 8em;
}
.container-nav-2,
.container-nav-1,
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container-nav-1 {
  width: 18em;
}
.container-nav-2 {
  width: 10em;
}
    .everything{
        display: flex;
    }
    .right-container{
        width: 50%;
        background: #EFDAD7;
        padding: 3em 0;
        display:flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        background-image: url("../assets/some random waves.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right bottom;
    }
    .Image1{
        width: 200px;
        margin: 5em 2em 2.5em 2em;
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
        width: 50%;
        padding: 0.5em 8em;
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

    p{
      font-family: 'Poppins','Sans-serif';
      color: black;
      margin: 0;
      font-size: 15px;
      margin: 0 0 0 1em ; 
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
  .left-container{
    display:none;
  }
  .right-container{
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
  

 
}
    
</style>