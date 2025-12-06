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

  const logMap = () => {
    console.log(buckets);
  }

  return { hash, logMap, set, get, has, remove };
}

const hm = HashMap();
hm.set("monkey", "bananas");
hm.set("gorilla", "melons");
hm.logMap();
console.log("Get monkey: " + hm.get("monkey"));
console.log("Get monkeys: " + hm.get("monkeys"));
console.log("Has monkey: " + hm.has("monkey"));
console.log("Has monkeys: " + hm.has("monkeys"));
console.log("Remove monkey: " + hm.remove("monkey"));
console.log("Remove monkeys: " + hm.remove("monkeys"));
hm.logMap();
export { HashMap };
