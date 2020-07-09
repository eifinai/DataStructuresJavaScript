const escien = (arr) =>{
    for(let i = 0;i<arr.length; i++){
        if(arr[i] === 100){
            return true
        }
        for(let j = 0;j<arr.length;j++){
            if(arr[i]+arr[j]=== 100|| arr[j] === 100){
                return true
            }
        }
        
    }
    return false
}

const arr = [125,154,2,36,15,48,963,154,100]
console.log(escien(arr));