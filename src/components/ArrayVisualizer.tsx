import React from "react";

export type ArrayVisualizerType = {
  array: number[];
  className?: string;
};

const ArrayVisualizer: React.FC<ArrayVisualizerType> = ({ array }) => {
  return (
    <div className="array-visualizer flex items-end justify-center h-64 w-full border border-gray-700 mt-8">
      {array.map((value, index) => (
        <div
          key={index}
          style={{ height: `${value}%`, width: `${100 / array.length}%` }}
          className="array-bar bg-blue-500"
        ></div>
      ))}
    </div>
  );
};

export default ArrayVisualizer;
