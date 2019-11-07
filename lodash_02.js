const ut = require('./utils');
const _ = require('lodash');

let array = ut.csv_to_json('curators.csv');
console.log(array);


// DELETE
let nameCurator = 'Ухова';

// ver 1
// for (let i = 0; i<array.length; i++) {
// 	if (array[i].nameCur == nameCurator) {
// 		array.splice(i, 1);
// 		break;
// 	}
// }
// console.log(array);

// ver 2
index = _.findIndex(array, obj => obj.nameCur == nameCurator);
_.pullAt(array, index);
console.log(array);

// есть проблема - исходный массив изменяется!
