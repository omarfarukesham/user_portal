export default function getFirstKeyValue(data) {
  const keys = data ? Object.keys(data) : [];
  if (keys.length > 0) {
    const value = data[keys[0]];
    return value;
  } else return null;
}
