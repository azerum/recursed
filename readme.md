Here's the list of functions:
- min(array)
- max(array)
- sum(array)
- product(array)
- average(array)
- removeAt(array, index)
- insertAfter(array, index, value)
- concat(arrayA, arrayB)
- indexOf(array, value)
- reverse(array)
- sort(array)

The esoteric task is to implement each function with the following constraints:
- You cannot use mutable variables and loops, and cannot mutate any values. 
  Each function must be pure

- You cannot use any built-in JavaScript functions. The only functions you can
  use are `head()`, `tail()`, `prepend()` defined at the top of the file, 
  and all functions that you write yourself

- You cannot use JS spread syntax (`[...array]` or `{ ...obj }`) and indexed access
  to arrays (array[0]). You are also not allowed to use any object propery access 
  (`obj.prop` or `obj['prop']`) except `array.length`

- Each function must be a lambda without block body. That is, it must just return 
  some expression
