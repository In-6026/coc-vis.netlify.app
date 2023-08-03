<script setup>
import {onMounted} from 'vue';
import {createTimeline} from './index';

onMounted(createTimeline);
</script>
<template>
  <div id="fishbone" class=" w-full h-400px"></div>
</template>
<style lang="less">
.h-400px {
  height: 400px;
}
</style>
