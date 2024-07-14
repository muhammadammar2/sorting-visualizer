import React from "react";

export type ArrayVisualizerType = {
  array: number[];
};

const ArrayVisualizer: React.FC<ArrayVisualizerType> = ({ array }) => {
  return (
    <div className="array-visualizer flex items-end justify-center h-64 w-full border border-gray-700">
      {array.map((value, index) => (
        <div
          key={index}
          style={{ height: `${value}%`, width: `${100 / array.length}%` }}
          className="array-bar"
        ></div>
      ))}
    </div>
  );
};

export default ArrayVisualizer;
