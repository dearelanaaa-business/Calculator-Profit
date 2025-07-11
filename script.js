function autoCalculate() {
  const packs8 = parseInt(document.getElementById("packs8").value);
  const packs350 = parseInt(document.getElementById("packs350").value);
  const customPrice = parseFloat(document.getElementById("customPrice").value);
  const customQty = parseInt(document.getElementById("customQty").value);
  const customBasePrice = parseFloat(document.getElementById("customBasePrice").value);

  const revenue8 = !isNaN(packs8) ? packs8 * 8 : 0;
  const revenue350 = !isNaN(packs350) ? packs350 * 3.50 : 0;
  const revenueCustom = (!isNaN(customPrice) && !isNaN(customQty)) ? customPrice * customQty : 0;

  const profitPerItem = (!isNaN(customPrice) && !isNaN(customBasePrice)) ? customPrice - customBasePrice : null;
  const totalProfitCustom = (!isNaN(profitPerItem) && !isNaN(customQty)) ? profitPerItem * customQty : null;

  const totalRevenue = revenue8 + revenue350 + revenueCustom;

  document.getElementById("revenue8").value = packs8 ? revenue8.toFixed(2) : "-";
  document.getElementById("revenue350").value = packs350 ? revenue350.toFixed(2) : "-";
  document.getElementById("revenueCustom").value = (!isNaN(customPrice) && !isNaN(customQty)) ? revenueCustom.toFixed(2) : "-";
  document.getElementById("profitPerItem").value = profitPerItem !== null ? profitPerItem.toFixed(2) : "-";
  document.getElementById("totalProfitCustom").value = totalProfitCustom !== null ? totalProfitCustom.toFixed(2) : "-";
  document.getElementById("totalRevenue").value = totalRevenue > 0 ? totalRevenue.toFixed(2) : "-";
}

function clearAll() {
  const fields = [
    "packs8", "packs350", "customPrice", "customQty", "customBasePrice",
    "revenue8", "revenue350", "revenueCustom",
    "profitPerItem", "totalProfitCustom", "totalRevenue"
  ];

  fields.forEach(id => {
    const input = document.getElementById(id);
    input.value = input.readOnly ? "-" : "";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  ["packs8", "packs350", "customPrice", "customQty", "customBasePrice"].forEach(id => {
    document.getElementById(id).addEventListener("input", autoCalculate);
  });
  document.getElementById("clearButton").addEventListener("click", clearAll);
});
