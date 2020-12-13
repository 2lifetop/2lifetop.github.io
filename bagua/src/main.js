let html=document.querySelector("#html");
let style=document.querySelector("#style");
let string = `
/*你好，这是一个八卦图演示
*现在开始添加样式了
*以下为样式文件
*/
#div1{
    position: absolute;
    display: block;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    height: 40vw;
    width: 40vw;
    top: 5vh;
    transform: translateX(90%);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
#div1::before{
    position: relative;
    content: '';
    width: 20vw;
    height: 20vw;
    top: 0;
    right: 0;
    transform: translateX(50%);
    border-radius: 50%;
    display: block;
  
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    position: relative;
    content: '';
    width: 20vw;
    height: 20vw;
    top:0;
    left: 0;
    transform: translateX(50%);
    display: block;
    border-radius: 50%;
  
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
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
