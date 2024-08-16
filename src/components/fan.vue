<template>
    <body style="background-color: #ecebeb;margin-top: -52px;">
    
       <hederm user="f" home="t" librali="f"></hederm>
    
    <main>
      <div style="display: none; " class="slidm2 mt-1">
        <div class="flex margin: 50px" style="position: relative;justify-content: center;">
          <div  class="flex items-center" style="position: absolute;left: 5px ;z-index: 2;height: 100%;">
            <svg @click="menh2" style="background: rgba(118, 117, 117, 0.583);border-radius: 50%;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-50">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg> </div>
          <section  v-for="(ym , i) in et.y" :key="i" class="oon">
        <div v-if="i==add2 || i==add3" class="min1 " :style="{background: ym.clr }" style="max-width: 550px;">
            <div class="tooi">
              <img :src=" ym.img "  alt="no" class="img"> 
        </div>
        <div class="bironi">
            <h1 class="di">{{ ym.esm }} </h1>
            <b-form-rating  id="rating-inline" inline readonly v-model="ym.str " style="color: white;margin-left: 130px; "></b-form-rating>

           <p class="too"> {{ym.disc  | truncate(79)}}</p>
           <router-link :to="{name: inf ,params:{idm:ym.esm , ob:'y'}}">
            <button class="clid ">see more </button>
          </router-link>
        </div>
        </div>
    </section>
    <div  class="flex items-center" style="position: absolute;right: 7px ;top: 3px; z-index:3;height: 100%;">
          <svg @click="jam2" style="background: rgba(118, 117, 117, 0.583);border-radius: 50%;"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-50">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
 </div>
        </div>
  </div>
     


      <div style="display: none;" class="slidm mt-1 ">
        <div class="flex " style="position: relative;justify-content: center;">
          <div  class="flex items-center" style="position: absolute;left: 5px ;z-index: 2;height: 100%;">
            <svg @click="menh" style="background: rgba(118, 117, 117, 0.583);border-radius: 50%;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-50">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg> </div>
          <section  v-for="(ym , i) in et.y" :key="i" class="oon" >
        <div v-if="i==add" class="min1 " :style="{background: ym.clr }" style="max-width: 550px;">
            <div class="tooi">
              <img :src=" ym.img "  alt="no" class="img"> 
        </div>
        <div class="bironi">
            <h1 class="di">{{ ym.esm }} </h1>
            <b-form-rating  id="rating-inline" inline readonly v-model="ym.str " style="color: white;margin-left: 130px; "></b-form-rating>

           <p class="too"> {{ym.disc  | truncate(79)}}</p>
           <router-link :to="{name:'inf',params:{idm:ym.esm , ob:'y'}}">
            <button class="clid ">see more</button>
          </router-link>
        </div>
        </div>
    </section>
    <div  class="flex items-center" style="position: absolute;right: 7px ;top: 3px; z-index:3;height: 100%;">
          <svg @click="jam" style="background: rgba(118, 117, 117, 0.583);border-radius: 50%;"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-50">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
 </div>
        </div>
  </div>
        <div  class="avali mt-1">
        <section   v-for="(ym , i) in et.y" :key="i" >
        <div class="min1" :style="{background: ym.clr }">
            <div class="tooi">
              <img :src=" ym.img "  alt="no" class="img"> 
        </div>
        <div class="bironi">
            <h1 class="di">{{ ym.esm }} </h1>
            <b-form-rating  id="rating-inline" inline readonly v-model="ym.str " style="color: white;margin-left: 100px; "></b-form-rating>

           <p class="too"> {{ym.disc  | truncate(79)}}</p>
           <router-link :to="{name:'inf',params:{idm:ym.esm , ob:'y'}}">
            <button class="clid ">see more</button>
          </router-link>
        </div>
        
        </div>
    </section>
    </div>
      <!-- karbar ha -->
        <div class="info " >
        <section class="sec1">
            <div class="matn">
                <div class="dade hidden lg:block">
            <h1>author week</h1>
            <div class="too-info"  v-for="(kr,i) in et.k" :key="i">
                <div class="img" :style="{background:kr.img, backgroundPosition: 'center', backgroundSize: 'cover'}"></div>
         <p>{{ kr.name }}</p>
            </div>
        </div>
        </div>
    </section>
     
        <section class="sec2 m-2">
        <div class="bala1-2">
            <div class="bala1"> populare</div>
            <div class="bala2">
                <h1> acshan</h1>
                <h1> business</h1>
                <h1>cool</h1>
                <h1> deram</h1>
                <h1>lovely</h1>
    
            </div>
        
            </div>
          <hr class="hr">
                <div class="fnha">
                    <div class="fnha-to1" v-for="(em,i) in et.e" :key="i">
                        <div class="tooi1" >
                            <img :src=" em.img "  alt="no">
                    </div>
                    <div class="bironi1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                        <h1 class="di">{{em.esm}} </h1>
                        <b-form-rating  id="rating-inline" inline readonly v-model="em.str" style="margin-left: 50px;font-size: small;"></b-form-rating>
                       <p class="too">{{em.disc  | truncate(45)}} </p>
                       <router-link :to="{name:'inf',params:{idm:em.esm , ob:'e'}}">
                    <button class="clid2-1">  more</button>
                        </router-link>
                      
                    </div>
                    </div>
        </div>
         </section>
         </div>
      
        <div id="app" >
            <div style="display: flex;">
            
            </div>
            <div style="display: flex;justify-content: space-between;margin: 20px 20px -18px 20px">
              <p style="font-family: Arial, Helvetica, sans-serif;font-size:larger;">Recent :</p>
              <p style="font-family: Arial, Helvetica, sans-serif;font-weight: 400;"></p>
            </div>
         <hr style="margin:16px -15px 10px 15px">
         <div>
    <carousel :per-page="3" :autoplay="true">
      <slide v-for="(em,i) in et.l" :key="i">
        <div  class="fnha2" style="width: 370px;margin-right: -40px;">
                    <div class="fnha2-to1" >
                        <div class="tooi1" >
                            <img :src=" em.img "  alt="no"> </div>
                     <div class="bironi1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                        <h1 class="di">{{em.esm  | truncate(10)}} </h1>
                        <b-form-rating  id="rating-inline" inline readonly v-model="em.str" style="margin-left: 50px;font-size: small;"></b-form-rating>
                       <p  class="too">{{em.disc  | truncate(40)}} </p>
                       <router-link :to="{name: 'inf',params:{idm:em.esm , ob:'l'}}">
                    <button class="clid2-1">  more </button>
                        </router-link>
                    </div> </div> </div>
      </slide>
    </carousel>
  </div>
  <div style="display: flex;justify-content: space-between;margin: 20px 20px -18px 20px">
       <p style="font-family: Arial, Helvetica, sans-serif;font-size:larger;">For you :</p>

              <p style="font-family: Arial, Helvetica, sans-serif;font-weight: 400;
            "></p>
             
            </div>
    <hr style="margin:16px -15px 10px 15px">
  <div>
    <carousel :per-page="3" :autoplay="true">
      <slide v-for="(em,i) in et.e" :key="i">
        <div class="fnha">
                    <div class="fnha-to1" >
                        <div class="tooi1" >
                            <img :src=" em.img "  alt="no">
                    </div>
                    <div class="bironi1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                        <h1 style="font-size: 1.3rem;" class="di">{{em.esm}} </h1>
                        <b-form-rating  id="rating-inline" inline readonly v-model="em.str" style="margin-left: 50px;font-size: small;"></b-form-rating>
                       <p  class="too ">{{em.disc  | truncate(45)}} </p>
                       <router-link :to="{name:'inf',params:{idm:em.esm , ob:'e'}}">
                    <button class="clid2-1">  more</button>
                        </router-link>
                      
                    </div>
                    </div></div>
      </slide>
    </carousel>
  </div>
         


    <!-- <vue-glide :autoplay="2500" :per-view="3" :breakpoints="{1070:{perView:2},600:{perView:1}}" >
      <vue-glide-slide v-for="(em,i) in et.l" :key="i">
        <div class="fnha2" style="width: 370px;margin-right: -40px;">
                    <div class="fnha2-to1" >
                        <div class="tooi1" >
                            <img :src=" em.img "  alt="no"> </div>
                     <div class="bironi1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                        <h1 class="di">{{em.esm  | truncate(10)}} </h1>
                        <b-form-rating  id="rating-inline" inline readonly v-model="em.str" style="margin-left: 50px;font-size: small;"></b-form-rating>
                       <p class="too">{{em.disc  | truncate(40)}} </p>
                       <router-link :to="{name:'inf',params:{idm:em.esm , ob:'l'}}">
                    <button class="clid2-1">  more</button>
                        </router-link>
                    </div> </div> </div>
      </vue-glide-slide>
    </vue-glide> -->

     <!-- <div style="display: flex;justify-content: space-between;margin: 20px 20px -18px 20px">
       <p style="font-family: Arial, Helvetica, sans-serif;font-size:larger;">For you :</p>

              <p style="font-family: Arial, Helvetica, sans-serif;font-weight: 400;
            ">{{ala}}</p>
             
            </div>
    <hr style="margin:0px 15px 10px 15px">
    <vue-glide :autoplay="3000" :per-view="3" :breakpoints="{1070:{perView:2},600:{perView:1}}">
      <vue-glide-slide v-for="(em,i) in et.e" :key="i">
        <div class="fnha2" style="width: 370px;margin-right: -40px;">
                    <div class="fnha2-to1" >
                        <div class="tooi1" >
                            <img :src=" em.img "  alt="no"> </div>
                     <div class="bironi1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                        <h1 class="di">{{em.esm  | truncate(10)}} </h1>
                        <b-form-rating  id="rating-inline" inline readonly v-model="em.str" style="margin-left: 50px;font-size: small;"></b-form-rating>
                       <p class="too">{{em.disc  | truncate(40)}} </p>
                       <router-link :to="{name:'inf',params:{idm:em.esm , ob:'e'}}">
                    <button class="clid2-1">  more</button>
                        </router-link>
                    </div> </div> </div>
      </vue-glide-slide>
    </vue-glide> -->

  </div>

                   
  <hr style="border-top: 2px solid  rgb(172, 119, 222);margin-left: 40%;">
          <div class="wr" style="
        background: #ba55d3eb;
