// This is our main function
function fizzbuzz() {
    
    // Put your code here...
    for (let i = 1; i <= 100; i++) {
        if (i % 11 == 0) {

            // Also multiple of 13
            if (i % 13 == 0) {
                console.log("FezzBong");
            } else {
                console.log("Bong");
            }
        } else if (i % 5 == 0) {
            
            if (i % 3 == 0) {
                if (i % 13 == 0) {
                    console.log("FizzFezzBuzz");
                } else {
                    console.log("FizzBuzz");
                }
                
                if (i % 7 == 0) {
                    if (i % 13 == 0) {
                        console.log("FizzFezzBuzzBang");
                    } else {
                        console.log("FizzBuzzBang");
                    }
                }
            } 
            
            if (i % 13 == 0) {
                console.log("FezzBuzz");
            } else {
                console.log("Buzz");
            }

        } else if (i % 3 == 0) {
            if (i % 7 == 0) {
                if (i % 13 == 0) {
                    console.log("FizzFezzBang");
                } else {
                    console.log("FizzBang");
                }
            }

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

