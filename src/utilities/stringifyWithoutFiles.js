export default function stringifyWithoutFiles(data) {
  function removeFiles(obj) {
    for (let key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (value instanceof File) {
          delete obj[key];
        } else if (
          value instanceof Object &&
          !(value instanceof File) &&
          !(value instanceof Blob)
        ) {
          removeFiles(value);
        }
      }
    }
  }

  const dataCopy = { ...data }; // Create a shallow copy to avoid modifying the original object
  removeFiles(dataCopy);
  return JSON.stringify(dataCopy);
}
