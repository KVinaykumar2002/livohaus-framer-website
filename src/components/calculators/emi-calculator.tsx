"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [tenure, setTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(8.9);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                 (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      principal,
      interest: Math.round(totalInterest),
      principalPercentage: (principal / totalAmount * 100).toFixed(2),
      interestPercentage: (totalInterest / totalAmount * 100).toFixed(2),
    };
  };

  const result = calculateEMI();

  return (
    <section id="emi-calculator" className="scroll-mt-24">
      <div className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A6B] rounded-3xl overflow-hidden">
        <div className="bg-primary py-6 px-8">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold text-white">EMI Calculator for your loan amount</h2>
          </div>
        </div>

        <div className="p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Inputs */}
            <div className="space-y-8">
              <div>
                <label className="block text-white/70 mb-3 text-sm">Loan amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-xl">₹</span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white text-xl focus:outline-none focus:border-primary"
                  />
                </div>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full mt-4"
                />
              </div>

              <div>
                <label className="block text-white/70 mb-3 text-sm">Tenure</label>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-32 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-xl focus:outline-none focus:border-primary"
                  />
                  <select className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary">
                    <option>Years</option>
                  </select>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full mt-4"
                />
              </div>

              <div>
                <label className="block text-white/70 mb-3 text-sm">Rate of Interest</label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white text-xl focus:outline-none focus:border-primary"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl">%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full mt-4"
                />
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 mb-8">
                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#4FD1C5"
                    strokeWidth="40"
                    strokeDasharray={`${2 * Math.PI * 80 * parseFloat(result.principalPercentage) / 100} ${2 * Math.PI * 80}`}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#1E3A8A"
                    strokeWidth="40"
                    strokeDasharray={`${2 * Math.PI * 80 * parseFloat(result.interestPercentage) / 100} ${2 * Math.PI * 80}`}
                    strokeDashoffset={-2 * Math.PI * 80 * parseFloat(result.principalPercentage) / 100}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/60 text-sm">Total</p>
                    <p className="text-white font-bold text-xl">₹{(result.totalAmount / 100000).toFixed(2)}L</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/60">Monthly EMI</span>
                  <span className="text-white text-2xl font-bold">₹ {result.emi.toLocaleString('en-IN')}</span>
                </div>
                <div className="h-px bg-white/20 my-4" />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#4FD1C5]" />
                      <span className="text-white/60 text-sm">Principal ({result.principalPercentage}%)</span>
                    </div>
                    <span className="text-white font-semibold">₹ {result.principal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#1E3A8A]" />
                      <span className="text-white/60 text-sm">Interest ({result.interestPercentage}%)</span>
                    </div>
                    <span className="text-white font-semibold">₹ {result.interest.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="h-px bg-white/20 my-4" />
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Total Payable amount</span>
                  <span className="text-white text-xl font-bold">₹ {result.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button className="mt-6 bg-primary hover:bg-button-hover text-white font-semibold py-4 px-8 rounded-full transition-colors w-full">
                Get instant loan
              </button>
              <p className="text-white/60 text-sm mt-3">It's easy with 99acres!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
