// array

let array=['string',1,true,['array1'],['array2'],['array3'],['array4']];
console.log(array[0]); // mesma coisa em c, mas se eu deixo só 'array' em console.log ele printa todos os indices

// forEach
array.forEach(function(item,index){console.log(item,index)});

array.push('novo item'); // add item no final do array
console.log(array);

array.pop(); // remove item do inicio
console.log(array);

array.shift(); //remove item do inicio
console.log(array);

console.log(array.indexOf(true));

array.splice(0,3);
console.log(array);

let novoarray = array.slice(0,3);
console.log(novoarray);

let object = {string: 'string',number:1, boolean: true, array: ['array'], objectinterno: {objectInterno: 'objeto interno'}};
console.log(object);

var string = object.string;
console.log(string);

var arrayinterno = object.array;
console.log(arrayinterno);

var {string, boolean, objectinterno} = object; // variavel recebe prorpiedades do objeto
console.log(string, boolean, objectinterno);