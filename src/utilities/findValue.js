export default function findValue(obj, targetKey) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      const result = findValue(obj[key], targetKey);
      if (result !== undefined) {
        return result;
      }
    } else if (key === targetKey) {
      return obj[key];
    }
  }
}
