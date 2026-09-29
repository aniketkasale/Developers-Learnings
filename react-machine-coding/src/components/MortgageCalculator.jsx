// Build a simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.
// Requirements
// The user should be able to enter:
// 1. Loan amount ($) 2. Annual interest rate (%). This is also known as the annual percentage rate (APR)
// 3. Loan term (in years)
// Using the inputs, the calculator should compute the following and display the results to the user:
// 1. Monthly mortgage payment
// 2. Total payment amount
// 3. Total interest paid
// If a non-numerical string is entered into any input field, the calculator should display an error message.
// Additionally, the calculator should handle any other invalid inputs that may arise.
// Round the result amounts to 2 decimal places.
// (The last two requirements might not be given to you during interviews, you're expected to clarify.)
// The formula for calculating the monthly payment is:
// M = P(i(1+i)n)/((1+i)n - 1)
// M: Monthly mortgage payment
// P: Loan amount
// i: Monthly interest rate (APR / 12)
// n: Total number of payments (loan term in years x 12)
import { useState } from "react";

function MortgageCalculator() {
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState({});
  const [data, setData] = useState({
    loanAmount: "",
    interestRate: "",
    loanTerm: "",
  });

  const handleChange = (event, field) => {
    const value = event.target.value;

    setData({
      ...data,
      [field]: value,
    });

    setErrors({
      ...errors,
      [field]: "",
    });
  };

  const calculate = () => {
    const loanAmount = Number(data.loanAmount);
    const interestRate = Number(data.interestRate);
    const loanTerm = Number(data.loanTerm);

    const newErrors = {};

    if (!Number.isFinite(loanAmount) || loanAmount <= 0) {
      newErrors.loanAmount = "Enter a valid loan amount";
    }

    if (!Number.isFinite(interestRate) || interestRate < 0) {
      newErrors.interestRate = "Enter a valid interest rate";
    }

    if (!Number.isFinite(loanTerm) || loanTerm <= 0) {
      newErrors.loanTerm = "Enter a valid loan term";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const i = interestRate / 100 / 12;
    const n = loanTerm * 12;

    let monthlyPayment;

    if (i === 0) {
      monthlyPayment = loanAmount / n;
    } else {
      monthlyPayment =
        (loanAmount * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    }

    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - loanAmount;

    setResult({
      monthlyMortgagePayment: monthlyPayment,
      totalPayment,
      totalInterest,
    });

    setErrors({});
  };

  return (
    <div>
      <h2>Mortgage Calculator</h2>

      <div style={{ display: "flex", gap: 10 }}>
        <div>
          <input
            placeholder="Loan amount"
            value={data.loanAmount}
            onChange={(e) => handleChange(e, "loanAmount")}
          />
          {errors.loanAmount && <p>{errors.loanAmount}</p>}
        </div>

        <div>
          <input
            placeholder="Interest rate"
            value={data.interestRate}
            onChange={(e) => handleChange(e, "interestRate")}
          />
          {errors.interestRate && <p>{errors.interestRate}</p>}
        </div>

        <div>
          <input
            placeholder="Loan term in years"
            value={data.loanTerm}
            onChange={(e) => handleChange(e, "loanTerm")}
          />
          {errors.loanTerm && <p>{errors.loanTerm}</p>}
        </div>
      </div>

      <br />

      <button onClick={calculate}>Calculate</button>

      <div>
        Monthly Mortgage Payment: ${result.monthlyMortgagePayment?.toFixed(2)}
      </div>

      <div>Total Payment Amount: ${result.totalPayment?.toFixed(2)}</div>

      <div>Total Interest Paid: ${result.totalInterest?.toFixed(2)}</div>
    </div>
  );
}

export default MortgageCalculator;
