function RichestCustomerMatrix(array2d) {
    let customers = [];
  
    array2d.forEach(bank => {
      let customer = 0;
      bank.forEach(income => {
        customer += income;
      });
      customers.push(customer);
    });
  
    
    console.log(`Richest customer is ${customers.indexOf(Math.max(...customers))+1}`);
  }
  
  RichestCustomerMatrix([[1, 5], [7, 3], [3, 5]]);