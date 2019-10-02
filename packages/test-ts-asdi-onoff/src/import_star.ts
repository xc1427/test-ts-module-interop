// allowSyntheticDefaultImports has nothing to do with * import, `import *` works as long as exported part is an object.
import * as calc from './calc';
console.log('calc(1, 2):', calc(1, 2));