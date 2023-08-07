import Timeline from './lib/index.vue';

Timeline.install = function (app, componentName) {
    app.component(componentName ?? 'Timeline', Timeline);
};

export default Timeline;
