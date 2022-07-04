// This is our main function
function fizzbuzz() {
    
    // Put your code here...
    for (let i = 1; i <= 100; i++) {
        // Multiple of 11
        if (i % 11 == 0) {

            // Multiple of 13?
            if (i % 13 == 0) {
                console.log("FezzBong");
            } else {
                console.log("Bong");
            }

        // Multiple of 5
        } else if (i % 5 == 0) {
            
            // Also multiple of 3?
            if (i % 3 == 0) {
                
                // Also multiple of 7?
                if (i % 7 == 0) {

                    // Also multiple of 13?
                    if (i % 13 == 0) {
                        console.log("FizzFezzBuzzBang");
                    } else {
                        console.log("FizzBuzzBang");
                    }
                }

                // Also multiple of 13 but not multiple of 7?
                if (i % 13 == 0) {
                    console.log("FizzFezzBuzz");
                } else {
                    console.log("FizzBuzz");
                }
            // Also multiple of 13?
            } else if (i % 13 == 0) {
                console.log("FezzBuzz");
            // Multiple of 5 only
            } else {
                console.log("Buzz");
            }

        // Multiple of 3?
        } else if (i % 3 == 0) {
            
            // Multiple of 3 and 7
            if (i % 7 == 0) {

                // Multiple of 3, 7, 13?
                if (i % 13 == 0) {
                    console.log("FizzFezzBang");
                } else {
                    console.log("FizzBang");
                }
            }

            // Multiple of 3 and 
            if (i % 13 == 0) {
                console.log("FizzFezz");
            } else {
                console.log("Fizz");
            }

        } else if (i % 7 == 0) {
            if (i % 13 == 0) {
                console.log("FezzBang");
            } else {
                console.log("Bang");
            }
        } else if (i % 13 == 0) {
            console.log("Fezz");
        } else {
            console.log(i);
        }
    }
}

// Now, we run the main function:
fizzbuzz();

