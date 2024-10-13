const incomeInput = document.getElementById('income');
const expensesInput = document.getElementById('expenses');
const resultDisplay = document.getElementById('result');
const calculateButton = document.getElementById('calculateBtn');

function formatNumberWithCommas(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateBudget() {
    const income = parseInt(incomeInput.value.replace(/,/g,''),10);
    const expenses = parseInt(expensesInput.value.replace(/,/g,''),10);

if (isNaN(income)  || isNaN(expenses)) {
    resultDisplay.textContent = "Please enter valid numbers for income and expenses.";
   return;
}


const budget = income - expenses;

if (budget >=0) {
    resultDisplay.textContent = `Your remaining budget is: Php${formatNumberWithCommas(budget)}`;
} else {
    resultDisplay.textContent = `You are overbudget by: Php${formatNumberWithCommas(Math.abs(budget))}`;
}
}

calculateButton.addEventListener('click', calculateBudget);
