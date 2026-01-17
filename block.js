async function loadBlock() {
  const blockNumber = document.getElementById("blockInput").value;

  if (!isValidBlock(blockNumber)) {
    alert("Invalid block number");
    return;
  }

  const data = await fetchBlock(blockNumber);
  updateBlockUI(data);
}
