let html=document.querySelector("#html");
let style=document.querySelector("#style");
let string = `
/*你好，这是一个八卦图演示
*现在开始添加样式了
*以下为样式文件
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦生两仪
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 阴阳相生 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let n = 0
let string2=''
// html.innerHTML = string.substring(0,n);
// string =string.replace(/\n/g,'<br>'); 
let step = () => {
    setTimeout(()=>{
        n = n + 1
        //简化写法 不处理空格
        // string2 += (string[n]==='\n'?'<br>':string[n]);
        //原写法
        if (string[n]==='\n') { 
            string2 = string2 + '<br>' //如果有换行符
        } else if (string[n]===' '){
            string2 = string2 + '&nbsp'
        }else {
            string2 +=string[n]
        };
        if (n<string.length){           //打印HTML内容     
      
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n); //添加样式
        window.scrollTo(0,999999);
        html.scrollTo(0,999999);
        step();
        } ;
        
    }, 0);

};
step();
