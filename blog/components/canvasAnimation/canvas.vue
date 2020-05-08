<template>
  <canvas ref="myCanvas" id="myCanvas"></canvas>
</template>
<script>
export default {
  name:'myCanvas',
  mounted() {
    let myCanvas = this.$refs.myCanvas;
    let winW = window.innerWidth;
    let winH = window.innerHeight;
    myCanvas.width = winW;
    myCanvas.height = winH;
    this.canvasInit();
  },
  methods: {
    canvasInit() {
      let config = {
        vx: 4, //小球x轴速度,正为右，负为左
        vy: 4, //小球y轴速度
        height: 2, //小球高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 200, //点个数
        color: "121, 162, 185", //点颜色
        stroke: "130,255,255", //线条颜色
        dist: 6000, //点吸附距离
        e_dist: 20000, //鼠标吸附加速距离
        max_conn: 10, //点到点最大连接数,
        mouse: "",
        points: []
      };
      let myCanvas = this.$refs.myCanvas;
      config.element = myCanvas;
      window.onresize = function() {
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        myCanvas.width = winW;
        myCanvas.height = winH;
      };
      myCanvas.onmousemove = function(e) {
        var event = e || window.event;
        config.mouse = {
          x: event.clientX,
          y: event.clientY
        };
      };
      myCanvas.onmouseleave = function() {
        config.mouse = undefined;
      };
      setInterval(() => {
        this.drawPoint(config);
      }, 40);
    },
    // 画点
    drawPoint(config) {
      let ctx = config.element.getContext("2d");
      let width = config.element.width;
      let height = config.element.height;
      let point;
      let len = config.count;
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.fillStyle = "rgb(" + config.color + ")";
      for (var i = 0; i < len; i++) {
        if (config.points.length != config.count) {
          // 初始化所有点
          point = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            vx: config.vx / 2 - Math.random() * config.vx,
            vy: config.vy / 2 - Math.random() * config.vy
          };
        } else {
          // 处理球的速度和位置，并且做边界处理
          point = this.borderPoint(config.points[i], config);
        }
        ctx.fillRect(
          point.x - config.width / 2,
          point.y - config.height / 2,
          config.width,
          config.height
        );
        config.points[i] = point;
      }
      this.drawLine(config);
      ctx.closePath();
    },
    // 边界处理
    borderPoint(point, canvas) {
      var p = point;
      if (point.x <= 0 || point.x >= canvas.element.width) {
        p.vx = -p.vx;
        p.x += p.vx;
      } else if (point.y <= 0 || point.y >= canvas.element.height) {
        p.vy = -p.vy;
        p.y += p.vy;
      } else {
        p = {
          x: p.x + p.vx,
          y: p.y + p.vy,
          vx: p.vx,
          vy: p.vy
        };
      }
      return p;
    },
    // 画线
    drawLine(config) {
      let context = config.element.getContext("2d");
      let dist;
      let len = config.count;
      let mouse = config.mouse;
      for (var i = 0; i < len; i++) {
        // 初始化最大连接数
        config.points[i].max_conn = 0;
        // point to point
        for (var j = 0; j < len; j++) {
          if (i != j) {
            dist =
              Math.round(config.points[i].x - config.points[j].x) *
                Math.round(config.points[i].x - config.points[j].x) +
              Math.round(config.points[i].y - config.points[j].y) *
                Math.round(config.points[i].y - config.points[j].y);
            // 两点距离小于吸附距离，而且小于最大连接数，则画线
            if (
              dist <= config.dist &&
              config.points[i].max_conn < config.max_conn
            ) {
              config.points[i].max_conn++;
              // 距离越远，线条越细，而且越透明
              context.lineWidth = 0.5 - dist / config.dist;
              context.strokeStyle =
                "rgba(" + config.stroke + "," + (1 - dist / config.dist) + ")";
              context.beginPath();
              context.moveTo(config.points[i].x, config.points[i].y);
              context.lineTo(config.points[j].x, config.points[j].y);
              context.stroke();
            }
          }
        }
        // 如果鼠标进入画布
        // point to mouse
        if (mouse) {
          dist =
            Math.round(config.points[i].x - mouse.x) *
              Math.round(config.points[i].x - mouse.x) +
            Math.round(config.points[i].y - mouse.y) *
              Math.round(config.points[i].y - mouse.y);

          // 遇到鼠标吸附距离时加速，直接改变point的x，y值达到加速效果
          if (dist > config.dist && dist <= config.e_dist) {
            config.points[i].x =
              config.points[i].x + (mouse.x - config.points[i].x) / 20;
            config.points[i].y =
              config.points[i].y + (mouse.y - config.points[i].y) / 20;
          }
          if (dist <= config.e_dist) {
            context.lineWidth = 1;
            context.strokeStyle =
              "rgba(" + config.stroke + "," + (1 - dist / config.e_dist) + ")";
            context.beginPath();
            context.moveTo(config.points[i].x, config.points[i].y);
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
          }
        }
      }
    }
  }
};
</script>
<style scoped>
#myCanvas {
  background-color: #2d2d2d;
  position: fixed;
}
</style>