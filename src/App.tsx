import React, { useEffect, useState } from "react";
import { bubbleSort } from "./sortingAlgosLogic&Visulization/bubbleSort";
import ControlPanel from "./components/ControlPanel";
import ArrayVisualizer from "./components/ArrayVisualizer";
import { heapSort } from "./sortingAlgosLogic&Visulization/heapSort";

const App = () => {
  const [array, setArray] = useState<number[]>([]);
  const [algorithm, setAlgorithm] = useState<Algorithm>("bubble");
  const [comparingIndices, setComparingIndices] = useState<number[]>([]);
  const [swappingIndices, setSwappingIndices] = useState<number[]>([]);
  const [delay, setDelay] = useState<number>(20); // delay in ms for visualization

  type Algorithm = "bubble" | "merge" | "heap"; // add other algos types here

  interface AlgorithmInfo {
    timeComplexity: string;
  }

  const generateArray = (size: number) => {
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(newArray);
  };

  const startSorting = () => {
    switch (algorithm) {
      case "bubble":
        bubbleSort(
          array,
          setArray,
          setComparingIndices,
          setSwappingIndices,
          delay
        );
        break;
      case "heap":
        heapSort(
          array,
          setArray,
          setComparingIndices,
          setSwappingIndices,
          delay
        );
      // add other cases for other sorting algorithms
    }
  };

  useEffect(() => {
    generateArray(50);
  }, []);

  const algorithmInfo: Record<Algorithm, AlgorithmInfo> = {
    bubble: {
      timeComplexity: `Time Complexity: O(n^2)
 Best-Case Scenario: O(n) => (when the array is already sorted)
 Average & Worst-Case: O(n^2)
 Space Complexity: O(1)`,
    },
    merge: {
      timeComplexity: `Time Complexity: O(n log n)
 Best-Case Scenario: O(n log n)
 Average & Worst-Case: O(n log n)
 Space Complexity: O(n)`,
    },
    heap: {
      timeComplexity: `Time Complexity : O(n log n)
  Best , Worst , Average all are same

Building the heap : O(n)
Extracting the heap : O(n log n)

O(n) + O(n log n) = O(n log n)
Space Complexity: O(1)
      `,
    },
    // add other algorithms here
  };

  return (
    <div className="App bg-gray-900 text-white min-h-screen flex flex-col items-center pt-8 overflow-hidden">
      <ControlPanel
        generateArray={generateArray}
        setAlgorithm={setAlgorithm}
        startSorting={startSorting}
      />
      <ArrayVisualizer
        array={array}
        comparingIndices={comparingIndices}
        swappingIndices={swappingIndices}
        className="mt-8"
      />
      <div className="w-full text-center mb-4 flex flex-col items-center mt-8">
        <pre className="bg-gray-800 p-2 rounded whitespace-pre text-sm mt-2">
          {algorithmInfo[algorithm]?.timeComplexity ||
            "Time Complexity not available"}
        </pre>
      </div>
    </div>
  );
};

export default App;
