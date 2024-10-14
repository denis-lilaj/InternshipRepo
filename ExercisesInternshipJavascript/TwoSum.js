function TwoSum(array,sum)
{
    arrayIndexes=[];
    for(let i=0;i<array.length;++i)
    {
      array.forEach(number => {
          if(sum===(number+array[i]))
            {
               arrayIndexes.push(i);
            }  
      });
    }
    return arrayIndexes;
}


console.log(TwoSum([2,7,11,15],9));