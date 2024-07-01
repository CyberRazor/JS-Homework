let n = 15;
const div3 = "Fizz";
const div5  = "Buzz";
const divBoth = "FizzBuzz";

function CalculateFizzBuzz(n){
    for(let i = 1; i <= n; i++)
    {
        let by3 = i % 3;
        let by5 = i % 5;

        if (by3 === 0 && by5 === 0 )
            {console.log(divBoth);}

        else if (by3 === 0)
            { console.log(div3);}
        else if (by5 === 0 )
            {console.log(div5);}

        else
            {console.log(i);}
    }
}

CalculateFizzBuzz(30);
