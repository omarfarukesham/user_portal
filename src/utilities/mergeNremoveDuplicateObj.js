function mergeAndRemoveDuplicateObjects(array1, array2) {
  const mergedArray = [...array1, ...array2];
  const uniqueObjects = new Set();
  const result = [];

  mergedArray.forEach((obj) => {
    const stringifiedObj = JSON.stringify(obj);
    if (!uniqueObjects.has(stringifiedObj)) {
      uniqueObjects.add(stringifiedObj);
      result.push(obj);
    }
  });

  return result;
}

export default mergeAndRemoveDuplicateObjects;
