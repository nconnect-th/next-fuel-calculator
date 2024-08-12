import { useState } from 'react';
import '../styles/globals.css';


export default function FuelCalculator() {
  const [fuelPerLiter, setFuelPerLiter] = useState<number>(0);
  const [maxLiters, setMaxLiters] = useState<number>(0);
  const [rangeKm, setRangeKm] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [rangePerLiter, setRangePerLiter] = useState<number>(0);

  const calculate = () => {
    const cost = fuelPerLiter * maxLiters;
    const range = rangeKm / maxLiters;

    setTotalCost(parseFloat(cost.toFixed(2)));
    setRangePerLiter(parseFloat(range.toFixed(2)));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Fuel Calculator</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="fuelPerLiter" className="block text-sm font-medium">
            ค่าน้ำมันต่อลิตร (THB)
          </label>
          <input
            id="fuelPerLiter"
            type="number"
            value={fuelPerLiter}
            onChange={(e) => setFuelPerLiter(parseFloat(e.target.value))}
            className="mt-1 block w-full rounded-md border-0 p-3 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
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
            onChange={(e) => setMaxLiters(parseFloat(e.target.value))}
            className="mt-1 block w-full rounded-md border-0 p-3 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
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
            onChange={(e) => setRangeKm(parseFloat(e.target.value))}
            className="mt-1 block w-full rounded-md border-0 p-3 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter range in kilometers"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={calculate}
            className="w-full py-3 px-4 bg-white text-blue-600 font-semibold rounded-md shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            คำนวณ
          </button>
        </div>
      </form>

      <div className="mt-8 p-6 bg-white text-gray-900 rounded-md shadow-md">
        <h3 className="text-xl font-semibold text-center">สรุป</h3>
        <p className="mt-4 text-center">ค่าน้ำมันที่ต้องจ่าย: <strong className="text-blue-600">{totalCost} THB</strong></p>
        <p className="mt-2 text-center">เทียบเทียบการเดินทาง: <strong className="text-blue-600">{rangePerLiter} กม./ลิตร</strong></p>
      </div>
    </div>
  );
}
