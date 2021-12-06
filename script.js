    function play() {
    let min = Math.ceil(1)
    let max = Math.floor(6)
    let die1 = Math.floor(Math.random() * (max - min + 1)+ min);
    let die2 = Math.floor(Math.random() * (max - min + 1) + min);

        var sum = die1 + die2
        document.getElementById("die1").innerHTML=("Die1 = " + die1)
        document.getElementById("die2").innerHTML=("Die2 = " + die2)
        document.getElementById("sum").innerHTML=("Sum = " + sum)
        if (sum == 7 || sum == 11)
        {
            document.getElementById("gameEnding").innerHTML=("You lose!")
        }
        else if (die1 == die2 && die1 % die2 == 0)
        {
            document.getElementById("gameEnding").innerHTML=("You won!")

        }   
    }

        play()