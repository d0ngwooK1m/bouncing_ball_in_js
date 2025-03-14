class App {
    // js canvas project from cmiscm(jongmin kim)
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();
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

    animate(t) {

    }
}

window.onload = () => {
    new App();
}