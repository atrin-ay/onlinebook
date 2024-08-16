<template>
    <body style="margin-top: -52px;" >
        <hederm user="t" home="f" librali="f"></hederm>
        <div class="kol  pb-4 pt-3 mt-3" style=" border:solid 2px #4286f4d6;box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.495),  -4px -4px 15px rgba(6, 6, 6, 0.495) ;">
      <div class="d-flex justify-content-center ">
          <div class="rounded-full col-3 " style=" border-radius: 50%; background-image: url('https://png.pngtree.com/png-clipart/20200710/original/pngtree-books-logo-png-image_4135424.jpg');background-size:95%;background-position-y: center;
          width: 90px ;height: 110px; margin-top: -69px;border:solid 2px #4286f4d6; "  ></div>
      </div>
    <h1 class="mb-4" >login</h1>
    <div class="inp container gap-2 form-control mt-4">
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <b-form-input type="email" class="user-input in" placeholder="Enter your email"></b-form-input>
    </div>
    <p class="text-danger  username-msg" style="width: max-content;margin: 0%;padding: 0%;margin-left: 8rem;" ></p>

    <div class="inp container gap-2 form-control mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <b-form-input class="pass-input in "  type="password" placeholder="Enter your password"></b-form-input>
    </div>
    <p class="text-danger password-msg " style="width: max-content;margin: 0%;padding: 0%;margin-left: 8rem;"></p>
   
    <div class="d-flex justify-content-center mt-4 signin-button">
 <button @click="send" class="btn bg-primary  text-light col-lg-4 col-md-4 col-sm-3  clid " >login <span class="hy" ></span></button>
</div>
<p class="signin-status text-success" style="width: max-content;margin: 0%;padding: 0%;margin-left: 10.5rem;"></p>


<a class=" small mt-2" style="font-weight: 500;text-decoration:none;color: rgb(4, 34, 90);margin-left: 11rem;" href="#">Forgot your password?</a>
<p style="margin-left: 9rem;">Don't have an account?<router-link class="small mt-1 " to="/sain" style="font-weight: 500;text-decoration:none; color: rgb(4, 34, 90);">sign up</router-link></p>
 </div>
</body>
</template>
<script>
import hederm from './heder.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BFormInput} from 'bootstrap-vue'
export default {
   name:'LogIn',
   components:{hederm,
BFormInput

   } ,
   methods:{
    send:function(){
        let user=document.querySelector(".user-input")
 
let msgusr=document.querySelector(".username-msg")
let pass = document.querySelector(".pass-input")
let msgpass = document.querySelector(".password-msg")
let pain = document.querySelector(".signin-status")
let clid = document.querySelector(".signin-button")
let y = true


msgusr.innerHTML=""
    msgpass.innerHTML=""
    y=true
 let usr = user.value
 let pasval=pass.value
 if(user.value===""){
msgusr.innerHTML="pleass enter email" , y=false}
else if(usr.indexOf("@")===-1||usr.indexOf(".")===-1){
   msgusr.innerHTML="pleass enter right email" , y=false }
if (pasval.length <= 4){msgpass.innerHTML="password is short" , y=false}
   

if(y===true){
    clid.innerHTML=' <button class="btn bg-primary signin-button text-light   clid "style="">loding <span class="hy spinner-border spinner-border-sm" ></span></button>'
    fetch('https://jsonplaceholder.typicode.com/posts',{
         method:"POST",
          body:JSON.stringify({
            usname:usr,
            paword:pass.value }) ,
            headers: {"Content-Type": "application/json"} }
    ).then(response=>{console.log(response.ok)
       if(response.ok){ clid.innerHTML='  <button class="btn bg-success text-sm signin-button text-light clid " >login was a success <span class="hy" ></span></button>'
       setTimeout(()=>{this.$router.push("/fan")} ,750)
    }})
    .catch(()=>{pain.innerHTML="nat good"})
   } }

   }
}
</script>
<style scoped>
body{background-color: rgb(240, 240, 240);min-height:100vh;position: relative;display: grid; }
.kol{width: 500px ;margin: 0 auto;
    position: absolute;top: 50%;transform: translateY(-50%); justify-self: center;
     background-color: rgb(255, 255, 255); border-radius: 20px;}
.kol h1 { text-align: center;}
.inp{width:min-content; display: flex;}
.inp i {font-size: larger; margin-bottom: -6px;}
.inp input{ border: none;}
/* .bun{text-align: center;display: inline;margin-left: 30px;} */
.d{ border-radius: 100%;}
.in{width: 180px; 
    border: none !important; 
    box-shadow: none !important;
     margin-top: -5px;
      background: none;
      height:30px ;}

</style>
<!---->