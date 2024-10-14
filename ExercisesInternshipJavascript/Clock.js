function calculateMiliSeconds(hourFormat){

    var hourComponents=hourFormat.split(',');
    var miliSecSum=0;
    var hourMiliSec;
    var minMiliSec;
    var secMiliSec;

    hourComponents.forEach((element,index) => {
        switch(index){
            case 0:
               hourMiliSec=Number(element)*60*60*1000;
               break;
            case 1:
                minMiliSec=Number(element)*60*1000;
                break;
            case 2:
                 secMiliSec=Number(element)*1000;
                 break;
        }
      
    });

    miliSecSum=hourMiliSec+minMiliSec+secMiliSec;
    console.log(miliSecSum);
    

}

calculateMiliSeconds('7,2,1');
