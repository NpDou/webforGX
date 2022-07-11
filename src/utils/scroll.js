// 利用滚动条滚动的列表轮播 yy.s
export function animationUseScroll(element, options) {
    class Scroll {
        /**
         * @param element 运行的DOM
         * @param options 参数
         * {  height:90, // 每次滚动的距离 px
         *    delay: 4000, // 每次滚动间隔事件 ms
         *  }
         */
        constructor(element, options) {
            const defaultOption = {
                height: 90,
                delay: 4000
            }
            this.options = Object.assign(defaultOption, options)
            this.element = element
            this.interval = null // 定时器对象
            this.toRoll() // 开启滚动
            this.mouseIn() //  绑定鼠标移入
            this.mouseOut() //  绑定鼠标移出
        }
        // 列表滚动
        toRoll() {
            // 拿到表格中承载数据的div元素
            const divData = this.element
            // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果
            this.interval = setInterval(() => {
                // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
                if (divData.clientHeight + divData.scrollTop >= divData.scrollHeight -15) {
                    // 重置table距离顶部距离
                    const subInterval1 = setInterval(() => {
                        if (divData.scrollTop === 0) {
                        // 滚动到下一行 时清除定时器
                            clearInterval(subInterval1)
                        }
                        // 元素自增距离顶部1像素
                        divData.scrollTop -= 10
                    }, 10)
                } else {
                // 设置滚动过度动画
                    const subInterval = setInterval(() => {
                        if ((divData.scrollTop !==0 && divData.scrollTop % this.options.height === 0) || divData.clientHeight + divData.scrollTop >= divData.scrollHeight) {
                        // 滚动到下一行 时清除定时器
                            clearInterval(subInterval)
                        }
                        // 元素自增距离顶部1像素
                        divData.scrollTop += 1
                    }, 10)
                }
            }, this.options.delay)
        }
        // 鼠标移入
        mouseIn() {
            this.element.addEventListener('mouseenter', () => {
                clearInterval(this.interval)
            }, false)
        }
        // 鼠标移出
        mouseOut() {
            this.element.addEventListener('mouseleave', () => {
                this.toRoll()
            }, false)
        }
    }
    return new Scroll(element, options)
}