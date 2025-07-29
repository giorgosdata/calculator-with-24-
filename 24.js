function calculate() {
    const payInput = document.getElementById('pay').value;
    const totalPar = document.getElementById('total');

    const amount = parseFloat(payInput);

    if (isNaN(amount)) {
        totalPar.textContent = "Δώσε έγκυρο αριθμό";
    } else {
        const result = (amount * 1.24).toFixed(2);  // ✅ 24% ΦΠΑ
        totalPar.textContent = `Το ποσό με ΦΠΑ είναι: €${result}`;
    }
}
