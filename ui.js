function updateBlockUI(data) {
  showHash(data.hash);
  showTxCount(data.n_tx || 0);
}
