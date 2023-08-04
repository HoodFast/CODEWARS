function XO(str) {
    if(!str.length){return false}

    let temp = str.toUpperCase().split('')
    console.log(temp)
    if(temp.filter(i=>i==='O').length===0 || temp.filter(i=>i==='X').length===0){
        return false
    }
    return temp.filter(i=>i==='X').length === temp.filter(i=>i==='O').length
}