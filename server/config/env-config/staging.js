const DOMAIN = "https://api-eq-stg.paytmmoney.com";
const internalDomain = "http://stg-bo-periscope.equity-bo";

module.exports = {
  APM_URL: "",
  PORT: 3000,
  API_HOST: {
    STOCK_URL: `${internalDomain}/backoffice/periscope/v1/settlement`,
    REVENUE_URL: `${internalDomain}/backoffice/periscope`,
    TRADE_URL: `${DOMAIN}/order/info/past/internal/periscope`,
    AUTH_V2_URL: "https://pf-stg.paytmmoney.com/pf/acl/v1",
    ORDER_URL: `${DOMAIN}/order/info/past/internal/periscope/v1`,
    RUPEE_SEED_URL: `http://rs-oms.stg.equity/RupeeSeedWS/CustomSym?`,
    PAYIN_URL: `${DOMAIN}/fms-internal/periscope/v1/payin`,
    PAYOUT_URL: `${DOMAIN}/fms-internal/periscope/v1/payout`
  },
  SCRIP_DB: {
    HOST: "oms-db.stg.equity",
    USER: "bo_data_admin",
    PASSWORD: "bo_data_admin",
    DATABASE: "bodatadb",
    PORT: 3306
  }
};
