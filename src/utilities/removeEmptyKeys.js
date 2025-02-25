export default function removeEmptyKeys(obj, keyValues = [], keyType) {
  const newObj = { ...obj };
  Object.keys(newObj).forEach((key) => {
    if (!newObj[key]) delete newObj[key];
    if (keyValues.includes(newObj[key])) delete newObj[key];
    if (keyType === 'array') {
      if (!newObj[key].length) delete newObj[key];
    }
  });
  return newObj;
}
