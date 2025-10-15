function parseData(data){
    const papa = require('papaparse');
    papa.parse(data, {
        delimiter: '   ',
        header: false,
        complete: (results) => {
            //aoc1(group1, group2); Problem-1
            aoc2(group1, group2); // Problem-1

        }
    })
}
