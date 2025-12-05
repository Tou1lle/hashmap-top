function HashMap() {
  let loadFactor = 0.75;
  let capacity = 16;
  const buckets = Array(capacity).fill([]);

  console.log(buckets, loadFactor, capacity);
}

HashMap();
export { HashMap };
