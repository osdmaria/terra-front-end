<template>
    <div class="footer white--text d-flex justify-space-around align-center">
        <div class="description d-flex flex-column align-content-end flex-please">
            <img src="https://media.discordapp.net/attachments/833101375982272592/974841256607879228/logo.png">
            <p> We remind you of your wellbeing's priority, and give you the necessary will to accomplish what satisfies your body</p>
        </div>
        <div class="d-flex flex-column align-content-end flex-please ">
            <p> <span class=" font-weight-medium ">Home</span> </p>
            <p>Home</p>
            <p>About</p>
            <p>Features</p>
            <p>FAQ</p>
        </div>
         <div  class="d-flex flex-column flex-please">
            <p> <span>Social Media</span> </p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
        </div>
        <div class="input-form d-flex flex-column align-content-start flex-please">
            <p class="ma-5"><span>Stay in touch</span></p>
            <div>
                <input type="email" placeholder="Email Adress" class="pa-4 ma-5" >
                <button type="submit" class="lightBlue">Submit</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"Footer",
   props: {},
}
</script>


<style scoped>

.footer{
    background-image: url(https://media.discordapp.net/attachments/833101375982272592/974840772144799814/Vector.png);
    background-size: cover;
    background-repeat: no repeat;
    height: 20em;
}
.input-form{
    height: fit-content;
    align-items: center;
}
.description{
    width: 20em;
}
.flex-please{
    justify-content: end;
}

button{
    padding: 1em 2em; 
    border-radius: 8px;
}
input{
    background: white;
    border-radius: 10px;
}

</style>