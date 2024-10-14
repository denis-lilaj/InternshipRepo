function RemoveDuplicates(sortedArray){
   
    const dict={};
    sortedArray.map((element)=>{
         if(dict[element]==null)
         {
            dict[element]=element;
         }
    })


    return Object.values(dict);
}

console.log(RemoveDuplicates([1,1,2]));