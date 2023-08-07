<script setup>
import {onMounted, ref} from 'vue';
import G6 from '@antv/g6';

const fishbone = ref();
onMounted(() => {

  G6.registerNode(
      'tree-node',
      {
        drawShape: function drawShape(cfg, group) {
          const rect = group.addShape('rect', {
            attrs: {
              fill: '#fff',
              stroke: '#666',
              radius: 6,
              x: 0,
              y: 0,
              width: 1,
              height: 1,
            },
            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
            name: 'rect-shape',
          });
          const content = cfg.name.replace(/(.{19})/g, '$1\n');
          const text = group.addShape('text', {
            attrs: {
              text: content,
              x: 0,
              y: 0,
              textAlign: 'left',
              textBaseline: 'middle',
              fill: '#666',
            },
            // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
            name: 'text-shape',
          });
          const bbox = text.getBBox();
          const hasChildren = cfg.children && cfg.children.length > 0;
          rect.attr({
            x: -bbox.width / 2 - 4,
            y: -bbox.height / 2 - 6,
            width: bbox.width + (hasChildren ? 26 : 12),
            height: bbox.height + 12,
          });
          text.attr({
            x: -bbox.width / 2,
            y: 0,
          });
          if (hasChildren) {
            group.addShape('marker', {
              attrs: {
                x: bbox.width / 2 + 12,
                y: 0,
                r: 6,
                symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
                stroke: '#666',
                lineWidth: 2,
              },
              // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
              name: 'collapse-icon',
            });
          }
          return rect;
        },
        update: (cfg, item) => {
          const group = item.getContainer();
          const icon = group.find((e) => e.get('name') === 'collapse-icon');
          icon.attr('symbol', cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse);
        },
      },
      'single-node',
  );

  console.log(`fishbone.value-->`, fishbone.value);
  const container = fishbone.value;
  const width = container.scrollWidth;
  const height = container.scrollHeight || 500;
  const graph = new G6.TreeGraph({
    container,
    width,
    height,
    modes: {
      default: [
        {
          type: 'collapse-expand',
          onChange: function onChange(item, collapsed) {
            const data = item.get('model');
            graph.updateItem(item, {
              collapsed,
            });
            data.collapsed = collapsed;
            return true;
          },
        },
        'drag-canvas',
        'zoom-canvas',
      ],
    },
    defaultNode: {
      type: 'tree-node',
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    defaultEdge: {
      type: 'cubic-horizontal',
      style: {
        stroke: '#A3B1BF',
      },
    },
    layout: {
      type: 'compactBox',
      direction: 'H',
      getId: function getId(d) {
        return d.id;
      },
      getHeight: function getHeight() {
        return 16;
      },
      getWidth: function getWidth() {
        return 16;
      },
      getVGap: function getVGap() {
        return 20;
      },
      getHGap: function getHGap() {
        return 80;
      },
    },
  });
  {
    const data = {
      'name': 'Modeling Methods',
      'children': [
        {
          'name': 'Classification',
          'children': [
            {'name': 'Logistic regression'},
          ],
        },
        {
          'name': 'Consensus',
          'children': [
            {
              'name': 'Models diversity',
            },
          ],
        },
        {
          'name': 'Regression',
          'children': [
            {'name': 'Multiple linear regression'},
          ],
        },
        {'name': 'Partial least s861.16es'},
        {'name': 'Partial least s73.20es'},
        {'name': 'Partial least s60.65es'},
        {'name': 'Partial least s71.46es'},
        {'name': 'Partial least s742.94es'},
        {'name': 'Partial least s222.78es'},
        {'name': 'Partial least s536.85es'},
        {'name': 'Partial least s401.10es'},
        {'name': 'Partial least s443.97es'},
        {'name': 'Partial least s328.94es'},
        {'name': 'Partial least s366.62es'},
        {'name': 'Multi-layer fee307.66ward neural network'},
        {'name': 'Multi-layer ard neural network'},
        {'name': 'Multi-layer 4ward networnetwork'},
        {'name': 'Multi-layer 8ward networnetwork'},
        {'name': 'Multi-layer 3ward networnetwork'},
        {'name': 'Multi-layer 5ward networnetwork'},
        {'name': 'Multi-layer 6ward networnetwork'},
        {'name': 'Multi-layer 5ward networnetwork'},
        {'name': 'Multi-layer ward networetwork'},
        {'name': 'Multi-layer 1ward networnetwork'},
        {'name': 'Multi-layer 0ward networnetwork'},
        {'name': 'General 9neural network'},
        {'name': 'General 7neural network'},
        {'name': 'General 0neural network'},
        {'name': 'General 6neural network'},
        {'name': 'General neural network'},
        {'name': 'General 8neural network'},
        {'name': 'General 1neural network'},
        {'name': 'General 2neural network'},
        {'name': 'General 8neural network'},
        {'name': 'General 8neural network'},
        {'name': 'General 8neural network'},
        {'name': 'Support vector 578.19ession'},
        {'name': 'Support vector 539.71ession'},
        {'name': 'Support vector 801.61ession'},
        {'name': 'Support vector 235.65ession'},
        {'name': 'Support vector 82.11ession'},
        {'name': 'Support vector 906.64ession'},
        {'name': 'Support vector 575.25ession'},
        {'name': 'Support vector 864.48ession'},
        {'name': 'Support vector 981.61ession'},
        {'name': 'Support vector 530.36ession'},
        {'name': 'Support vector 442.99ession'},
      ],
    };
    G6.Util.traverseTree(data, function (item) {
      item.id = item.name;
    });
    graph.data(data);
    graph.render();
    graph.fitView();
  }
  if (typeof window !== 'undefined')
    window.onresize = () => {
      if (!graph || graph.get('destroyed')) return;
      if (!container || !container.scrollWidth || !container.scrollHeight) return;
      graph.changeSize(container.scrollWidth, container.scrollHeight);
    };

});
</script>
<template>
  <div ref="fishbone" class="fishbone w-800px h-800px"></div>
</template>
<style lang="less">
.fishbone {
  position: relative;
}

.w-800px {
  width: 800px;
}

.h-800px {
  height: 800px;
}
</style>
