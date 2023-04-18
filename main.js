const head = ([h, ..._]) => h
const tail = ([_, ...rest]) => rest
const prepend = (a, list) => [a, ...list]

const reduceLeftAux = (f, result, list) =>
    list.length === 0
        ? result
        : reduceLeftAux(f, f(result, head(list)), tail(list))

const reduceLeft = (f, list) => 
    list.length === 0
        ? undefined
        : reduceLeftAux(f, head(list), tail(list))

const length = list => reduceLeftAux((a, _b) => a + 1, 0, list)

const min = list => reduceLeft((a, b) => a < b ? a : b, list)
const max = list => reduceLeft((a, b) => a > b ? a : b, list)
const sum = list => reduceLeft((a, b) => a + b, list)
const product = list => reduceLeft((a, b) => a * b, list)
const average = list => sum(list) / list.length

const removeAt = (a, index) =>
    index < 0 || a.length === 0
        ? undefined
        : index === 0
            ? tail(a)
            : prepend(head(a), removeAt(tail(a), index - 1))

const insertAfter = (list, index, x) =>
    index < 0 || list.length === 0
        ? list
        : index === 0
            ? prepend(head(list), prepend(x, tail(list)))
            : prepend(head(list), insertAfter(tail(list), index - 1, x))

const concat = (a, b) =>
    a.length === 0
        ? b
        : prepend(head(a), concat(tail(a), b))

const letIn = (...args) => f => f(...args)

const indexOf = (list, x) =>
    list.length === 0
        ? undefined
        : head(list) === x
            ? 0
            : letIn(indexOf(tail(list), x))(
                i => i === undefined ? undefined : 1 + i
            )

// Tail-call friendly version

const indexOf2Aux = (list, x, headIndex) =>
    list.length === 0
        ? undefined
        : head(list) === x
            ? headIndex
            : indexOf2Aux(tail(list), x, headIndex + 1) 

const indexOf2 = (list, x) => indexOf2Aux(list, x, 0)

const reverse = list =>
    list.length === 0
        ? list
        : concat(reverse(tail(list)), [head(list)])

const reverse2 = list => reduceLeftAux(
    (result, a) => prepend(a, result),
    [],
    list
)

// Bubble-like sort using the fact that
// sort(prepend(x, b)) = insertSorted(x, sort(b))

const insertSorted = (x, list) =>
    list.length === 0
        ? [x]
        : x <= head(list)
            ? prepend(x, list)
            : prepend(head(list), insertSorted(x, tail(list)))

const sort = list => 
    list.length === 0
        ? list
        : insertSorted(head(list), sort(tail(list)))

const filter = (f, list) =>
    list.length === 0
        ? list
        : f(head(list))
            ? prepend(head(list), filter(f, tail(list)))
            : filter(f, tail(list))

// Quick sort (thanks, Tony)
const qsort = list => 
    list.length === 0
        ? list
        : letIn(head(list))(x => 
            letIn(
                filter(a => a < x, list),
                filter(a => a === x, list),
                filter(a => a > x, list)
            )((
                lessThan,
                equalTo,
                greaterThan
            ) => 
                concat(
                    concat(qsort(lessThan), equalTo),
                    qsort(greaterThan)
                )
            )
        )
