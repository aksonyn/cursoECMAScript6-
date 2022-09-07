function newUser(name, age, country){
    var name= name || 'Oscar';
    var age= age || 18;
    var country= country || 'Venezuela';
    console.log(name, age, country);
}

newUser();
newUser('Ramses',26,'Finland');

function newAdmin(name='Aksonyn',age=26,country= 'VE'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Evelyn',37,'FN');