/* background: linear-gradient(90deg, rgba(152,58,195,1) 0%, rgb(114, 38, 131) 35%, rgba(171,0,255,1) 100%); */
           
             border-radius: 8px;">
            <div class="mtnha"
            style="position: relative;top: 50%;transform: translateY(-50%);
            height: fit-content;">
                <p>can you write a book?</p>
                <p>  Publish your book now!</p>
                <p>  Test your talent.</p>
                <p>  And Find fans for your book</p>
                <button class="button-20" role="button">start now</button>

            </div>
            <div style="">
       <div class="td"></div>
            </div>
          </div>
          <hr style="border-top: 2px solid  rgb(172, 119, 222);margin-right: 40%;padding-bottom: 20px">

    </main>
    
</body>
</template>
<!-- HTML !-->



<style scoped>
.ma{margin-left: 55px !important;}
ul .glide__slides{display: flex !important;background-color: #3A38AE;}
.button-20 {
  appearance: button;
  background-color: #6b6b71;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));
  border: 1px solid #6e6e70;
  border-radius: 1rem;
  box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,rgba(46, 54, 80, 0.075) 0 1px 1px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 10px;
  margin-left: 50px;
  padding: .5rem 1rem;
  text-align: center;
  text-transform: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

.button-20:focus:not(:focus-visible),
.button-20:focus {
  outline: 0;
}

.button-20:hover {
  background-color: #3733E5;
  border-color: #3733E5;
}

.button-20:focus {
  background-color: #413FC5;
  border-color: #3E3BBA;
  box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset, rgba(46, 54, 80, 0.075) 0 1px 1px, rgba(104, 101, 235, 0.5) 0 0 0 .2rem;
}

.button-20:active {
  background-color: #3E3BBA;
  background-image: none;
  border-color: #3A38AE;
  box-shadow: rgba(46, 54, 80, 0.125) 0 3px 5px inset;
}

.button-20:active:focus {
  box-shadow: rgba(46, 54, 80, 0.125) 0 3px 5px inset, rgba(104, 101, 235, 0.5) 0 0 0 .2rem;
}

.button-20:disabled {
  background-image: none;
  box-shadow: none;
  opacity: .65;
  pointer-events: none;
}
.oon{margin: 0 3px;}
.slidm{transition: all 3400ms 200ms;}

.mtnha p{
  margin:4px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: large;
color: white;
}
.td{    background: url(https://cdn.dribbble.com/userupload/9290192/file/original-5e35df79094e622896a34d38581f15b1.png?resize=1024x1001);;
          background-size:370px;width: 350px;height: 350px;
          position: relative;top: 50%;transform: translateY(-56%)
        }
.wr{margin: 7px 10px; height: 320px; display: flex;
    
          justify-content: space-around;background-color: #ecebeb;}
.imgf{width: 100px;height: 60px;position: relative;top: 50%;transform: translateY(-50%);}
.hr{margin-right: 7px;margin-top: 8px;}
header{display: flex;
    flex-flow: row;
     justify-content: space-between;
    height:50px;
    
}
    .nav1 i{ color: gray; margin-left: 10px;}
   .in{border:solid 2px white;
     text-decoration: underline gray;
    vertical-align:middle;
    padding: 5px;
    width: 170px;
    display: inline-block;}
     .nav2{display: flex; vertical-align: middle;
     text-align: center;}
     .fic{color: gray;
       
        margin-top: 5px ; 
        font-size: 1.9rem; 
          } 
        .fan{color: blueviolet;
          margin-top: 5px;
        font-weight:500px;
        font-size: 1.9rem ; 
         }
        .glide__slides{display: flex !important;}
        .nav3{ display: flex;}
        .nav3 i { margin-top: 15px;
            font-size: medium;
        margin-left: 5px;
        margin-right: 3px;
        color: gray;
        
        }
        .nav3 h2{ color: gray;font-weight: 200;}
        .nav3 img{ border-radius: 50%;
             border: solid 1px gray;
              width: 35px;
            height: 36px;
            margin-right: 15px; 
           margin-left: 200px;}
            .meno{color: rgb(61, 60, 59); 
                font-size: medium
                ;height: fit-content;
                margin-top: 10px;
            
            }

             main{font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif}
            .min1{ background-color: rgba(57, 156, 143, 0.849); 
                position: relative; 
                display: flex;
                 height: 210px;
                  margin-bottom: 20px;}
                .avali{ display: grid;
                  margin: 7px;
                     grid-template-columns: repeat(3,1fr);
                    gap: 5px;height: max-content;} 
            #rating-inline{ padding: 2px ;
                 
                 
                 border: none;
                 background: none;
                height: fit-content;}
            .min1 p { padding: 0%;margin: 2px;margin-left: 30% ;color: whitesmoke; }
            .min1 h1 { padding: 0%; margin-top:20px;margin-left: 30%; 
            margin-bottom: 2px;font-size:x-large ; color: whitesmoke; }
            .min1 .img{ position: absolute; 
                width: 35%;     
                margin: 14px 0px 0px 14px; 
                 box-shadow: 0px 10px 20px rgba(39, 38, 38, 0.979) ;
                 height: 240px;
                  }
                .bironi{ margin-left:20%;}
                .bironi1{margin-left: 1%;}
                .clid{background-color:rgb(255, 255, 255);
                   color:  rgba(57, 156, 143, 0.849); padding: 3px 20px;
                    margin-top: 15px;
                    margin-bottom: 20px;
                border: solid 0px;
                border-radius: 10px;
                margin-left: 45%;
                font-size: 13px;
             }
            
                
                .info{ margin-top: 40px;}
               .too-info .img{width: 46px;height: 46px;
                 border-radius:50%;
                margin-right: 0.5rem;
                 margin-top: -9px;}
                 .too-info{  font-size: 0.9rem;
                display: flex;
                margin: 32px 10px 10px 10px;}
                .sec1{ width: 20%;}
                .info h1 { font-size: 1.2rem; 
                    font-family:Arial, Helvetica, sans-serif;
                    color: rgb(88, 87, 87); font-weight: 300;
                margin-left: 10px;
            display: inline-block;}
                .bala1-2{ display: flex;
                 justify-content: space-between;
                 height: 20px; margin-top: 20px; }
                 .dade{ margin-top: 20px;}
                .bala1{ margin-left: 10px;color: rgb(88, 87, 87); }
                .bala2 h1{ margin: 2px 15px; display: inline-block;}
                .bala2{ display: flex; height: 20px; }
               .sec2{ width: 80%; margin-right: 6px;}
               .matn{  display: flex; justify-content: space-between;}
               .info{ display: flex;}
            .bala2 h1:hover{ text-decoration: underline 2.5px rgb(117, 161, 226) ; ;}
            .fnha{ display: grid; gap: 20px;grid-template-columns: repeat(3,1fr) ;
            margin-top: 30px;}
            .fnha2{ 
            margin: 10px;}
            .fnha-to1{ display: grid;
                gap: 15px;
                 grid-template-columns: repeat(3,1fr);
                 margin: 0px; background-color: rgb(255, 255, 255); }
                 .fnha2-to1{
                     display: grid;
                gap: 15px;
                 grid-template-columns: repeat(3,1fr);
                 margin: 0px; background-color: rgb(255, 255, 255); }
             .fnha img{width: 100px;}
             .fnha2 img{width: 100px;}
             .fnha p { padding: 0%;margin: 2px;margin-left: 20%;color:rgb(19, 19, 19); 
            font-size: 13.5px;;}
            .fnha2 p { padding: 0%;margin: 2px;margin-left: 20%;color:rgb(19, 19, 19); 
            font-size: 13.5px;;}
            .fnha h1 { padding: 0%; margin-top:20px; margin-left: 20%; 
            margin-bottom: 2px; font-size:x-large ; color: rgb(19, 19, 19);}
            .fnha2 h1 { padding: 0%; margin-top:20px; margin-left: 20%; 
            margin-bottom: 2px; font-size:x-large ; color: rgb(19, 19, 19);}
                 .clid2-1{ background-color :rgba(235, 230, 230, 0.61);  
                    color: rgb(19, 19, 19); padding: 4px 20px;
                    margin-top: 10px;
                    margin-bottom: 11px;
                border: solid 0px;
                border-radius: 20%; margin-left: 40%; width:fit-content;}
            main{ background-color:#ecebeb}
          .fnha-to1{ height: 11.5rem;}
          .fnha2-to1{ height: 11.5rem; }
          .tooi1{position: relative;width: 90px;}
          .tooi1 img{ position: absolute; 
             margin-bottom: 40px;
             margin-left: 10px;
                box-shadow: 0px 10px 20px  rgba(39, 38, 38, 0.979);
              
              }
                .bironi1{position: relative;}
                .bironi1 i{ position: absolute; margin-top: 5px; margin-right: 0px; margin-left: 155%;
                color: rgb(88, 87, 87) ;}
                .in:hover{ border:solid 1px rgb(132, 132, 231); text-decoration: underline 2px  rgb(113, 113, 236);}
                .bironi1 svg{margin-left: 200px;margin-top: 4px;}
                .bironi1 h1 { margin-left: 20px;margin-top: 0px;width: 90%;}
                .bironi1 p { margin-left: 20px;margin-top: 0px;width: 80%;}
                .bironi1 #rating-inline{margin-left: 15px !important; }
                .ve{ writing-mode: vertical-rl !important; }

              @media (max-width: 1284px) {.matn{display:none;
              height: 0px;width: 0px;margin: 0px;}
              .sec1{width: 0px;}
              .sec2{width: 100vw;}
              .sec1{width: 0px;}
              .min1 .img{height: fit-content;}
              .min1 p{font-size: small;}
              .slidm2{display: block !important;}
              
              .avali{display: none;}

              
              }
              
              @media (max-width:1070px){
                .fnha{display: grid;grid-template-columns:repeat(2,1fr) ;}
                .sec2{width: 100vw; margin: 0 auto;}
                
              }
              
              @media (max-width:703px){ .fnha{display: grid;grid-template-columns:repeat(1,1fr) ;}
                .sec2{width: 100vw; margin: 0 auto;}
                .slidm2{display: none !important;}
                .slidm{display: block !important; margin: 0 5px;}
                .fnha-to1{max-width: 353px;margin: 0 auto !important;}
                .bala1 h1{font-size: small;}
                
                .wr p{font-size: smaller;}
                .bala2{display: none;}
                .td{width: 200px; height: 200px;background-size: cover;}
                }
</style>

<script>
import hederm from './heder.vue'
import {et} from './data'
import { Carousel, Slide } from 'vue-carousel';
import { Glide, GlideSlide } from 'vue-glide-js'
export default {
   name:'FanFic',
   
    data(){
        return{
            et: et ,
            ala:' see more>',
            add:0,
            add2:0,
            add3:1,
            active:3
}},

filters: {
    truncate(value, length) {
      if (value.length > length) {
        return value.substring(0, length) + '...'
      } else {
        return value
      }
    }
  },
  
   components: {
    Carousel,
     Slide,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    hederm 
    
  } ,
  methods:{
  
   jam : function(){
    this.add=this.add+1
    if(this.add===3){this.add=0}
   },
   jam2 : function(){
    this.add2=this.add2+1
    this.add3=this.add3+1
    if(this.add2===3){this.add2=0}
    if(this.add3===3){this.add3=0}
   },
   menh:function(){
    this.add=this.add-1
    if(this.add==-1){this.add=2}
   },
   menh2:function(){
    this.add2=this.add2-1
    this.add3=this.add3-1
    if(this.add2==-1){this.add2=2}
    if(this.add3==-1){this.add3=2}
   }
  }
  }



</script>