const user = {username: 'aksonyn', age: 26, country: 'VE'};

const {username, ...values} = user;
console.log(username);
console.log(values);