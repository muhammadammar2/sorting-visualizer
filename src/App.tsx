import React, { useEffect, useState } from "react";
import { bubbleSort } from "./sortingAlgorithms/bubbleSort";
import ControlPanel from "./components/ControlPanel";
import ArrayVisualizer from "./components/ArrayVisualizer";

const App = () => {
  const [array, setArray] = useState<number[]>([]);
  const [algorithm, setAlgorithm] = useState<Algorithm>("bubble");
  const [comparingIndices, setComparingIndices] = useState<number[]>([]);
  const [swappingIndices, setSwappingIndices] = useState<number[]>([]);
  const [delay, setDelay] = useState<number>(30); // delay in ms for visualization

  type Algorithm = "bubble" | "merge"; // add other algos types here

  interface AlgorithmInfo {
    pseudocode: string;
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
      // add other cases for other sorting algorithms
    }
  };

  useEffect(() => {
    generateArray(50);
  }, []);

  const algorithmInfo: Record<Algorithm, AlgorithmInfo> = {
    bubble: {
      pseudocode: `
    for i = 0 to n - 1
    for j = 0 to n - i - 1
    if (array[j] > array[j + 1])
    swap(array[j], array[j + 1])
    `,
      timeComplexity: `
        Time Complexity : O(n^2)
         Best-Case Scenario : O(n) => (when the array is already sorted)
         Average & Worst-Case : O(n^2)
         Space Complexity : O(1)
      `,
    },
    merge: {
      pseudocode: `
      function mergeSort(arr)
        if length(arr) <= 1
          return arr
        mid = length(arr) / 2
        left = mergeSort(arr[0...mid])
        right = mergeSort(arr[mid...end])
        return merge(left, right)
    `,
      timeComplexity: `
        //here

      `,
    },
    // add other algorithms here
  };

  return (
    <div className="App bg-gray-900 text-white min-h-screen flex flex-col items-center pt-8">
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

      <div className="w-full text-center mb-8">
        <pre className="bg-gray-800 p-4 rounded whitespace-pre">
          {algorithmInfo[algorithm]?.pseudocode || "Pseudocode not available"}
        </pre>
        <pre className="bg-gray-800 p-4 rounded whitespace-pre mt-4">
          {algorithmInfo[algorithm]?.timeComplexity ||
            "Time Complexity not available"}
        </pre>
      </div>
    </div>
  );
};

export default App;
