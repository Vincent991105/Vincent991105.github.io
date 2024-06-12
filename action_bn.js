window.addEventListener('scroll', (e) => {
    // 获取页面高度的两倍，作为不粘滞的偏移量
    let noStickyOffset = document.documentElement.clientHeight * 2;
    
    // 计算滚动比例
    let scrolled = document.documentElement.scrollTop / noStickyOffset;
    
    // 选择红色元素
    let redElement = document.querySelector('.red');
    let orangeElement = document.querySelector('.orange');
    let yellowElement = document.querySelector('.yellow');
    let greenElement = document.querySelector('.green');
    let blueElement = document.querySelector('.blue');
    let purpleElement = document.querySelector('.purple');
    
    // 设置红色元素的 clip-path 样式
    redElement.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`;
    orangeElement.style.clipPath = `inset(${((1 - scrolled) / 0.5) * 100}% 0px 0px 0px)`;
    yellowElement.style.clipPath = `inset(${((1.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`;
    greenElement.style.clipPath = `inset(${((2 - scrolled) / 0.5) * 100}% 0px 0px 0px)`;
    blueElement.style.clipPath = `inset(${((2.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`;
    purpleElement.style.clipPath = `inset(${((3 - scrolled) / 0.5) * 100}% 0px 0px 0px)`;
    
    
    console.log(scrolled);
    
    // 根据滚动比例添加或移除 'no-sticky' 类
    let stickyElement = document.querySelector('.action_bn_sticky');
    if (scrolled > 3) {
        stickyElement.classList.add('no-sticky');
    } else {
        stickyElement.classList.remove('no-sticky');
    }
});