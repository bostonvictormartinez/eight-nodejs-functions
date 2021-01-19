const values = [1, 60, 34, 30, 20, 5]

const lessThan20 = (val)  => {
    return val < 20
}

const valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20)
