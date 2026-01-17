async function fetchBlock(blockNumber) {
  const url = BLOCK_API + blockNumber;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
