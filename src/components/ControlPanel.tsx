import React, { useState } from "react";

type Algorithm = "bubble" | "merge"; // add other algorithm types as needed

export type ControlPanelProps = {
  generateArray: (size: number) => void;
  setAlgorithm: (algo: Algorithm) => void;
  startSorting: () => void;
};

const ControlPanel: React.FC<ControlPanelProps> = ({
  generateArray,
  setAlgorithm,
  startSorting,
}) => {
  const [arraySize, setArraySize] = useState<number>(50);

  const handleArraySizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = Number(e.target.value);
    setArraySize(newSize);
    generateArray(newSize);
  };

  return (
    <div className="control-panel flex flex-row items-center space-x-4 mb-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-40"
        onClick={() => generateArray(arraySize)}
      >
        Generate Array
      </button>
      <select
        className="bg-gray-700 text-white px-4 py-2 rounded"
        onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
      >
        <option value="bubble">Bubble Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="heap">Heap Sort</option>
        {/* Add other algorithms here */}
      </select>
      <input
        type="range"
        min="10"
        max="100"
        value={arraySize}
        onChange={handleArraySizeChange}
        className="w-full"
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded w-40"
        onClick={startSorting}
      >
        Start Sorting
      </button>
    </div>
  );
};

export default ControlPanel;
