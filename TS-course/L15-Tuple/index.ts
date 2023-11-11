/**
 * Data Types 
 * - Tuple
 */


let articles : readonly [number,string,boolean] = [22,"Title-one",false]

articles = [11,"title-two",true]
// articles.push(100)
console.log(articles);

const[id,title,published]=articles;
