async function convertCurrency() {
    const amount = document.getElementById('amountInput').value;
    const selectedCurrency = document.getElementById('currencySelect').value;
    try {
        const response = await fetch('mindicador.json');
        const data = await response.json();
        const exchangeRate = data[selectedCurrency].valor;
        const convertedAmount = (amount / exchangeRate).toFixed(2);
        document.getElementById('result').innerText = `El monto en ${selectedCurrency} es: ${convertedAmount}`;
    } catch (error) {
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2023-10-24', '2023-10-25', '2023-10-26', '2023-10-27', '2023-10-28', '2023-10-29', '2023-10-30', '2023-10-31', '2023-11-01', '2023-11-02'], 
            datasets: [{
                label: 'Historial de Valor de Moneda',
                data: [907.82, 912.05, 908.94, 910.67, 906.76, 905.34, 904.25, 907.81, 906.09, 907.82], 
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

