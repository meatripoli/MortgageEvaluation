const moment= require('moment');


function monthlyPayment({oldLoanValue,years,loanInterest}){
    return oldLoanValue*((loanInterest/12)*Math.pow((1+(loanInterest/12)),(years*12)))/(Math.pow((1+(loanInterest/12)),(years*12))-1)
}

function monthlyLoanInterest(oldLoanValue,loanInterest){
    return oldLoanValue*loanInterest/12;
}

function monthlySavingsInterest(monthlyContributionValue,oldAccountValue,interest){
    return oldAccountValue*interest/12;
}

function monthlyLoanPrincipal(monthlyInterestValue,monthlyPaymentValue){
    return monthlyPaymentValue-monthlyInterestValue;
}


function newLoanTotal(monthlyContributionValue,monthlyPrincipalValue,oldLoanValue){
    return oldLoanValue-monthlyPrincipalValue-monthlyContributionValue;
}

function newSavingsTotal(interest,oldAccountValue){
    return oldAccountValue+interest;
}

function lastPaymentDate({firstPaymentDate,years}){
    return moment(firstPaymentDate,'MM-DD-YYYY').add(years,'Y').format('MM-DD-YYYY')
}

function monthlyPaymentDate(firstPaymentDate,m){
    return moment(firstPaymentDate,'MM-DD-YYYY').add(m,'M').format('MM-DD-YYYY')
}

function loanPaymentDataCreation(obj){
    let monthlyPaymentValue=monthlyPayment(obj)
    //initial loan balance
    let total=obj.oldLoanValue
    //initial intrest paid balance
    let totalInterest= 0
    //initial savings account balance
    let totalAccount = obj.savingsAccountValue
    ///the array variable is needed for the graphs
    let originalLoanDataArray={
        datesArray: [],
        principalPaymentArray: [],
        interestPaymentArray: [],
        newTotalArray: [],
        monthlyPayment:monthlyPaymentValue
    }
    let savingsDataArray = {
        datesArray: [],
        currentAccountArray: [],
        interestMadeArray: [],
        totalAccountArray: []
    }
    //this is just for debugging purposes
    let originalLoanDataArray2=[]
    let savingsDataArray2 = []
    let months=obj.years*12;
    for(let m=0;m<months;m++){
        //calculations for loan
        let date= monthlyPaymentDate(obj.firstPaymentDate,m);
        let interest= monthlyLoanInterest(total,obj.loanInterest);
        let principal= monthlyLoanPrincipal(interest,monthlyPaymentValue);
        totalInterest=totalInterest+interest;
        total= newLoanTotal(0,principal,total); //this is the total for the original loan
        let originalLoanData={
            date: date,
            principalPayment: principal,
            interestPayment: interest,
            newTotal: total,
            totalInterestPayed: totalInterest,
            monthlyPayment:monthlyPaymentValue
        };
        originalLoanDataArray.datesArray.push(date);
        originalLoanDataArray.principalPaymentArray.push(principal);
        originalLoanDataArray.interestPaymentArray.push(interest);
        originalLoanDataArray.newTotalArray.push(total);
        originalLoanDataArray2.push(originalLoanData);
        //calculations for savings account
        
        let savingStartDate=monthlyPaymentDate(obj.startDate,m)
        let currentAccount=totalAccount+obj.monthlyContributionValue
        let interestMade=monthlySavingsInterest(obj.monthlyContributionValue,currentAccount,obj.savingsInterest)
        totalAccount=newSavingsTotal(interestMade,currentAccount)
        
        let savingsData = {
            date: savingStartDate,
            currentAccountValue:currentAccount,
            interestMade:interestMade,
            totalAccountValue:totalAccount
        }
        savingsDataArray.datesArray.push(savingStartDate);
        savingsDataArray.currentAccountArray.push(currentAccount);
        savingsDataArray.interestMadeArray.push(interestMade);
        savingsDataArray.totalAccountArray.push(totalAccount);
        savingsDataArray2.push(savingsData);

    } //for originalLoanDataArray2,savingsDataArray2
    console.log(savingsDataArray2);
}

loanPaymentDataCreation({
    firstPaymentDate:'01-01-2020',
    years:30,
    oldLoanValue:361520.00,
    loanInterest:0.0375,
    monthlyContributionValue:1000,
    savingsAccountValue:0,
    savingsInterest:0.02,
    frequency:'',
    payoffStartDate:'',
    startDate:'07-01-2020'
})