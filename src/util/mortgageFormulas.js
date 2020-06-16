function monthlyPayment({amount,years,interest}){
    return amount*((interest/12)*Math.pow((1+(interest/12)),(years*12)))/(Math.pow((1+(interest/12)),(years*12))-1)
}

function monthlyInterest({amount,interest}){
    return amount*interest/12;
}

function monthlyPrincipal({monthlyInterest,monthlyPayment}){
    return monthlyPayment-monthlyInterest;
}