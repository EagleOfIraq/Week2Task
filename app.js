let fs = require('fs');
let underscore = require('underscore');
fs.readFile('flower.txt', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    let content = data.toString();
    let flowers = content.split('\n');


    process.stdout.write('1. Count the number of rows. \t Ans => ');
    let rows = flowers.length;
    console.log(rows);
    console.log('___________________________________________________\n');

    process.stdout.write('2. List the flower name that start with letter "S". \t Ans => ');
    let flowersStartsWithS = underscore.filter(flowers, (f) => {
        return f.startsWith('S');
    });
    console.log(flowersStartsWithS);
    console.log('___________________________________________________\n');


    process.stdout.write('3. Count the number of Flow that not start with letter "S". \t Ans => ');
    let flowersNotStartWithSCount = rows - flowersStartsWithS.length;
    console.log(flowersNotStartWithSCount);
    console.log('___________________________________________________\n');

    process.stdout.write('4. List the flower start with first letter of your name if your name start with "S" use second letter. \t Ans => ');
    let flowersStartsWithMyLetter = underscore.filter(flowers, (f) => {
        return f.startsWith('F');
    });
    console.log(flowersStartsWithMyLetter);
    console.log('___________________________________________________\n');

    process.stdout.write('5. List all the flower the name length is 5. \t Ans => ');
    let flowersWithLength5 = underscore.filter(flowers, (f) => {
        return f.length === 5;
    });
    console.log(flowersWithLength5);
    console.log('___________________________________________________\n');

});