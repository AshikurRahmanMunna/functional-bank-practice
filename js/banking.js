function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);

    // clear input value
    input.value = '';
    return inputAmount;
}
function totalAmount(updateId, depositAmount) {
    const updateTotal = document.getElementById(updateId);
    const updateTotalText = updateTotal.innerText;
    const previoudUpdateAmount = parseFloat(updateTotalText);
    updateTotal.innerText = previoudUpdateAmount + depositAmount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    return previousBalance;
}
function updateBalance(inputValue, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);

    if(isAdd == true) {
        balanceTotal.innerText = previousBalance + inputValue;
    }else {
        balanceTotal.innerText = previousBalance - inputValue;
    }

}


document.getElementById('deposit-button').addEventListener('click', function() {
    const depositInput = getInputValue('deposit-input');
    if(depositInput > 0) {
        totalAmount('deposit-total', depositInput);
        updateBalance(depositInput, true);
        const status = document.getElementById('status');
        status.innerText = depositInput + ' taka deposited successfully';
        status.classList.add('text-green-400');
    }
    else{
        alert('Plaease enter a valid number');
    }
});
document.getElementById('withdraw-button').addEventListener('click', function() {
    const currentBalance = getCurrentBalance();
    const withdrawInput = getInputValue('withdraw-input');
    if(currentBalance >= withdrawInput) {
        totalAmount('withdraw-total', withdrawInput);
        updateBalance(withdrawInput, false);
        const status = document.getElementById('status');
        status.innerText = withdrawInput + ' taka withdrawn successfully';
        status.classList.add('text-yellow-400');
    }
    else{
        const need = withdrawInput - currentBalance;
        alert('You dont have enough money.' + 'You need ' + need + ' taka more to withdraw ' + withdrawInput + ' taka.');
    }
});