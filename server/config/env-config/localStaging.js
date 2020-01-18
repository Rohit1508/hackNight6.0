const DOMAIN = "https://api-stg-dev.paytmmoney.com";

module.exports = {
  APM_URL: "",
  PORT: 8989,
  API_HOST: {
    STOCK_URL: `${DOMAIN}/backoffice/periscope/v1/settlement`,
    REVENUE_URL: `${DOMAIN}/backoffice/periscope`,
    TRADE_URL: `${DOMAIN}/order/info/past/internal/periscope`,
    AUTH_V2_URL: "https://pf-stg.paytmmoney.com/pf/acl/v1",
    ORDER_URL: `${DOMAIN}/order/info/past/internal/periscope/v1`,
    RUPEE_SEED_URL: `http://rs-oms.stg.equity/RupeeSeedWS/CustomSym?`,
    PAYIN_URL: `${DOMAIN}/fms-internal/periscope/v1/payin`,
    PAYOUT_URL: `${DOMAIN}/fms-internal/periscope/v1/payout`
  },
  SCRIP_DB: {
    HOST: "127.0.0.1",
    USER: "bo_data_admin",
    PASSWORD: "bo_data_admin",
    DATABASE: "bodatadb",
    PORT: 3306
  }
};
