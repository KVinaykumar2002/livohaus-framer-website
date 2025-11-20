"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";

const areaUnits = [
  { value: "sqft", label: "Square Feet", toSqFt: 1 },
  { value: "sqm", label: "Square Meters", toSqFt: 10.764 },
  { value: "sqyd", label: "Square Yards", toSqFt: 9 },
  { value: "acre", label: "Acres", toSqFt: 43560 },
  { value: "hectare", label: "Hectares", toSqFt: 107639 },
  { value: "cent", label: "Cents", toSqFt: 435.6 },
  { value: "ground", label: "Grounds", toSqFt: 2400 },
  { value: "gaj", label: "Gaj", toSqFt: 9 },
];

export default function AreaConverter() {
  const [inputValue, setInputValue] = useState("1000");
  const [fromUnit, setFromUnit] = useState("sqft");
  const [toUnit, setToUnit] = useState("sqm");

  const convertArea = () => {
    const value = parseFloat(inputValue) || 0;
    const fromMultiplier = areaUnits.find(u => u.value === fromUnit)?.toSqFt || 1;
    const toMultiplier = areaUnits.find(u => u.value === toUnit)?.toSqFt || 1;
    
    const sqFt = value * fromMultiplier;
    const result = sqFt / toMultiplier;
    
    return result.toFixed(4);
  };

  return (
    <section id="area-converter" className="scroll-mt-24">
      <div className="bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] rounded-3xl p-8 lg:p-12 border border-blue-200">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary/10 p-3 rounded-2xl">
            <Maximize2 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-text-dark">Area Converter</h2>
            <p className="text-muted-foreground">Convert one area into any other easily</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* From */}
              <div>
                <label className="block text-text-dark font-semibold mb-3">From</label>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-4 text-text-dark text-2xl font-semibold focus:outline-none focus:border-primary mb-4"
                  placeholder="Enter value"
                />
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary"
                >
                  {areaUnits.map(unit => (
                    <option key={unit.value} value={unit.value}>{unit.label}</option>
                  ))}
                </select>
              </div>

              {/* To */}
              <div>
                <label className="block text-text-dark font-semibold mb-3">To</label>
                <div className="bg-primary/10 border-2 border-primary rounded-xl px-4 py-4 mb-4">
                  <p className="text-primary text-3xl font-bold">{convertArea()}</p>
                </div>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-text-dark focus:outline-none focus:border-primary"
                >
                  {areaUnits.map(unit => (
                    <option key={unit.value} value={unit.value}>{unit.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-xl">
              <p className="text-center text-text-dark">
                <span className="font-semibold">{inputValue} {areaUnits.find(u => u.value === fromUnit)?.label}</span>
                {" = "}
                <span className="font-semibold text-primary">{convertArea()} {areaUnits.find(u => u.value === toUnit)?.label}</span>
              </p>
            </div>

            {/* Quick Reference */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              {areaUnits.slice(0, 4).map(unit => {
                const fromMultiplier = areaUnits.find(u => u.value === fromUnit)?.toSqFt || 1;
                const value = (parseFloat(inputValue) || 0) * fromMultiplier;
                const result = (value / unit.toSqFt).toFixed(2);
                
                return (
                  <div key={unit.value} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">{unit.label}</p>
                    <p className="font-semibold text-text-dark">{result}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
