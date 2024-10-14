function CreatePhoneNumber(numbers){
    const numbersArray=numbers.split(',');
    var stringFormat="(";
    var count=0;

    for(let i=0;i<numbersArray.length;i++)
    {
        if(count==3)
            {
                stringFormat+=")";
            }

            if(count==3)
            {
                stringFormat+=" ";
            }

            if(count==6)
            {
                stringFormat+="-";
            }
        stringFormat+=numbersArray[i];
        count=count+1;

    }


    console.log(stringFormat);

}

CreatePhoneNumber("1,4,1,0,1,4,2,1,2,9");