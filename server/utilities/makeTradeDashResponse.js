const tradeObject = [
  "total_orders_data",
  "orders_exchange_data",
  "pending_orders",
  "trades_executed",
  "value_of_trades_executed"
];

const tradeKey = [
  {
    label: "Total Orders",
    total: "total_orders",
    nse: "total_nse_orders",
    nse_per: "total_nse_orders_percentage",
    bse: "total_bse_orders",
    bse_per: "total_bse_orders_percent"
  },
  {
    label: "Orders sent to exchange",
    total: "total_orders_exchange",
    nse: "total_nse_orders_exchange",
    nse_per: "total_nse_orders_exchange_percent",
    bse: "total_bse_orders_exchange",
    bse_per: "total_bse_orders_exchange_percent"
  },
  {
    label: "Orders Pending",
    total: "total_pending_orders",
    nse: "total_nse_pending_orders",
    bse: "total_bse_ pending_orders"
  },
  {
    label: "Trades Executed",
    total: "total_orders",
    nse: "total_nse_orders",
    nse_per: "total_nse_orders_percent",
    bse: "total_bse_orders",
    bse_per: "total_bse_orders_percent",
    buy_total: "total_buy_orders",
    buy_nse: "total_nse_buy_orders",
    buy_nse_per: "total_nse_buy_orders_percent",
    buy_bse: "total_bse_buy_orders",
    buy_bse_per: "total_bse_buy_orders_percent",
    sell_total: "total_sell_orders",
    sell_nse: "total_nse_sell_orders",
    sell_nse_per: "total_nse_sell_orders_percent",
    sell_bse: "total_bse_buy_orders",
    sell_bse_per: "total_bse_buy_orders_percent"
  },
  {
    label: "Values of Trade Executed",
    total: "total_orders",
    nse: "total_nse_orders",
    nse_per: "total_nse_orders_percent",
    bse: "total_bse_orders",
    bse_per: "total_bse_orders_percent",
    buy_total: "total_buy_orders",
    buy_nse: "total_nse_buy_orders",
    buy_nse_per: "total_nse_buy_orders_percent",
    buy_bse: "total_bse_buy_orders",
    buy_bse_per: "total_bse_buy_orders_percent",
    sell_total: "total_sell_orders",
    sell_nse: "total_nse_sell_orders",
    sell_nse_per: "total_nse_sell_orders_percent",
    sell_bse: "total_bse_buy_orders",
    sell_bse_per: "total_bse_buy_orders_percent"
  }
];

const makeResponse = response => {
  const orderObj = [];
  for (let i = 0; i < 5; i++) {
    let temp = {
      col_name: tradeKey[i].label,
      col_total: response[tradeObject[i]][tradeKey[i].total],
      col_nse: {
        value: response[tradeObject[i]][tradeKey[i].nse],
        per: response[tradeObject[i]][tradeKey[i].nse_per]
      },
      col_bse: {
        value: response[tradeObject[i]][tradeKey[i].bse],
        per: response[tradeObject[i]][tradeKey[i].bse_per]
      },
      sub: null
    };
    if (i > 2) {
      const subCol = [
        {
          col_name: "Buy",
          col_total: response[tradeObject[i]][tradeKey[i].buy_total],
          col_nse: {
            value: response[tradeObject[i]][tradeKey[i].buy_nse],
            per: response[tradeObject[i]][tradeKey.buy_nse_per]
          },
          col_bse: {
            value: response[tradeObject[i]][tradeKey[i].buy_bse],
            per: response[tradeObject[i]][tradeKey.buy_bse_per]
          }
        },
        {
          col_name: "Sell",
          col_total: response[tradeObject[i]][tradeKey[i].sell_total],
          col_nse: {
            value: response[tradeObject[i]][tradeKey[i].sell_nse],
            per: response[tradeObject[i]][tradeKey[i].sell_nse_per]
          },
          col_bse: {
            value: response[tradeObject[i]][tradeKey[i].sell_bse],
            per: response[tradeObject[i]][tradeKey[i].sell_bse_per]
          }
        }
      ];
      if (response[tradeObject[i]].net_value) {
        subCol.push({
          col_name: "Net",
          col_total: response[tradeObject[i]].net_value.net_value_total_orders,
          col_nse: {
            value: response[tradeObject[i]].net_value.net_value_nse_orders,
            per: undefined
          },
          col_bse: {
            value: response[tradeObject[i]].net_value.net_value_bse_orders,
            per: undefined
          }
        });
      }
      temp.sub = subCol;
    }
    orderObj.push(temp);
  }
  orderObj.push({
    product_type_info: response.product_type_info,
    product_trade_data: response.product_trade_data,
    product_trade_buy_sell_data: response.product_trade_buy_sell_data
  });
  orderObj.push({
    active_customers: response.active_customers,
    total_trades: response.total_value_of_executed_trades
  });
  return orderObj;
};

module.exports = makeResponse;
