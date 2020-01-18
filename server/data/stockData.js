/* export const stockData = { upcoming: [], historical: [] };
export const detailsData = { data: { normal_trades: [], t2t_trades: [] } };
export const payShortage = { data: { trades: [] } };
export const recieveShortage = { data: { trades: [] } };
for (let i = 0; i < 5; i++) {
  const obj = {};
  obj.trade_date = `0${i + 1}-08-2019`;
  obj.settlement_date = "07-08-2019";
  obj.payable_qty = "200";
  obj.receiable_qty = "100";
  obj.payable_shortage_qty = "6";
  obj.receivable_shortage_qty = "8";
  stockData.upcoming.push(obj);
}
for (let i = 0; i < 20; i++) {
  const obj = {};
  obj.trade_date = "14-09-2019";
  obj.settlement_date = "16-09-2019";
  obj.payable_qty = "300";
  obj.receiable_qty = "200";
  obj.payable_shortage_qty = "3";
  obj.receivable_shortage_qty = "4";
  stockData.historical.push(obj);
}

for (let i = 0; i < 100; i++) {
  const obj = {};
  obj.isin = "INE516E01019";
  obj.stock_name = "ABB";
  obj.buy_qty = 10;
  obj.sell_qty = 15;
  obj.buy_value = 1000;
  obj.sell_value = 1500;
  obj.net_payable_qty = 5;
  detailsData.data.normal_trades.push(obj);
}

for (let i = 0; i < 100; i++) {
  const obj = {};
  obj.isin = "INE516E01019";
  obj.stock_name = "ABB";
  obj.sell_qty = 15;
  obj.sell_value = 1500;
  obj.net_payable_qty = 5;
  detailsData.data.t2t_trades.push(obj);
}

for (let i = 0; i < 100; i++) {
  const obj = {};
  obj.isin = "INE516E01019";
  obj.stock_name = "ABB";
  obj.payable_qty = 5;
  obj.shortage = 1;
  obj.payable_amount = 100.15;
  payShortage.data.trades.push(obj);
}

for (let i = 0; i < 100; i++) {
  const obj = {};
  obj.isin = "INE516E01019";
  obj.stock_name = "ABB";
  obj.receivable_qty = 105;
  obj.shortage = 1;
  obj.received_amount = 100.15;
  recieveShortage.data.trades.push(obj);
}
 */
-------------------------------



export const collectionData = {  total_collections_pending: 337090876.50, total_record_count: 5, dues: [] };
for (let i = 0; i < 5; i++) {
  const obj = {};
  obj.client_id= "INE516E01019"
  obj.total_dues =  123.90,
  obj.beneficiary_holdings = 10.10,
  obj.client_holdings = 15.20,
  obj.poa_enabled = "yes",
  obj.last_traded_date = "20-09-2019"
  collectionData.dues.push(obj);
}