// This is our main function
function fizzbuzz() {
    
    // Put your code here...
    for (let i = 1; i <= 100; i++) {
        let arr = new Array();
        
        // Multiple of 11
        if (i % 11 == 0) {
            console.log("Bong");
            continue;
        } 
        
        // Multiple of 3
        if (i % 3 == 0) {
            arr = arr.concat("Fizz".split(''));
        }

        // Multiple of 5
        if (i % 5 == 0) {
            arr = arr.concat("Buzz".split(''));
        }

        // Multiple of 7
        if (i % 7 == 0) {
            arr = arr.concat("Bang".split(''));
        }

        // Multiple of 13
        if (i % 13 == 0) {
            const j = arr.indexOf('B');

            if (j != -1) {
                arr.splice(j, 0, 'F', 'e', 'z', 'z');
            } else {
                arr = arr.concat("Fezz".split(''));
            }
        }

        // Check if i is multiple of anything
        if (arr.length == 0) {
            console.log(i);
        } else {
            console.log(arr.join(''));
        }
    }
}

// Now, we run the main function:
fizzbuzz();

