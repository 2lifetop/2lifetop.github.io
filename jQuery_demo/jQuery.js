window.jQuery = function(selector){
    const elements = document.querySelectorAll(selector)
    //api 可以操作elements
    return {
        //闭包：函数访问外部变量
        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this
        }
    }  
}