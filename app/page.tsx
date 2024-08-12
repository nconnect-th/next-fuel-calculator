import { useState } from 'react';

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
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-900">Fuel Calculator</h2>

      <form className="space-y-6 mt-6">
        <div>
          <label htmlFor="fuelPerLiter" className="block text-sm font-medium text-gray-700">
            ค่าน้ำมันต่อลิตร (THB)
          </label>
          <input
            id="fuelPerLiter"
            type="number"
            value={fuelPerLiter}
            onChange={(e) => setFuelPerLiter(parseFloat(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter fuel price per liter"
          />
        </div>

        <div>
          <label htmlFor="maxLiters" className="block text-sm font-medium text-gray-700">
            เติมน้ำมันกี่ลิตร
          </label>
          <input
            id="maxLiters"
            type="number"
            value={maxLiters}
            onChange={(e) => setMaxLiters(parseFloat(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter maximum liters"
          />
        </div>

        <div>
          <label htmlFor="rangeKm" className="block text-sm font-medium text-gray-700">
            จำนวนที่รถวิ่งไป (KM)
          </label>
          <input
            id="rangeKm"
            type="number"
            value={rangeKm}
            onChange={(e) => setRangeKm(parseFloat(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter range in kilometers"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={calculate}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculate
          </button>
        </div>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-900">สรุป</h3>
        <p className="mt-2 text-sm text-gray-700">ค่าน้ำมันที่ต้องจ่าย: <strong>{totalCost} THB</strong></p>
        <p className="mt-1 text-sm text-gray-700">เทียบเทียบการเดินทาง: <strong>{rangePerLiter} กม./ลิตร</strong></p>
      </div>
    </div>
  );
}


