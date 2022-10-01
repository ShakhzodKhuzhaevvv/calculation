const totalCost = document.getElementById('total-cost'),
    anInitialFee = document.getElementById('an-initial-fee'),
    creditTerm = document.getElementById('credit-term');

const costRange = document.getElementById('total-cost-range'),
    anInitialFeeRange = document.getElementById('an-initial-fee-range'),
    creditTermRange = document.getElementById('credit-term-range');

const totalAmountOfCredit = document.getElementById('amount-of-credit'),
    totalMonthlyPayment = document.getElementById('monthly-payment');

const inputsRange = document.querySelectorAll('.input-range');

const assignValue = () => {
    totalCost.value = costRange.value;
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = creditTermRange.value;
};

assignValue();

inputsRange.forEach(elem => {
    elem.addEventListener('input', () => {
        assignValue();
        calculation(totalCost.value, anInitialFee.value,creditTerm.value) 
       
    })
    
})

const calculation = (totalCost = 0, anInitialFee = 10000, creditTerm = 1 ) => {
    let monthlyPayment;
    let lounAmount = totalCost - anInitialFee;
    let interestRate = lounAmount * (0.1);
    let numberOfMonths = creditTerm;
    
    monthlyPayment = (lounAmount + interestRate) / numberOfMonths;

    const monthlyPaymentArounded = Math.round(monthlyPayment);
    if(monthlyPaymentArounded < 0  || monthlyPayment == 0) {
        totalAmountOfCredit.innerHTML = '0 ₽';
        totalMonthlyPayment.innerHTML = '0 ₽'
    } else {
        totalAmountOfCredit.innerHTML = `${lounAmount} ₽`;
        totalMonthlyPayment.innerHTML = `${monthlyPaymentArounded} ₽`;
    }

}

// 200.000 10.000
// 190.000 *0.1)