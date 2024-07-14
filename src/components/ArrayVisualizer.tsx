import React from "react";

export type ArrayVisualizerType = {
  array: number[];
  className?: string;
  comparingIndices: number[];
  swappingIndices: number[];
};

const ArrayVisualizer: React.FC<ArrayVisualizerType> = ({
  array,
  comparingIndices,
  swappingIndices,
}) => {
  return (
    <div className="array-visualizer flex items-end justify-center h-64 w-full border border-gray-700 mt-8">
      {array.map((value, index) => {
        let bgColor = "bg-blue-500";
        if (comparingIndices.includes(index)) {
          bgColor = "bg-yellow-500";
        }
        if (swappingIndices.includes(index)) {
          bgColor = "bg-red-500";
        }
        return (
          <div
            key={index}
            style={{ height: `${value}%`, width: `${100 / array.length}%` }}
            className={`array-bar ${bgColor}`}
          ></div>
        );
      })}
    </div>
  );
};

export default ArrayVisualizer;
