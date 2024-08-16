<template>
        <header class=" bg-white " style="width: 100%;">
        <div class="nav1 ml-2"  style="margin: 5px;">
            <form action="http://127.0.0.1:5500/aslo.html#" class="flex fo">
                <svg  style="margin-right: 0%;margin-top: 13px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search mt-2.5" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                <input class="in" type="text" placeholder="search">
            </form>
        </div>
        <div class="nav2">
            <h1 class="fic">Online</h1>
            <h1 class="fan">Book</h1>
        </div>
        <div class="nav3 mr-2">

 <div><router-link to="/login" class="text-black">
  <svg class=" w w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="1.3" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
</router-link>
<div v-if="user==='t'" class="w-6 h-1  bg-violet-700 mym" style="box-shadow: -2px -2px 5px blueviolet;"></div>
</div>
 

<div>
  <router-link to="/librali" class="text-black">
    <svg  class="w w-[28px] h-[28px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
</svg></router-link>
<div v-if="librali==='t'"  class="w-6 h-1 bg-violet-700 mym" style="box-shadow: -2px -2px 5px blueviolet;"></div>
</div>



<div>
  <router-link to="/" class="text-black">
    <svg  class=" w w-[32px] h-[32px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
</svg>

</router-link>
<div v-if="home==='t'" class="w-6 h-1 bg-violet-700 mym" style="box-shadow: -2px -2px 5px blueviolet;"></div>
        </div>
      </div>
      
    </header>
</template>
<style scoped>
.fo{margin-left: 11px;display: flex;}

.active{background-color: black;}
.w{margin: 5px ; color:gray ;}
.mym{margin: 0 auto; margin-top: -7px;}
header{display: flex;
    flex-flow: row;
     justify-content: space-between;
    height:42px;
    
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
            @media (max-width:703px){
              .nav2 h1 {
                font-size:1.3rem;
              }
              .in{width: 60px;}
              }

</style>
<script>




export default {
    name:'HeDer',
    props:{user:String,
        home:String,
        librali:String}
    ,
    data(){
        return{
            u:'t',
            h:'f',
            l:'t'
        }
    }
}
</script>