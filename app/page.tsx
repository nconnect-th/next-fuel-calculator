"use client";

import { useState } from 'react';
import '../styles/globals.css';

export default function FuelCalculator() {
  const [fuelPerLiter, setFuelPerLiter] = useState<string>(''); // ค่าเริ่มต้นเป็นค่าว่าง
  const [maxLiters, setMaxLiters] = useState<string>(''); // ค่าเริ่มต้นเป็นค่าว่าง
  const [rangeKm, setRangeKm] = useState<string>(''); // ค่าเริ่มต้นเป็นค่าว่าง
  const [totalCost, setTotalCost] = useState<number>(0);
  const [rangePerLiter, setRangePerLiter] = useState<number>(0);
  const [thbPerKm, setThbPerKm] = useState<number>(0); // เพิ่มสถานะสำหรับ THB per KM

  const calculate = () => {
    const fuelPerLiterNum = parseFloat(fuelPerLiter);
    const maxLitersNum = parseFloat(maxLiters);
    const rangeKmNum = parseFloat(rangeKm);

    if (!isNaN(fuelPerLiterNum) && !isNaN(maxLitersNum) && !isNaN(rangeKmNum)) {
      const cost = fuelPerLiterNum * maxLitersNum;
      const range = rangeKmNum / maxLitersNum;
      const thbPerKm = cost / rangeKmNum;

      setTotalCost(parseFloat(cost.toFixed(2)));
      setRangePerLiter(parseFloat(range.toFixed(2)));
      setThbPerKm(parseFloat(thbPerKm.toFixed(2))); // อัพเดตสถานะ THB per KM
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 md:p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg text-white">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4">ระบบคำนวนค่าน้ำมัน | Fuel Calculator</h2>

      <form className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="fuelPerLiter" className="block text-sm font-medium">
            ค่าน้ำมันต่อลิตร (THB)
          </label>
          <input
            id="fuelPerLiter"
            type="number"
            value={fuelPerLiter}
            onChange={(e) => setFuelPerLiter(e.target.value)}
            className="mt-1 block w-full rounded-lg border-0 p-2 md:p-3 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter fuel price per liter"
          />
        </div>

        <div>
          <label htmlFor="maxLiters" className="block text-sm font-medium">
            เติมน้ำมันกี่ลิตร
          </label>
          <input
            id="maxLiters"
            type="number"
            value={maxLiters}
            onChange={(e) => setMaxLiters(e.target.value)}
            className="mt-1 block w-full rounded-lg border-0 p-2 md:p-3 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter maximum liters"
          />
        </div>

        <div>
          <label htmlFor="rangeKm" className="block text-sm font-medium">
            จำนวนที่รถวิ่งไป (KM)
          </label>
          <input
            id="rangeKm"
            type="number"
            value={rangeKm}
            onChange={(e) => setRangeKm(e.target.value)}
            className="mt-1 block w-full rounded-lg border-0 p-2 md:p-3 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter range in kilometers"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={calculate}
            className="w-full py-2 md:py-3 px-4 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate
          </button>
        </div>
      </form>

      <div className="mt-6 md:mt-8 p-4 md:p-6 bg-white text-gray-900 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-center">สรุป</h3>
        <p className="mt-4 text-center text-gray-700">
          ค่าน้ำมันที่ต้องจ่าย: <strong className="text-indigo-600">{totalCost} THB</strong>
        </p>
        <p className="mt-2 text-center text-gray-700">
          เทียบเทียบการเดินทาง: <strong className="text-indigo-600">{rangePerLiter} กม./ลิตร</strong>
        </p>
        <p className="mt-2 text-center text-gray-700">
          ราคาต่อกิโลเมตร: <strong className="text-indigo-600">{thbPerKm} THB/KM</strong> {/* แสดงผล THB per KM */}
        </p>
      </div>
    </div>
  );
}
