//归并排序
let mergeSort = arr =>{
    let k = arr.length
    console.log('----')
    console.log(`arr:${arr.length}`)
    console.log(`k:${k}`)
    if(k===1){return arr}
    let left =arr.slice(0,Math.floor(k/2))
    let right = arr.slice(Math.floor(k/2))
    return merge(mergeSort(left),mergeSort(right))   
}
let merge = (a,b) =>{
    if(a.length === 0)return b
    console.log(`b:${b}`)
    console.log(`a.length:${a.length}`)
    if(b.length === 0)return a
    console.log(`a:${a}`)
    console.log(`b.length:${b.length}`)
    return a[0]>b[0]?
        [b[0]].concat(merge(a, b.slice(1))):
        [a[0]].concat(merge(a.slice(1),b))
        
}