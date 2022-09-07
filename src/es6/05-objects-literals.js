//enahced object literals
function newUser(user,age,country,uId){
    return {
        user,
        age,
        country,
        id: uId
    };
}

console.log(newUser('aksonyn',26, 'VE', 1));
