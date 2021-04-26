function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        let maxAttempts = 1000;

        while(headsCount < 5 && attempts <= maxAttempts) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        if(attempts <= maxAttempts) {
            resolve('It took ${attempts} number of tries to flip five consecutive heads');
        } else {
            reject("The code never resolved");
        }
        }
    });
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );