<template>
    <div style="margin-top: -52px;">
        <hederm user="f" home="f" librali="t"></hederm>
        <div class="grid md:grid-cols-7 sm:grid-cols-3 p-10 bo">
            <div class="posh " style="margin: 15px;">
            <div class="ctb book flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ic text-gray-400" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
            </div></div>
        </div>
    </div>
</template>
<style scoped>
.posh{
 background: white;
 width: fit-content;
 height: fit-content;
}
.book{border: 1px rgb(181, 181, 181) dashed;
     border-spacing:20px;
     width: 150px; height: 200px;
   
    }
.ic{margin: 0 auto;}
.bo{border: 1px rgb(225, 225, 225) solid;height: 93vh;background: #ecebeb;}
</style>


<script>

import hederm from './heder.vue'
export default {
name:'LibRali',
components:{hederm},
}
        
   
</script>
