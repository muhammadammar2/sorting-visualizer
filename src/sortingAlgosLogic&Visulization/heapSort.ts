const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const heapify = async (
  array: number[],
  n: number,
  i: number,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setComparingIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappingIndices: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  setComparingIndices([i, left, right]);

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }
  if (largest !== i) {
    setSwappingIndices([i, largest]);
    [array[i], array[largest]] = [array[largest], array[i]];
    setArray([...array]);
    await sleep(delay);
    setSwappingIndices([]);
    await heapify(
      array,
      n,
      largest,
      setArray,
      setComparingIndices,
      setSwappingIndices,
      delay
    );
  }

  setComparingIndices([]);
};

export const heapSort = async (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setComparingIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappingIndices: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
) => {
  const n = array.length;

  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(
      array,
      n,
      i,
      setArray,
      setComparingIndices,
      setSwappingIndices,
      delay
    );
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    setSwappingIndices([0, i]);
    [array[0], array[i]] = [array[i], array[0]];
    setArray([...array]);
    await sleep(delay);
    setSwappingIndices([]);
    await heapify(
      array,
      i,
      0,
      setArray,
      setComparingIndices,
      setSwappingIndices,
      delay
    );
  }

  setComparingIndices([]);
};
