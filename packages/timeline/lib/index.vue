<script setup>
import {onMounted} from 'vue';
import * as d3 from 'd3';

onMounted(() => {

  const arr = [
    {
      label: '1月',
      value: 1,
      type: 'h',
    },
    {
      label: '2月222',
      value: 2,
      type: 'h',
    },
    {
      label: '3月',
      value: 3,
      type: 'h',
    },
    {
      label: '4月',
      value: 4,
      type: 'h',
    },
    {
      label: '5月',
      value: 5,
      type: 'h',
      child: [
        {
          label: '1',
          value: '项目工作研讨会1',
          time: '2022-01-20',
          type: 'h1',
          child: [
            {
              label: '1.1',
              value: '责任体系-1',
              time: '2022-01-20',
              type: 'h2',
              child: [
                {
                  label: '1.1.1',
                  value: '责任体系',
                  time: '2022-01-20',
                  type: 'h3',
                },
                {
                  label: '1.1.2',
                  value: '责任体系',
                  time: '2022-01-20',
                  type: 'h3',
                },
                {
                  label: '1.1.2',
                  value: '责任体系',
                  time: '2022-01-20',
                  type: 'h3',
                },
                {
                  label: '1.1.2',
                  value: '责任体系',
                  time: '2022-01-20',
                  type: 'h3',
                },
                {
                  label: '1.1.2',
                  value: '责任体系',
                  time: '2022-01-20',
                  type: 'h3',
                },
              ],
            },
            {
              label: '1.2',
              value: '动员会议-1',
              time: '2022-01-20',
              type: 'h2',
              child: [
                {
                  label: '1.1.1',
                  value: '动员会议1qwer',
                  time: '2022-01-20',
                  type: 'h3',
                },
                {
                  label: '1.1.2',
                  value: '动员会议2',
                  time: '2022-01-20',
                  type: 'h3',
                },
                {
                  label: '1.1.3',
                  value: '动员会议3',
                  time: '2022-01-20',
                  type: 'h3',
                },
                {
                  label: '1.1.4',
                  value: '动员会议4',
                  time: '2022-01-20',
                  type: 'h3',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '6月',
      value: 6,
      type: 'h',
      child: [
        {
          label: '2',
          value: '项目工作研讨会2',
          time: '2022-01-20',
          type: 'h1',
          child: [
            {
              label: '1.1',
              value: '责任体系',
              time: '2022-01-20',
              type: 'h2',
            },
            {
              label: '1.2',
              value: '动员会议',
              time: '2022-01-20',
              type: 'h2',
            },
          ],
        },
      ],
    },
    {
      label: '7月',
      value: 7,
      type: 'h',
    },
    {
      label: '8月',
      value: 8,
      type: 'h',
    },
    {
      label: '9月',
      value: 9,
      type: 'h',
      child: [
        {
          label: '3',
          value: '项目工作研讨会11',
          time: '2022-01-20',
          type: 'h1',
          child: [
            {
              label: '1.1',
              value: '责任体系',
              time: '2022-01-20',
              type: 'h2',
              child: [
                {
                  label: '1.1.1',
                  value: '动员会议1',
                  time: '2022-01-20',
                  type: 'h3',
                },
              ],
            },
            {
              label: '1.2',
              value: '动员会议',
              time: '2022-01-20',
              type: 'h2',
              child: [
                {
                  label: '1.1.1',
                  value: '动员会议1',
                  time: '2022-01-20',
                  type: 'h3',
                },
                {
                  label: '1.1.2',
                  value: '动员会议2',
                  time: '2022-01-20',
                  type: 'h3',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '10月',
      value: 10,
      type: 'h',
    },
    {
      label: '11月',
      value: 11,
      type: 'h',
    },
    {
      label: '12月',
      value: 12,
      type: 'h',
    },
  ];

  /**
   * text: string,
   fontWeight: string = 'normal',
   fontSize: string = '14px',
   fontFamily: string = '黑体'
   @return number
   *
   */
  let utilCanvas = null;
  // 计算文本长度
  const getTextWidth = (
      text,
      fontWeight = 'normal',
      fontSize = '14px',
      fontFamily = '黑体',
  ) => {
    const canvas =
        utilCanvas || (utilCanvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    const metrics = context.measureText(text);
    return Math.ceil(metrics.width);
  };
  //
  arr.map(child => {
    const data = d3.hierarchy(child, d => d.child);

    const tree = d3.tree().size(300, 300).nodeSize([0, 20]);
    // console.log();
    let layout = 0;

    tree(data).each((d) => {
      d.x += getTextWidth(d.data.label) + 20 + (d?.parent?.x || 0);
      layout += d.x;
    }).descendants();
    // 获得层宽度


  })//   计算偏移
      .reduce((pre, now) => {
        //   默认不偏移

      }, 0);
  // 获得计算之后的节点

});

//   class EventBone {
//     constructor(arr, el, defaultBoxHeight, defaultBoxWidth) {
//       this.data = arr;
//       this.parent = document.getElementById('timeline');
//       this.svgNS = 'http://www.w3.org/2000/svg';
//       this.xMap = new Map();
//       this.defaultBoxHeight = defaultBoxHeight;
//       this.defaultBoxWidth = defaultBoxWidth;
//       this.drawHeight = 1000;
//       this.leafHeight = 40;
//
//       this.kvArray = new Map();
//
//
//       this.tempLen = 0;
//       this.defultLineWidth = 10;
//       this.childMaxHeight = 0;
//       this.down = false;
//       //   创建画布
//       this.main();
//     }
//
//     main() {
//       this.initKvArray();
//       console.log(`-->`);
//     }
//
//     initKvArray() {
//       //   汇总所有的长度
//       let sum = this.data.reduce((pre, now) => {
//         //  计算分组偏移量
//         this.getMaxWidth(now);
//         // 当前组所占据的最大宽度
//         return pre + this.getMaxWidth(now);
//       }, 0);
//       // 汇总所有的高度
//       sum = this.data.reduce((pre, now) => {
//         console.log(`now-->`, now);
//
//         now = this.getNodeHeight(now)
//         console.log(`now-->`, now);
//         return pre + now;
//       }, 0);
//     }
//
//     getNodeHeight(root, level = 0) {
//       //
//       if (!root) return 0;
//       //   计算树高
//       root.child?.forEach(child => {
//         level = Math.max(this.getNodeHeight(child, level + 1), level);
//       });
//       return level;
//     }
//
//     getMaxWidth(root, level = 0, sum = 0) {
//       if (!root) return 0;
//       // 计算文本的宽度
//       const textWidth = getTextWidth(root.value) + this.defultLineWidth;
//       // 计算至今为止的总和
//       root.child?.forEach(child => {
//         //  当前是
//         sum = Math.max(this.getMaxWidth(child, level + 1, sum + textWidth * level), sum);
//       });
//       if (!root.child) return textWidth;
//       return sum;
//
//     }
//   }
//
//   new EventBone(arr, document.getElementById('timeline'));
//
//   class FishBone {
//     constructor(arr) {
//       this.data = arr;
//       this.oParent = document.getElementById('timeline');
//       this.svgNS = 'http://www.w3.org/2000/svg';
//       this.xMap = new Map();
//       this.defaultBoxHeight = 500;
//       this.defaultBoxWidth = 600;
//       this.drawHeight = 1000;
//       this.leafHeight = 40;
//       this.kvArray = new Map();
//       // 创建画布
//       this.oSvg = this.createTag('svg', {
//         xmlns: this.svgNS,
//         width: '100%',
//         height: this.drawHeight + 'px',
//       });
//
//       this.tempArr = [];
//       // 零食存放最长子集
//       this.tempLen = 0;
//       this.defultLineWidth = 10;
//       this.childMaxHeight = 0;
//       this.down = false;
//       this.main();
//     }
//
//     main() {
//       this.initKvArray();
//       this.rander();
//     }
//
//     rander() {
//       this.randerMonthBox();
//       this.randerFirstCircle();
//       this.oParent.appendChild(this.oSvg);
//       console.log(this.kvArray);
//     }
//
//     randerFirstCircle() {
//       this.data.forEach((item, index) => {
//         if (item.len != this.defaultBoxWidth) {
//           this.oSvg.appendChild(
//               this.creatBigCircle(
//                   this.xMap.get(event + 1),
//                   this.drawHeight / 2,
//                   this.down,
//                   item.child[0],
//               ),
//           );
//           this.down = !this.down;
//         }
//       });
//     }
//
//     initKvArray() {
//       this.data.forEach((item, index) => {
//         this.tempLen = 0;
//         item.child &&
//         item.child.length > 0 &&
//         this.getMaxWidth(item.child, 1);
//         item.len = this.tempLen || this.defaultBoxWidth;
//         this.kvArray.set(item.value, item.len);
//       });
//     }
//
//     getMaxWidth(arr, level) {
//       // 获取子集最长
//       arr.forEach((item, index) => {
//         const len = getTextWidth(item.value) + this.defultLineWidth * level;
//         item.len = getTextWidth(item.value) + this.defultLineWidth;
//         if (!event) {
//           this.tempLen = len;
//         } else {
//           if (len > this.tempLen) {
//             this.tempLen += len + this.defultLineWidth * level;
//           }
//         }
//         if (item.child && item.child.length > 0)
//           this.getMaxWidth(item.child, level++);
//       });
//     }
//
//     randerMonthBox() {
//       for (let index = 1; event <= this.data.length; event++) {
//         let w = this.kvArray.get(event);
//         let count = event;
//         let wcount = 0;
//         while (count > 0) {
//           wcount += this.kvArray.get(count);
//           count--;
//         }
//         // 把每月的x坐标存起来
//         this.xMap.set(event, wcount - w);
//         this.oSvg.appendChild(
//             this.createMonth(
//                 w,
//                 this.defaultBoxHeight,
//                 'dimgrey',
//                 this.data[event - 1].label,
//                 this.xMap.get(event),
//                 this.drawHeight / 2,
//             ),
//         );
//       }
//     }
//
//     // 封装createTag函数
//     createTag(tag, objAttr) {
//       var oTag = document.createElementNS(this.svgNS, tag);
//       for (var attr in objAttr) {
//         oTag.setAttribute(attr, objAttr[attr]);
//       }
//       return oTag;
//     }
//
//     /** 封装创建月份的方法 - 平行四边形和文字
//      * @param width { int } 宽
//      * @param height { int } 高
//      * @param stroke  { string } 边线颜色
//      * @param font { string } 内部文字
//      * @param x { number } 绘制位置x坐标
//      * @param y { number } 绘制位置y坐标
//      */
//     createMonth(
//         width = 120,
//         height = 30,
//         stroke = 'dimgrey',
//         font = '',
//         x,
//         y,
//     ) {
//       var oG = this.createTag('g', {transform: `translate(${x}, ${y})`});
//       var polygon = this.createTag('polygon', {
//         x: '0',
//         y: '0',
//         points: `10,0 ${width},0 ${width - 10},${height} 0, ${height}`,
//         fill: '#fff',
//         stroke: `${stroke}`,
//         'stroke-width': 0,
//       });
//       var text = this.createTag('text', {
//         x: `${width / 2}`,
//         y: `${height / 2}`,
//         'font-size': '14px',
//         'font-weight': 'bold',
//         fill: '#000',
//         'dominant-baseline': 'central',
//         'text-anchor': 'middle',
//       });
//       var tsapn = this.createTag('tspan');
//       tsapn.innerHTML = font;
//       text.appendChild(tsapn);
//       oG.appendChild(polygon);
//       oG.appendChild(text);
//       return oG;
//     }
//
//     creatBigCircle(x, y, down, item) {
//       const r = 20;
//       // var oG = createTag('g', { transform: `translate(${x}, ${y})`});
//       const halfR = r * 1.5;
//       let yc = 0;
//       let yl1 = 0;
//       let yl2 = 0;
//       let lx = r + 5;
//       // 是否向下拓展
//       if (down) {
//         yc = y + this.defaultBoxHeight + halfR;
//         yl1 = -r;
//         yl2 = -halfR;
//       } else {
//         yc = y - halfR;
//         yl1 = r;
//         yl2 = halfR;
//       }
//       var g = this.createTag('g', {
//         transform: `translate(${x + 2 * r}, ${yc})`,
//       });
//
//       var bigCircle = this.createTag('circle', {
//         cx: 0,
//         cy: 0,
//         r: r,
//         stroke: 'dimgrey',
//         'stroke-width': 2,
//         fill: 'white',
//       });
//       var line = this.createTag('line', {
//         x1: 0,
//         y1: yl1,
//         x2: 0,
//         y2: yl2,
//         stroke: 'dimgrey',
//         'stroke-width': 2,
//       });
//       var text = this.createTag('text', {
//         x: 0,
//         y: 0,
//         'font-size': '16px',
//         'font-weight': 'bold',
//         fill: '#000',
//         'dominant-baseline': 'middle',
//         'text-anchor': 'middle',
//       });
//       var tsapn = this.createTag('tspan');
//       tsapn.innerHTML = item.label;
//       text.appendChild(tsapn);
//
//       var titleline = this.createTag('line', {
//         x1: lx,
//         y1: 0,
//         x2: lx + this.getLineWidth(item),
//         y2: 0,
//         stroke: 'dimgrey',
//         'stroke-width': 2,
//       });
//
//       var textTime = this.createTag('text', {
//         x: 30,
//         y: 0,
//         'font-size': '12px',
//         'font-weight': 'normal',
//         fill: '#000',
//         'dominant-baseline': 'ideographic',
//         'text-anchor': 'left',
//       });
//       var tsapnTime = this.createTag('tspan');
//       tsapnTime.innerHTML = item.time;
//       textTime.appendChild(tsapnTime);
//
//       var textTitle = this.createTag('text', {
//         x: 110,
//         y: 0,
//         'font-size': '12px',
//         'font-weight': 'normal',
//         fill: '#000',
//         'dominant-baseline': 'ideographic',
//         'text-anchor': 'left',
//       });
//       var tsapnTitle = this.createTag('tspan');
//       tsapnTitle.innerHTML = item.value;
//       textTitle.appendChild(tsapnTitle);
//
//       g.appendChild(bigCircle);
//       g.appendChild(line);
//       g.appendChild(text);
//       g.appendChild(titleline);
//       g.appendChild(textTime);
//       g.appendChild(textTitle);
//       let prev = 0; // 记录每组中上一个的高度，因为下一个高度=上一个的高度+当前高度
//       item.child.forEach((ele) => {
//         prev = this.renderParent(g, ele, down, r, prev);
//       });
//       return g;
//     }
//
//     getLineWidth(item, leaf) {
//       var lineWidth = getTextWidth(item.time) + 20 + getTextWidth(item.value);
//       if (leaf === 'leaf') {
//         lineWidth =
//             getTextWidth(item.time, 'normal', '12px') +
//             40 +
//             getTextWidth(item.value, 'normal', '12px');
//       }
//
//       var curLineWidth = lineWidth < 220 ? 220 : lineWidth;
//       return lineWidth;
//     }
//
//     renderParent(pg, item, down, r, prev) {
//       // console.log(item, 'down');
//       this.childMaxHeight = 0;
//
//       var haflTh = 0;
//       if (item.child) {
//         // 获取所有子集最长项, 既数组最长的子集也是最长的数组. 然后遍历每一个子集, 计算其高度并根据当前高
//         this.getMaxChildHeight(item.child);
//         haflTh = this.childMaxHeight * this.leafHeight;
//       } else {
//         // 没有子集就走这个
//         haflTh = (this.childMaxHeight * this.leafHeight) / 2 + 50 + prev;
//       }
//
//       // 把最长项*子集高度的一半+初始高度+上一个的高度
//       var h = (this.childMaxHeight * this.leafHeight) / 2 + 50 + prev;
//       var g = this.createTag('g');
//       var points = `0,-20 0,-${h} 10,-${h}`;
//       var cx = 10 + r;
//       var cy = -h;
//       if (down) {
//         points = `0,20 0,${h} 10,${h}`;
//         cy = h;
//       }
//       var xStart = cx + r + 5;
//       var xEnd = xStart + this.getLineWidth(item);
//       var polyline = this.createTag('polyline', {
//         points: points,
//         fill: 'none',
//         stroke: `dimgrey`,
//         'stroke-width': 2,
//       });
//       var bigCircle = this.createTag('circle', {
//         cx: cx,
//         cy: cy,
//         r: r,
//         stroke: 'dimgrey',
//         'stroke-width': 2,
//         fill: 'white',
//       });
//       var line = this.createTag('line', {
//         x1: xStart,
//         y1: cy,
//         x2: xEnd,
//         y2: cy,
//         stroke: 'dimgrey',
//         'stroke-width': 2,
//       });
//       var text = this.createTag('text', {
//         x: cx,
//         y: cy,
//         'font-size': '14px',
//         'font-weight': 'bold',
//         fill: '#000',
//         'dominant-baseline': 'middle',
//         'text-anchor': 'middle',
//       });
//       var tsapn = this.createTag('tspan');
//       tsapn.innerHTML = item.label;
//
//       var textTime = this.createTag('text', {
//         x: xStart,
//         y: cy,
//         'font-size': '12px',
//         'font-weight': 'normal',
//         fill: '#000',
//         'dominant-baseline': 'ideographic',
//         'text-anchor': 'left',
//       });
//       var tsapnTime = this.createTag('tspan');
//       tsapnTime.innerHTML = item.time;
//       textTime.appendChild(tsapnTime);
//
//       var textTitle = this.createTag('text', {
//         x: xStart + 60 + 20,
//         y: cy,
//         'font-size': '12px',
//         'font-weight': 'normal',
//         fill: '#000',
//         'dominant-baseline': 'ideographic',
//         'text-anchor': 'left',
//       });
//       var tsapnTitle = this.createTag('tspan');
//       tsapnTitle.innerHTML = item.value;
//       textTitle.appendChild(tsapnTitle);
//
//       text.appendChild(tsapn);
//       g.appendChild(polyline);
//       g.appendChild(bigCircle);
//       g.appendChild(text);
//
//       g.appendChild(line);
//       g.appendChild(textTime);
//       g.appendChild(textTitle);
//       pg.appendChild(g);
//
//       if (item.child && item.child.length > 0) {
//         var startY = (this.leafHeight * (item.child.length - 1)) / 2;
//         item.child &&
//         item.child.forEach((ele, index) => {
//           this.randerLeaf(g, xEnd, cy, ele, startY);
//           startY -= this.leafHeight;
//         });
//       }
//       return haflTh;
//     }
//
//     randerLeaf(pg, sx, sy, item, startY) {
//       var g = this.createTag('g', {transform: `translate(${sx}, ${sy})`});
//       var xEnd = 70 + 5 + this.getLineWidth(item, 'leaf');
//       var points = `0,0 0,${startY} 20,${startY}`;
//       var polyline = this.createTag('polyline', {
//         points: points,
//         fill: 'none',
//         stroke: `dimgrey`,
//         'stroke-width': 2,
//       });
//       var polygon = this.createTag('polygon', {
//         points: `25,${startY - 10} 80,${startY - 10} 70,${startY + 10} 15, ${
//             startY + 10
//         }`,
//         fill: '#fff',
//         stroke: 'dimgrey',
//         'stroke-width': 2,
//       });
//       var line = this.createTag('line', {
//         x1: 80,
//         y1: startY,
//         x2: xEnd,
//         y2: startY,
//         stroke: 'dimgrey',
//         'stroke-width': 2,
//       });
//
//       var text = this.createTag('text', {
//         x: 45,
//         y: startY,
//         'font-size': '12px',
//         'font-weight': 'bold',
//         fill: '#000',
//         'dominant-baseline': 'central',
//         'text-anchor': 'middle',
//       });
//       var tsapn = this.createTag('tspan');
//       tsapn.innerHTML = item.label;
//       text.appendChild(tsapn);
//
//       var textTime = this.createTag('text', {
//         x: 85,
//         y: startY,
//         'font-size': '12px',
//         'font-weight': 'normal',
//         fill: '#000',
//         'dominant-baseline': 'ideographic',
//         'text-anchor': 'left',
//       });
//       var tsapnTime = this.createTag('tspan');
//       tsapnTime.innerHTML = item.time;
//       textTime.appendChild(tsapnTime);
//
//       var textTitle = this.createTag('text', {
//         x: 85 + 60 + 20,
//         y: startY,
//         'font-size': '12px',
//         'font-weight': 'normal',
//         fill: '#000',
//         'dominant-baseline': 'ideographic',
//         'text-anchor': 'left',
//       });
//       var tsapnTitle = this.createTag('tspan');
//       tsapnTitle.innerHTML = item.value;
//       textTitle.appendChild(tsapnTitle);
//
//       g.appendChild(polyline);
//       g.appendChild(polygon);
//       g.appendChild(line);
//       g.appendChild(text);
//
//       g.appendChild(textTime);
//       g.appendChild(textTitle);
//       pg.appendChild(g);
//     }
//
//     getMaxChildHeight(arr) {
//       if (arr.length > this.childMaxHeight) {
//         this.childMaxHeight = arr.length;
//       }
//       arr.forEach((item) => {
//         if (item.child && item.child.length > 0) {
//           this.getMaxChildHeight(item.child);
//         }
//       });
//     }
//   }
//
//   new FishBone(arr);
//   // console.log((2));
// });
</script>
<template>
  <div id="timeline" width="100%" height="100vh"></div>
</template>
