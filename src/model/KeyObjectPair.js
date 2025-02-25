/**
 * data = {
 *    "EN" : "iPhone 15"
 *    "BN" : "iPhone 15"
 *  }
 *
 * data keys - can be countryCodes, languageCodes, currencyCodes, marketPlaceCodes
 * innerClass - can be object or primitive value.
 */

class KeyObjectPair {
  constructor(data = {}, InnerClass, type) {
    // Check if type is "array" or undefined
    if (!(type === 'array' || type === undefined)) {
      throw new Error(
        "Invalid KeyObjectPair type. Accepted values are 'array' and undefined.",
      );
    }

    let keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      if (InnerClass) {
        if (type === 'array') {
          this[keys[i]] = data[keys[i]].map((e) => new InnerClass(e));
        } else {
          this[keys[i]] = new InnerClass(data[keys[i]]);
        }
      } else {
        this[keys[i]] = data[keys[i]];
      }
    }
  }
}

export default KeyObjectPair;
