function calculateTax() {
    var income = document.getElementById('income').value;
    var taxRate = document.getElementById('taxRate').value;

    if (income === '' || taxRate === '') {
        alert('Please enter both income and tax rate.');
        return;
    }

    var taxAmount = (income * (taxRate / 100)).toFixed(2);
    var result = `Tax Amount: $${taxAmount}`;
    
    document.getElementById('result').innerText = result;
}
