        // setTimeout(wakeUpUser, 5000);
        // function wakeUpUser() {
        //     alert("Are you going to stare at this boring page forever?");
        // }

        // var scoops = 5;
        // while (scoops > 0) {
        //     document.write("Another scoop!<br>");
        //     scoops = scoops -1;
        // }
        // document.write("Life without ice cream isn't the same");

        var word = "bottles";
        var count = 99;
        while (count > 0) {
            console.log(count + " " + word + " of beer on the wall");
            console.log(count + " " + word + " of beer,");
            console.log("Take one down, pass it around,");
            count = count - 1;
            if (count === 1) {
                word = "bottle";
            }
            if (count > 0) {
                console.log(count + " " + word + " of beer on the wall.");
            }  else {
                console.log("No more " + word + " of beer on the wall.");
            }
        }