<script setup>
import {onMounted} from 'vue';
import FishBone from './jQuery.fishbone';
import Slider from './jquery.slide';
import $ from 'jquery';
import './fishbone.css';
// onMounted(createTimeline);
onMounted(() => {
  FishBone($);
  Slider($);

  $(() => {

    const data = [{
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号(当前案件)',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号(当前案件)',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号(当前案件)',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号(当前案件)',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号(当前案件)',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号(当前案件)',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号',
    }, {
      '审理时间': '2016-12-20 至 2016-12-20',
      '承办庭室': 'XXXX',
      '承办法官': 'XXX',
      '承办法院': 'XXXXXXX法院',
      '案件状态': 'XX',
      '案号': '(XXXX)XXXXXX第XXXX号(当前案件)',
    }];
    $(function () {
      //创建案件历史
      $('.fishBone').fishBone(data);
    });
  });
});
</script>
<template>
  <!--  <div id="timeline">-->

  <!--  </div>-->
  <div class="fishBone"></div>
</template>
<style lang="less">

#timeline {
  /* 拓扑图--start */
  /* 节点状态颜色 */

  .node {
    cursor: pointer;
  }

  g.type-current > circle {
    fill: #FFAC27;
  }

  g.type-success > circle {
    fill: #9270CA;
  }

  g.type-fail > circle {
    fill: #67C23A;
  }

  g.type-done > circle {
    fill: #E8684A;
  }

  /* 拓扑图--end */

  /* 坐标轴-start */

  .axis path,
  .axis line {
    fill: none;
    stroke: #DCDCDC;
    shape-rendering: crispEdges;
  }

  .axis text {
    font-family: sans-serif;
    font-size: 12px;
    fill: #999999;
  }

  .axis .x2-axis text {
    font-size: 14px;
    font-weight: 400;
    fill: #333;
  }

  .axis .x2-axis .tick {
    stroke-width: 2px;
  }

  /* 坐标轴-end */
}

</style>
