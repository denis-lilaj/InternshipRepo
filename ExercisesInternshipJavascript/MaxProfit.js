function MaxProfit(days){

    const daysArray=days.split(",");
    var low=0;
    var high=0;
    var buy=true;
 
    for(let i=0;i<daysArray.length;++i)
    {
        if(daysArray[i+1]-daysArray[i]<0 && buy==true)
        {
           low=daysArray[i+1];
           buy=false;
           high=low;
        }

        else{


            if(daysArray[i]>high)
            {
                high=daysArray[i];
            }

        }

     
    }

    console.log(high-low);
    
}


MaxProfit("7,1,5,3,6,4");
