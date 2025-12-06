function HashMap() {
  let loadFactor = 0.75;
  let capacity = 16;
  let buckets = Array(capacity).fill().map(u => []);

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= capacity;
    }

    return hashCode;
  };

  function getBucket(key) {
    const index = hash(key) % capacity;
    return buckets[index];
  };

  function getEntry(bucket, key) {
    for (const entry of bucket) {
      if (entry.key === key) {
        return entry;
      }
    }

    return null;
  };

  function set(key, value) {
    const bucket = getBucket(key);
    const entry = getEntry(bucket, key);
    if (entry) {
      entry.value = value;
      return;
    }
    bucket.push({key, value});
  };

  function get(key) {
    const bucket = getBucket(key);
    const entry = getEntry(bucket, key);
    if (entry) {
      return entry.value;
    }

    return null;
  }

  function has(key) {
    const bucket = getBucket(key);
    const entry = getEntry(bucket, key)
    return entry ? true : false;
  }

  function remove(key) {
    const bucket = getBucket(key);
    const entry = getEntry(bucket, key);
    if (!entry) return false;

    const index = bucket.findIndex(entry => entry.key === key);
    bucket.splice(index, 1);
    return true;
  }

  function length() {
    return buckets.reduce((accumulator, currentBucket) => accumulator + currentBucket.length, 0);
  }

  function clear() {
    buckets.forEach(bucket => bucket.splice(0, bucket.length));
  }

  function keys() {
    return buckets.reduce((accumulator, currentBucket) => {
      currentBucket.forEach(entry => accumulator.push(entry.key));
      return accumulator;
    }, [])
  }

  function values() {
    return buckets.reduce((accumulator, currentBucket) => {
      currentBucket.forEach(entry => accumulator.push(entry.value));
      return accumulator;
    }, [])
  }

  function entries() {
    return buckets.reduce((accumulator, currentBucket) => {
      currentBucket.forEach(entry => accumulator.push([entry.key, entry.value]));
      return accumulator;
    }, [])
  }

  function getGeneralLength() {
    return buckets.reduce((accumulator, currentBucket) => {
      if (currentBucket.length != 0) accumulator++;
      return accumulator;
    }, 0)
  }

  const logMap = () => {
    console.log(buckets);
  }

  return { hash, logMap, set, get, has, remove, length, clear, keys, values, entries, getGeneralLength };
}

/*
const hm = HashMap();
console.log("HashMap length: (0) " + hm.length());
console.log("All keys: " + hm.keys());
console.log("All values: " + hm.values());
console.log(hm.entries());
hm.set("monkey", "bananas");
hm.set("gorilla", "melons");
console.log("All keys: " + hm.keys());
console.log("All values: " + hm.values());
console.log(hm.entries());
console.log("HashMap length (2): " + hm.length());
hm.logMap();
console.log("Get monkey: " + hm.get("monkey"));
console.log("Get monkeys: " + hm.get("monkeys"));
console.log("Has monkey: " + hm.has("monkey"));
console.log("Has monkeys: " + hm.has("monkeys"));
console.log("Remove monkey: " + hm.remove("monkey"));
console.log("Remove monkeys: " + hm.remove("monkeys"));
console.log("HashMap length (1): " + hm.length());
hm.logMap();
hm.set("monkey", "banana");
hm.set("dog", "treat");
hm.set("cat", "pussy");
hm.logMap();
console.log("Length before clear: " + hm.length());
hm.clear();
hm.logMap();
console.log("Length after clear: " + hm.length());
hm.set("monkey", "banana");
hm.set("dog", "treat");
hm.set("cat", "pussy");
hm.set("gorilla", "melons");
hm.set("monkey", "bananas");
hm.logMap();
console.log("All keys: " + hm.keys());
console.log("All values: " + hm.values());
console.log(hm.entries());
*/
export { HashMap };
