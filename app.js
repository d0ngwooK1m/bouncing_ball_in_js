import { Ball } from './ball.js';
import { Block } from './block.js';

class App {
    // js canvas project from cmiscm(jongmin kim)
    constructor() {
        this.canvas = document.createElement("canvas");
        // canvas를 조종 가능하게 해주는 메소드 (canvas 태그에서만 사용 가능)
        this.ctx = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.block = new Block(700, 30, 300, 450);

        // bind(this) => this를 app class instance로 고정하기 위함
        window.requestAnimationFrame(this.animate.bind(this));
    }

    // 1. stageWidth, stageHeight property를 화면 크기로 지정한다.
    // 2. canvas width, height를 stageWidth, stageHeight의 2배로 지정한다. (길이 2배, 픽셀 2배)
    // 3. scale로 그려지는 것들의 크기를 가로, 세로 2배로 키운다. (canvas가 늘어난 만큼 크게 그려지도록 함)
    // 4. styles.css에서 canvas tag의 크기를 100%로 설정함으로서 크기는 화면 크기지만 픽셀은 기존 픽셀의 4배 밀도가 되도록 하였음.
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2, 2);
    }

    animate(_) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
    }
}

window.onload = () => {
    new App();
}