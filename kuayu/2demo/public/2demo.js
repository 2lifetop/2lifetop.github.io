// const request = new XMLHttpRequest();
// request.open("get",'http://qq.com:8888/friends.json')
// request.onreadystatechange=()=>{
//     if(request.readyState===4 && request.status<400){
//         console.log(request.response)
//     }
// }
// request.send();
function jsonp(url){
    return new Promise((resolve,reject)=>{
    const random="2demoJSONPCallbackName"+Math.random()
    window[random]=(data)=>{
        resolve(data)
    }; 
    const script=document.createElement("script")
    script.src=`${url}?callback=${random}`
    script.onload=()=>{
        script.remove()
    };
    script.onerror= ()=>{
        reject();
    };    
    document.body.appendChild(script)
    });
}
jsonp('http://qq.com:8888/friends.js')
    .then((data)=>{
        console.log(data)
    })

