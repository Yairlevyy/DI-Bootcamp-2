// One Loop

        for (let i = 1; i < 7; i++) {
            console.log('*'.repeat(i))
        };

// Two Loop - I did this second part with help of internet.


        const rows = 6; // Number of rows in the pattern

            // Create two nested arrays
            const pattern = [];
            for (let i = 0; i < rows; i++) {
                const innerArray = [];
                for (let j = 0; j <= i; j++) {
                    innerArray.push("*");
                }
                pattern.push(innerArray);
            }

            // Display the pattern
            for (let i = 0; i < rows; i++) {
                console.log(pattern[i].join(" "));
            }