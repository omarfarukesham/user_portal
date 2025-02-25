export default function formDataAppendFilesOnly(
  obj,
  formData = new FormData(),
  parentKey = '',
) {
  for (let key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const fullKey = parentKey
        ? Array.isArray(obj)
          ? `${parentKey}[${key}]`
          : `${parentKey}.${key}`
        : key;

      if (value instanceof File) {
        formData.append(fullKey, value);
      } else if (
        value instanceof Object &&
        !(value instanceof File) &&
        !(value instanceof Blob)
      ) {
        formDataAppendFilesOnly(value, formData, fullKey);
      }
    }
  }
  return formData;
}
