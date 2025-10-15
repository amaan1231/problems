function aoc2(gr1, gr2){ 
    let sum = 0;
    const data = new Map();
    
    gr1.forEach(val => data.set(val, 0))
    gr2.forEach(val => data.set(val, data.get(val) + 1))
    gr1.forEach(val => sum += data.get(val) * val)
    console.log(data)
    console.log(sum)
}

module.exports = aoc2;

