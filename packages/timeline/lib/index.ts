import * as d3 from "d3";
import {_d3} from '@vis/utils';

class FishBone<TimelineData> {
    private originTreeData: TimelineData;
    private el: string;
    private svg: null;
    private tree: null;
    private nodeClickEvent: (e: MouseEvent, d: any) => any;
    private config: { rectHeight: number; dx: number; rectWidth: number; dy: number; width: number; height: number };

    constructor(options) {
        // 树的源数据
        this.originTreeData = options.originTreeData;
        // 宿主元素选择器
        this.el = options.el;
        this.nodeClickEvent = options.nodeClickEvent || function (e, d) {
            alert(d.name);
        };
        // 一些配置项
        this.config = {
            // 节点的横向距离
            dx: 200,
            // 节点的纵向距离
            dy: 170,
            // svg 的 viewBox 的宽度
            width: 0,
            // svg 的 viewBox 的高度
            height: 0,
            // 节点的矩形框宽度
            rectWidth: 170,
            // 节点的矩形框高度
            rectHeight: 70,
        };
        this.svg = null;
        this.tree = null;
        this.initChart();
    }

    initChart() {

        // 宿主元素的 d3 选择器对象
        let host = d3.select(this.el);
        // 宿主元素的 DOM，通过 node() 获取到其 DOM 元素对象
        let dom: HTMLElement = host.node() as HTMLElement;
        // 宿主元素的 DOMRect
        let domRect = dom.getBoundingClientRect()! as DOMRect;
        console.log(`domRect-->`, domRect);
        // svg 的宽度和高度
        this.config.width = domRect.width;
        this.config.height = domRect.height;

        let oldSvg = d3.select('svg');
        // 如果宿主元素中包含 svg 标签了，那么则删除这个标签，再重新生成一个
        if (!(oldSvg.empty())) {
            oldSvg.remove();
        }
        const svg = d3
            .create('svg')
            .attr('viewBox', () => {
                return [
                    -this.config.width / 2,
                    // 如果有父节点，则根节点居中，否则根节点上浮一段距离
                    -this.config.height / 3,
                    this.config.width,
                    this.config.height,
                ];
            })
            .style('user-select', 'none')
            .style('cursor', 'move');
        // 包括连接线和节点的总集合
        const gAll = svg.append('g').attr('id', 'all');
        svg.call(
            d3
                .zoom()
                .scaleExtent([0.5, 5])
                .on('zoom', (e) => {
                    gAll.attr('transform', () => {
                        return `translate(${e.transform.x},${e.transform.y}) scale(${e.transform.k})`;
                    });
                }),
        ).on('dblclick.zoom', null);// 取消默认的双击放大事件

        // 箭头 (下半部分)
        svg
            .append('marker')
            .attr('id', 'markerOfDown')
            .attr('markerUnits', 'userSpaceOnUse')
            .attr('viewBox', '0 -5 10 10') // 坐标系的区域
            .attr('refX', 55) // 箭头坐标
            .attr('refY', 0)
            .attr('markerWidth', 10) // 标识的大小
            .attr('markerHeight', 10)
            .attr('orient', '90') // 绘制方向，可设定为：auto（自动确认方向）和 角度值
            .attr('stroke-width', 2) // 箭头宽度
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5') // 箭头的路径
            .attr('fill', '#215af3'); // 箭头颜色

        // 箭头 (上半部分)
        svg
            .append('marker')
            .attr('id', 'markerOfUp')
            .attr('markerUnits', 'userSpaceOnUse')
            .attr('viewBox', '0 -5 10 10') // 坐标系的区域
            .attr('refX', -50) // 箭头坐标
            .attr('refY', 0)
            .attr('markerWidth', 10) // 标识的大小
            .attr('markerHeight', 10)
            .attr('orient', '90') // 绘制方向，可设定为：auto（自动确认方向）和 角度值
            .attr('stroke-width', 2) // 箭头宽度
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5') // 箭头的路径
            .attr('fill', '#215af3'); // 箭头颜色
        // 背景板

        // 外层的矩形框
        const bg = (kit) => kit
            .append('rect')
            .attr('rx', 5)
            .attr('stroke-width', 1)
            .on('click', (e, d) => {
                this.nodeClickEvent.bind(this)(e, d);
            });

        //  放置刻度尺

        const dashLine = (kit) => _d3(kit)
            .attr('stroke-dasharray', '5,5')
            .attr('stroke-width', 1)
            .width("12")
            .append('g')
            .attr('transform',)
        ;
        dashLine(bg(gAll));
        gAll.append("rect").attr("x", 0).attr("y", 0).attr("width", 12).attr("height", 14);
        host.append(() => svg.node());
    }

    drawChart() {


    }
}

export function createTimeline() {

    new FishBone({
        el: '#fishbone',
        data: [
            {
                timestamp: new Date(),
            }
        ]
    });

}
