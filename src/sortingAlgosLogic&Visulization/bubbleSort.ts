const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const bubbleSort = async (
  array: number[],
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setComparingIndices: React.Dispatch<React.SetStateAction<number[]>>,
  setSwappingIndices: React.Dispatch<React.SetStateAction<number[]>>,
  delay: number
) => {
  let n = array.length;
  let swapped: boolean;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      setComparingIndices([j, j + 1]);
      if (array[j] > array[j + 1]) {
        setSwappingIndices([j, j + 1]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
      setArray([...array]);
      await sleep(delay);
      setSwappingIndices([]);
    }
    if (!swapped) break;
  }
  setComparingIndices([]);
};
