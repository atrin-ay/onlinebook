<template>

 
   <div class="bg-gray-200"  style="margin-top: -52px;">
    <div >
    <hederm  user="f" home="f" librali="f"></hederm></div>
  <div class="flex items-center tamam ">
       

    <div class="kol bg-white p-4 rounded-lg shadow-lg  shadow-black items-center relative ">
      <router-link to="/" class="absolute top-5 left-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>
      </router-link>

 <div class="flex  justify-between lala  ">
  <div class="info flex items-center">
    <div class="pip  mt-2">
  <h3  class=" text-center">{{o.esm}}</h3>
<p class="text-center">write by : {{ t }}</p>
<p class="text-center">riders : {{ r }}</p>
<p class="text-center">{{ c }}</p>

 <div class="flex mt-2 justify-center " >
  <button class="mr-2 tooltipm butn"  @click="chang" ref="red">
    <svg ref="too" v-show="save" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 co">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
<svg ref="too2" v-show="unsave" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 co">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
</svg>

  </button>
<router-link :to="{name:'read',params:{obj:o }}">
  <button class="butn tooltipt" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 co">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
  </button></router-link>
</div> 
</div></div>
<div class="im flex justify-end tooltipt">
  <div class="imgm ">
  <img :src=" o.img "  alt="no"> 
    
  </div>
 
 <b-form-rating v-model="o.str" variant="danger" color="blueviolet" class="mb-1 hih ve  bg-none" readonly style="border: none !important; background:none;"></b-form-rating>
</div></div>
 <div class="kmtn">
 <div class="flex su">
 <h4 class="mt-0 mb-0 p-1 mtn border-gray-200 border-x-1 border-t-1 ">sumerry</h4>
  <div class=" border-b-2 border-gray-200 ckc"></div>
</div>
<div class=" disc  p-2 border-gray-300 border-x-2 border-b-2">
  <p>{{ o.disc }}</p >
 
  </div>
  </div></div>

  </div>
</div>
</template>
<script>
import {et} from './data.js'
import hederm from './heder.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BFormRating} from 'bootstrap-vue'
export default {

  name:'SiDer',
  components:{hederm,
    BFormRating
  },
  data(){
    return{
     o:'',
     t:'',
     co:['complited','uncomplited'],
     c:'',
     r:'',
     save:true,
     unsave:false,
     mgh:'Add to librali'
     
    }
  },
  methods:{
    chang:function(){
      if(this.save==true){this.save=false
      this.unsave=true
      this.$refs.red.style.backgroundColor='blueviolet'
      this.$refs.too2.style.color='white'
      this.$refs.red.classList='mr-2 tooltiptoo butn'
    }
    else{this.save=true
      this.unsave=false
      this.$refs.red.style.backgroundColor='white'
      this.$refs.too.style.color='blueviolet'
      this.$refs.red.classList='mr-2 tooltipm butn'
    }
    }
  },
  created(){
    let asm =this.$route.params.idm
    let ob =this.$route.params.ob
    let obj = et[ob]
   
    setTimeout(
      () =>{ for(let i =0 ; i < obj.length ;i++){ 
   if(obj[i].esm == asm){
   this.o=obj[i] 
      
   

      }
  }},400
    ),
    setTimeout(
      () =>{  
   let ran = Math.floor(Math.random()*et.k.length+1)
   this.t=et.k[ran].name
  let run2 = Math.floor(Math.random()*2)
  this.c=this.co[run2]
  let run3= Math.floor(Math.random()*2000)
  this.r=run3
  },450
    )
   
  }
}

</script>
<style scoped>
.lala{width: 75%;margin: 0 auto;}
.co{color: blueviolet;}
.butn{
  border-radius: 50rem !important;
display: inline-block;
    font-weight: 400;
    user-select: none;
    background-color: transparent;
    border: 1px solid blueviolet;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.tooltipt {
  position: relative;
}
.tooltipt:hover::before {
  content: "read now";
  font-size: small;
  display: block;
  position: absolute;
 bottom: -32px;
  left: -25px;
  width: 100px;
  height: auto;
  padding: 3px;
  background-color: #fbfafa;
  border: 1px solid blueviolet;
  border-radius: 5px;
 
}
.tooltipm {
  position: relative;
}
.tooltipm:hover::before {
  content:'Add to librali';
  font-size: small;
  display: block;
  position: absolute;
 bottom: -32px;
  left: -25px;
  width: 100px;
  height: auto;
  padding: 3px;
  background-color: #fbfafa;
  border: 1px solid blueviolet;
  border-radius: 5px;
}
.tooltiptoo {
  position: relative;
}
.tooltiptoo:hover::before {
  content:'Remove';
  font-size: small;
  display: block;
  position: absolute;
 bottom: -32px;
  left: -25px;
  width: 100px;
  height: auto;
  padding: 3px;
  background-color: #fbfafa;
  border: 1px solid blueviolet;
  border-radius: 5px;
}
.su h4{width: 20%;}
.kmtn{width: 77%; 
  margin-left: 10%;}
.hih{height: fit-content !important;
  padding: 0rem 0.5rem !important;
  font-size: 1.8rem !important;
  background-color: none !important;
  height: 280px;
  width: 30%;
  display: grid;grid-gap: 25px;
  margin-top: 10px;
  
}
.ve{writing-mode: vertical-rl;}
.pip{margin: 0 auto;}
.pip p { margin: 0 auto !important;}
.ckc{width:80%;}
.mtn{width: fit-content;}
.disc {
font-family: Arial, Helvetica, sans-serif;
}
.tamam{
  width: 100%;
  height: 650px;
}
.kol{
  width: 60%;
  margin: 0 auto;
}
.imgm{
  width: 165px;
  height: fit-content;
  box-shadow: 0px 10px 20px rgba(39, 38, 38, 0.979) ;
}
@media (max-width:900px)  {
  .kol{
  width: 100%;
  margin: 0 auto;
}
}
@media (max-width:598px)  {
  .imgm{margin: 25px auto;}
  .tamam{height: 850px;}
  .lala{display:block;}

}
</style>
