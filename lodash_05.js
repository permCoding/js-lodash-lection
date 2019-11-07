const ut = require('./utils');
const _ = require('lodash');


// SELECT
students = ut.csv_to_json('students.csv');
merge = ut.csv_to_json('merge.csv');
hobby = ut.csv_to_json('hobby.csv');


name = 'Сидов'; // выбрать все хобби студента
idSt = _.find(students, obj => obj.nameSt == name).id;
arrayFromMerge = _.filter(merge, ['idStudent', idSt]);
arrayIdHobby = _.map(arrayFromMerge, obj => obj.idHobby);
arrayHobby = _.filter(hobby, obj=>arrayIdHobby.includes(obj.id));
console.log(name, ':', arrayHobby.map(obj=>obj.name).join(', '));

// вывод для контроля
console.log(idSt);
console.log(arrayFromMerge);
console.log(arrayIdHobby);
console.log(arrayHobby);
