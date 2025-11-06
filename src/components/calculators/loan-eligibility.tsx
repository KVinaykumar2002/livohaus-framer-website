"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";

export default function LoanEligibility() {
  const [monthlyIncome, setMonthlyIncome] = useState(80000);
  const [existingEMI, setExistingEMI] = useState(10000);
  const [interestRate, setInterestRate] = useState(9.0);
  const [tenure, setTenure] = useState(20);

  const calculateEligibility = () => {
    const availableIncome = monthlyIncome - existingEMI;
    const maxEMI = availableIncome * 0.6; // 60% of available income for EMI
    
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    
    const eligibleLoan = (maxEMI * (Math.pow(1 + monthlyRate, months) - 1)) / 
                         (monthlyRate * Math.pow(1 + monthlyRate, months));
    
    return {
      maxEMI: Math.round(maxEMI),
      eligibleLoan: Math.round(eligibleLoan),
      availableIncome: Math.round(availableIncome),
    };
  };

  const result = calculateEligibility();

  return (
    <section id="loan-eligibility" className="scroll-mt-24">
      <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] rounded-3xl p-8 lg:p-12 border border-orange-200">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary/10 p-3 rounded-2xl">
            <CreditCard className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-dark">Loan Eligibility</h2>
            <p className="text-muted-foreground">See what you can borrow for your home</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-text-dark font-semibold mb-2">
                Monthly Income <span className="text-red-500">*</span>
              </label>
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
              <label className="block text-text-dark font-semibold mb-2">
                Existing Monthly EMI
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={existingEMI}
                  onChange={(e) => setExistingEMI(Number(e.target.value))}
                  className="w-full bg-white border border-gray-300 rounded-xl px-12 py-3 text-text-dark focus:outline-none focus:border-primary"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Include all existing loan EMIs</p>
            </div>

            <div>
              <label className="block text-text-dark font-semibold mb-2">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-text-dark font-semibold mb-2">
                Loan Tenure (Years)
              </label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-text-dark mb-6">Your Eligibility</h3>
              
              <div className="space-y-6">
                <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary">
                  <p className="text-muted-foreground text-sm mb-2">You are eligible for</p>
                  <p className="text-4xl font-bold text-primary">₹ {result.eligibleLoan.toLocaleString('en-IN')}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Available Income</span>
                    <span className="font-semibold text-text-dark">₹ {result.availableIncome.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Maximum EMI (60%)</span>
                    <span className="font-semibold text-text-dark">₹ {result.maxEMI.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Loan Tenure</span>
                    <span className="font-semibold text-text-dark">{tenure} years</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-semibold text-text-dark">{interestRate}% p.a.</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mt-6 border border-blue-200">
                  <p className="text-sm text-text-dark">
                    <span className="font-semibold">💡 Tip:</span> Your eligibility is calculated based on 60% of your available income after existing EMIs.
                  </p>
                </div>

                <button className="w-full bg-primary hover:bg-button-hover text-white font-semibold py-4 px-8 rounded-full transition-colors">
                  Apply for Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
