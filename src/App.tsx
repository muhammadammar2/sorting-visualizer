import React, { useEffect, useState } from "react";
import { bubbleSort } from "./sortingAlgorithms/bubbleSort";
import ControlPanel from "./components/ControlPanel";
import ArrayVisualizer from "./components/ArrayVisualizer";

const App = () => {
  const [array, setArray] = useState<number[]>([]);
  const [algorithm, setAlgorithm] = useState<string>("bubble");

  const generateArray = (size: number) => {
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(newArray);
  };

  const startSorting = () => {
    switch (algorithm) {
      case "bubble":
        bubbleSort(array, setArray);
        break;
      // Add other cases for other sorting algorithms
    }
  };

  useEffect(() => {
    generateArray(50);
  }, []);

  return (
    <div className="App bg-gray-900 text-white min-h-screen flex flex-col items-center pt-8">
      <ControlPanel
        generateArray={generateArray}
        setAlgorithm={setAlgorithm}
        startSorting={startSorting}
      />
      <ArrayVisualizer array={array} className="mt-8" />
    </div>
  );
};

export default App;
