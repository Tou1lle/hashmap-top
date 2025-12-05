function HashMap() {
  let loadFactor = 0.75;
  let capacity = 16;
  const buckets = Array(capacity).fill([]);

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  };

  return { hash }
}

console.log(HashMap().hash("monkey"));
export { HashMap };
