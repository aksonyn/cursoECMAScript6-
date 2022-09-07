const anotherFunction = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('hey!!!');
        }else{
            reject('Whoooooops!');
        }
    })
}

anotherFunction()
 .then(Response => console.log(Response))
 .catch(err=>console.log(err));