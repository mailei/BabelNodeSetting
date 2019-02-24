
// import文は、babelでコンパイルしないと動かない
// requireとimport文の違い

var classHoge = require('./class');
// import classHoge from './class';

 classHoge.hoge();
console.log(classHoge)