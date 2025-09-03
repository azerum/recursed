Solutions to esoteric task I've once given to my friend who wanted to learn more about recusion and functional programming. The task is 
to implement all functions bellow (hopefully it's clear what they should do from their names):

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

The trick is that:

- All functions must be written as lambdas without code blocks: () => <expression>. Effectively,
all the code you write will be just expressions, without statements

- Global variables, mutations and side effects are not allowed

- The following syntaxes are prohibited: indexer access (array[0]), object spread ({ ...obj })
array spread ([...array])
