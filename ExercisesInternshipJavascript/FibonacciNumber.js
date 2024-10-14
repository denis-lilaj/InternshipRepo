function FibonacciNumber(iterations)
{
    let number=Number(iterations);
    var a=0;
    var b=1;

    for(let i=0;i<number;++i)
    {
        var c=a+b;
        a = b;
        b = c;
    }

    return a;
}

console.log(FibonacciNumber(4));  