"use client";

import { useState } from "react";
import { Wallet } from "lucide-react";

export default function BudgetCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(40000);
  const [downPayment, setDownPayment] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const calculateAffordability = () => {
    const monthlyAvailable = monthlyIncome - monthlyExpenses;
    const maxEMI = monthlyAvailable * 0.5; // 50% of available income
    
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure * 12;
    
    const maxLoan = (maxEMI * (Math.pow(1 + monthlyRate, months) - 1)) / 
                     (monthlyRate * Math.pow(1 + monthlyRate, months));
    
    const maxPropertyPrice = maxLoan + downPayment;
    
    return {
      maxEMI: Math.round(maxEMI),
      maxLoan: Math.round(maxLoan),
      maxPropertyPrice: Math.round(maxPropertyPrice),
    };
  };

  const result = calculateAffordability();

  return (
    <section id="budget-calculator" className="scroll-mt-24">
      <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-3xl p-8 lg:p-12 border border-gray-200">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary/10 p-3 rounded-2xl">
            <Wallet className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-dark">Budget Calculator</h2>
            <p className="text-muted-foreground">Check your affordability range for buying home</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-text-dark font-semibold mb-2">Monthly Income</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full bg-white border border-gray-300 rounded-xl px-12 py-3 text-text-dark focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-text-dark font-semibold mb-2">Monthly Expenses</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="w-full bg-white border border-gray-300 rounded-xl px-12 py-3 text-text-dark focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-text-dark font-semibold mb-2">Down Payment Available</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full bg-white border border-gray-300 rounded-xl px-12 py-3 text-text-dark focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-text-dark font-semibold mb-2">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-text-dark font-semibold mb-2">Loan Tenure (Years)</label>
              <input
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-text-dark mb-6">Your Budget Summary</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Maximum Monthly EMI</p>
                  <p className="text-3xl font-bold text-primary">₹ {result.maxEMI.toLocaleString('en-IN')}</p>
                </div>

                <div className="h-px bg-gray-200" />

                <div>
                  <p className="text-muted-foreground text-sm mb-1">Maximum Loan Amount</p>
                  <p className="text-2xl font-bold text-text-dark">₹ {result.maxLoan.toLocaleString('en-IN')}</p>
                </div>

                <div className="h-px bg-gray-200" />

                <div>
                  <p className="text-muted-foreground text-sm mb-1">Maximum Property Price</p>
                  <p className="text-2xl font-bold text-text-dark">₹ {result.maxPropertyPrice.toLocaleString('en-IN')}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    (Loan: ₹{result.maxLoan.toLocaleString('en-IN')} + Down Payment: ₹{downPayment.toLocaleString('en-IN')})
                  </p>
                </div>

                <div className="bg-primary/10 rounded-xl p-4 mt-6">
                  <p className="text-sm text-text-dark">
                    <span className="font-semibold">Note:</span> This calculation assumes your EMI should not exceed 50% of your available monthly income.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
