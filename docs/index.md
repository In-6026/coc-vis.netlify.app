---
layout: home
hero:
  name: " 量子小组可视化案例集 "
  text: " 一堆有意思的案例 ~"
---

<div class="w-80% m-auto">
<h1 class="font-bold text-xl text-center cursor-pointer" @click="refresh">
  每日新闻 <span class="inline-block text-xl i-carbon-update-now"></span>
</h1> 
<ul class="flex w-80% m-auto flex-justify-center flex-wrap gap-10 mt-6">
  <NCard v-for="news in newsList" 
    :key="news.url"
    @click="toDetail(news.url)"
    class="m-auto  hover:drop-shadow-lg cursor-pointer rounded-lg w-80% max-w-300px"
  > 
<h2 class="text-xl text-bold"><span class="inline-block text-xl i-carbon-wheat text-#18a058"></span>{{news.category}}</h2>
<span class="indent-2em">{{news.title}}</span>
</NCard>
</ul>
<NBackTop :right="100"></NBackTop>
</div>

[//]: # (/)
<script setup>
import {ref} from 'vue';
import axios from 'axios';
import pkg from 'naive-ui';
const { NButton,NDivider,NCard,NBackTop } = pkg;

function useNewsListReq(){
    const newsList = ref();
    function getNewsList(){
      axios.get('https://news.topurl.cn/api').then((data)=>{
        const _newsList = data.data.data.newsList;
        newsList.value = _newsList;
      });
    }
    getNewsList();
    return [newsList,getNewsList];
}
function toDetail(url){
  window.open(url)  
}
const [newsList,refresh] = useNewsListReq();

</script>
