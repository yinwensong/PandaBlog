import Vue from 'vue';

export default {
    install(Vue) {
        Vue.directive('canvas', {
            inserted: function (el) {
                // 调用
                // start(el);
            }
        })
    }
}
let ctx;
let config = {
    vx: 4,	//小球x轴速度,正为右，负为左
    vy: 4,	//小球y轴速度
    height: 2,	//小球高宽，其实为正方形，所以不宜太大
    width: 2,
    count: 200,		//点个数
    color: "121, 162, 185", 	//点颜色
    stroke: "130,255,255", 		//线条颜色
    dist: 6000, 	//点吸附距离
    e_dist: 20000, 	//鼠标吸附加速距离
    max_conn: 10 	//点到点最大连接数
}

function init(element) {
    var canvas = document.createElement('canvas');
    if (!canvas.getContext) return;
    ctx = canvas.getContext('2d');
    canvasWidth = element.offsetWidth;
    canvasHeight = element.offsetHeight;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    element.appendChild(canvas);
}
function start(el) {
    console.log('canvas')
    if (!ctx) return init(start, el);
    // init(el);
}