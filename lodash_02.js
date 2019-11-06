const ut = require('./utils');
const _ = require('lodash');

let array; // тут будут массивы из csv-файлов

// array = ut.csv_to_json('curators.csv');
// console.log(array);




// DELETE
// let nameCurator = 'Ухова';

// ver 1
// for (let i = 0; i<array.length; i++) {
// 	if (array[i].nameCur == nameCurator) {
// 		array.splice(i, 1);
// 		break;
// 	}
// }
// console.log(array);

// var 2
// index = _.findIndex(array, obj => obj.nameCur == nameCurator);
// _.pullAt(array, index);
// console.log(array);




// проблема - исходный массив изменяется!
// либо читать заново либо копировать...
array = ut.csv_to_json('students.csv');

// три способа копирования массивов объектов
// let students = array; // --
// let students = JSON.parse(JSON.stringify(array)) // +-
let students = _.cloneDeep(array); // ++
// console.log(students);

// let womens = _.remove(students, obj => obj.sex == false);
// console.log(womens);
// console.log(students);
// console.log(array);




// в функциональном стиле:

// ex_1
// _
// 	.remove(students, obj => obj.sex == false)
// 	.sort((a,b)=>b.age-a.age)
// 	.map(obj => console.log(obj.nameSt));

// ex_2
// _
// 	.orderBy(students, ['age','nameSt'], ['desc', 'asc'])
// 	.map(obj => console.log([obj.age,obj.nameSt].join('\t')));


// ex_3
// _.reverse(
// 	_.sortBy(
// 		_.remove(
// 			students, obj => obj.sex == false
// 		), obj => obj.age
// 	)
// ).map(obj => console.log(obj.nameSt));



// SELECT
students = ut.csv_to_json('students.csv');
merge = ut.csv_to_json('merge.csv');
hobby = ut.csv_to_json('hobby.csv');


st = 'Сидов'; // выбрать все хобби студента
idSt = _.find(students, obj => obj.nameSt == st).id;
arrayFromMerge = _.filter(merge, ['idStudent', idSt]);
arrayIdHobby = _.map(arrayFromMerge, obj => obj.idHobby);
arrayHobby = _.filter(hobby, obj=>arrayIdHobby.includes(obj.id));
console.log(st, ':', arrayHobby.map(obj=>obj.name).join(', '));

// для контроля
console.log(idSt);
console.log(arrayFromMerge);
console.log(arrayIdHobby);
console.log(arrayHobby);
