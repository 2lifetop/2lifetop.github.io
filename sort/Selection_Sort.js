//选择排序
let sort = (numbers) =>{
    for (let i=0; i<numbers.length-1;i++){
        console.log(`----`)
        console.log(`i:${i}`)
        let index = minIndex(numbers.slice(i))+i
        console.log(`index:${index}`)
        console.log(`min:${numbers[index]}`)
        if(index!==i){
            swap(numbers,index,i)
            console.log(`swap ${index}:${i}`)
            console.log(numbers)
        }
    }
    return numbers
}
let swap = (Array,i,j)=>{
    let temp =Array[i]
    Array[i]=Array[j]
    Array[j]=temp
}
let minIndex =(numbers)=>{
    let index = 0
    for (let i = 1 ;i<numbers.length;i++){
        if(numbers[i]<numbers[index]){
            index = i
        }
    }
    return index
}