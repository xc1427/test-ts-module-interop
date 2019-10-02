import * as calc from './calc';
console.log('calc(1, 2):', calc.default(1,2) );
// console.log('calc(1, 2):', calc(1,2) ); // this will error since calc is no longer a function, even in emit result