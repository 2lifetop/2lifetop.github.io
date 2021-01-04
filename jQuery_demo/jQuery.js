window.jQuery = function(selectorOrArray){
    let elements
    if (typeof selectorOrArray === 'string'){
         elements = document.querySelectorAll(selectorOrArray)
    }else if (selectorOrArray instanceof Array){
         elements = selectorOrArray
    }
    
    //api 可以操作elements
    return {
        find(selector){
            let array = []
            for(let i=0;i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2) 
            }
            const newApi = jQuery(array)
            return newApi
        },
        //闭包：函数访问外部变量
        addClass(className){
            for(let i=0;i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this
        },
        
    }  
}