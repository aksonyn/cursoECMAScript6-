const regex = /\b(Apple)+\b/g;
const fruit='Apple lorem ipsu dolor sit Apple lorem ipsum dolor sit amet';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}