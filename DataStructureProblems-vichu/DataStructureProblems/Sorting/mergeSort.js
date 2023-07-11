
const array = [1,5,234,2,34,45,42,899,7,9,12,4,6];

console.log(mergeshKumar(array))

// function mergeSort(array){
//     if(array.length <= 1) return array
//     let middlePosition = Math.ceil((array.length-1)/2)
//     let firstHalf = array.slice(0,middlePosition)
//     let lastHalf = array.slice(middlePosition,array.length)
//     return join(mergeSort(firstHalf),mergeSort(lastHalf))
// }

// function join(firstHalf,lastHalf){
//     let newArray = [];
//     let i =0
//     let j =0

//     while(i < firstHalf.length && j < lastHalf.length){
//         if(firstHalf[i] < lastHalf[j]) newArray.push(firstHalf[i++])
//         else newArray.push(lastHalf[j++])
//     }

//     while(i < firstHalf.length) newArray.push(firstHalf[i++])
//     while(j < lastHalf.length) newArray.push(lastHalf[j++])

//     return newArray
// }




function mergeshKumar(array){
    if(array.length <= 1) return array
    let medianPoli = Math.ceil((array.length-1)/2);
    let righteshKumar = array.slice(0,medianPoli)
    let lefteshKumar = array.slice(medianPoli,array.length)
       
    return join(mergeshKumar(righteshKumar),mergeshKumar(lefteshKumar))
}

function join(righteshKumar,lefteshKumar){
    let i =0;
    let j =0
    let newArray = []
    while(i < righteshKumar.length && j < lefteshKumar.length){
        if(righteshKumar[i]< lefteshKumar[j]) newArray.push(righteshKumar[i++])
        else newArray.push(lefteshKumar[j++])
    }

    while(i<righteshKumar.length) newArray.push(righteshKumar[i++])
    while(j<lefteshKumar.length) newArray.push(lefteshKumar[j++])
    return newArray
}