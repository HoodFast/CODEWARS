function isIsogram(str){
    let a = str.toUpperCase().split('')
    for(let i=0;i<a.length;i++){
        if(a.indexOf(a[i],i+1) >=0){
            return false
        }
    }
    return true
}