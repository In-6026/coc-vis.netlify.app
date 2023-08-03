<script setup>
import {onMounted} from 'vue';
import FishBone from './jQuery.fishbone';
import Slider from './jquery.slide';
import $ from 'jquery';
import './fishbone.css';
import * as d3 from 'd3';
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
