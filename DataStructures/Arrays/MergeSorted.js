function mergeSortedArrays(arr1, arr2){
    const mergedArray = [];
    let i = 1;
    let j = 1;
    let array1Item = arr1[0];
    let array2Item = arr2[0];

    //Check Input
    if(arr1.length === 0){
        return arr2;
    }
    if(arr2.length === 0){
        return arr1;
    }

    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item)
            array1Item = arr1[i]
            i++
        }else{
            mergedArray.push(array2Item)
            array2Item = arr2[j];
            j++
        }
    }


    return mergedArray
}

console.log(mergeSortedArrays([31], [4,6,30]));
//[0,3,4,4,6,30,31]