const request = new XMLHttpRequest();
request.open("get",'/friends.json')
request.onreadystatechange=()=>{
    if(request.readyState===4 && request.status<400){
        console.log(request.response)
    }
}
request.send();