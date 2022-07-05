// This is our main function
function fizzbuzz() {

    // Put your code here...
    for (let i = 1; i <= 100; i++) {

        if (i % 11 == 0) {

            if (i % 13 == 0) {

                // Multiple of 11, 13, 17
                if (i % 17 == 0) {
                    console.log("BongFezz")

                // Multiple of 11 and 13, not multiple of 17
                } else {
                    console.log("FezzBong");
                }
            
            // Multiple of 11 only
            } else {
                console.log("Bong");
            }

        } else if (i % 5 == 0) {

            if (i % 3 == 0) {
                
                // Multiple of 5, 3, and 7
                if (i % 7 == 0) {
                    
                    // Multiple of 5, 3, 7, 13
                    if (i % 13 == 0) {

                        // Multiple of 5, 3, 7, 13, 17
                        if (i % 17 == 0) {
                            console.log("BangBuzzFezzFizz");
                        
                        // Multiple of 5, 3, 7, 13, not multiple of 17
                        } else {
                            console.log("FizzFezzBuzzBang");
                        }
                    
                    // Multiple of 5 and 3
                    } else {

                        // Multiple of 5, 3, 17
                        if (i % 17 == 0) {
                            console.log("BangBuzzFizz");
                        
                        // Multiple of 5, 3, not multiple of 17
                        } else {
                            console.log("FizzBuzzBang");
                        }
                    }
                }

                // Multiple of 5 and 13, not multiple of 3
                if (i % 13 == 0) {
                    
                    // Multiple of 5, 13, 17, not multiple of 3
                    if (i % 17 == 0) {
                        console.log("BuzzFezzFizz");
                    
                    // Multiple of 5, 13; not multiple of 3, 17
                    } else {
                        console.log("FizzFezzBuzz");
                    }
                
                // Multiple of 5 and 3
                } else {

                    // Multiple of 5, 3, 17
                    if (i % 17 == 0) {
                        console.log("BuzzFizz");
                    
                    // Multiple of 5, 3; not multiple of 17 
                    } else {
                        console.log("FizzBuzz");
                    }
                }

            // Multiple of 5 and 13
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

            // Multiple of 3 and 13
            if (i % 13 == 0) {
                console.log("FizzFezz");

                // Multiple of 3 only
            } else {
                console.log("Fizz");
            }

        // Multiple of 7
        } else if (i % 7 == 0) {
            
            // Multiple of 7 and 13
            if (i % 13 == 0) {
                console.log("FezzBang");
            
            // Multiple of 7 only
            } else {
                console.log("Bang");
            }
        
        // Multiple of 13
        } else if (i % 13 == 0) {
            console.log("Fezz");
        
        // Multiple of none of the special numbers
        } else {
            console.log(i);
        }
    }
}

// Now, we run the main function:
fizzbuzz();

