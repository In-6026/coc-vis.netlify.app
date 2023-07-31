<script setup>
import * as d3 from 'd3';
import {onMounted} from 'vue';

onMounted(() => {
  console.log();
  const svg = d3.select('svg.timeline');
  const g = () => svg.append('g');

  //   option
  svg.attr({
    width: () => document.clientWidth,
    height: () => document.clientHeight,
    viewport: (x, y, width, height) => `${x} ${y} ${width} ${height}`,
  });
  // zoom
  // const zoom = d3.zoom();
  // zoom.on('zoom', (event) => {
  //   console.log(event);
  // });
  //
  // svg.call(zoom).on('wheel.zoom', null);
  // drag
  // const drag = d3.drag();
  // drag.on('drag', (event) => {
  //   console.log(event);
  // });
  // svg.call(drag);

  // x
  // console.log(`g().appendChild-->`, g().appendChild);
  const compose = (start, ...node) => node.forEach(item => d3.select(start.parentNode()).append(item));
  const rect = () => g().append('rect');
  const attrs = (target, attrs) => {
    Object.keys(attrs).forEach(key => {
      target.attr(
          key,
          attrs[key],
      );
    });
    return target;
  };
  const circle = () => g().append('circle');
  const baseline = 50;
  const start = 30;
  const gap = 15;
  const size_y = 10;
  const size_x = 100;
  const $ = d3.select;
  const dot = () => attrs(circle(), {
    cx: start,
    cy: baseline + 10,
    r: size_y,
    fill: '#22b8cf',
  });
  //  创建圈
  // 创建时间线
  const line = () => attrs(
      rect(), {
        x: start + gap,
        y: baseline,
        width: size_x,
        height: size_y * 2,
        rx: '6',
        fill: '#20c997',
        strokeWidth: 1,
        cursor: 'pointer',
      },
  );

  dot();
  line().on('mouseenter', ({target}) => {
    d3.select(target)
        .transition()
        .duration(2000)
        .delay(500)
        .ease(d3.easeBounce)
        .attr('fill', 'steelblue');
  }).on('mouseleave', ({target}) => {
    d3.select(target)
        .transition()
        .duration(2000)
        .delay(500)
        .ease(d3.easeBounce)
        .attr('fill', '#20c997');

  });
});
</script>
<template>
  <svg class="timeline">

  </svg>
</template>

<style scoped lang="less">
.Timeline-container {

}
</style>
