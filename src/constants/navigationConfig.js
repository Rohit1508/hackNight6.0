export const NAV_LINK_IDS = {
  SCRIP_MASTER: 1,
  PAY_IN: 2,
  PAY_OUT: 3,
  REVENUE: 4,
  TRADES: 5,
  EXCHANGE_STOCK: 6,
  EXCHANGE_FUND: 7,
  FINANCE: 8,
  CHECKLIST: 9
};

const PRIMARY_NAV = {
  SCRIP_MASTER: {
    id: NAV_LINK_IDS.SCRIP_MASTER,
    label: "Scrip Master",
    iconClass: "fa fa-tachometer",
    navigationPath: "/scrip-master",
    permissions: ["SCRIPT_MASTER"]
  },

  PAYIN: {
    id: NAV_LINK_IDS.PAY_IN,
    label: "Pay In",
    iconClass: "fa fa-ticket",
    permissions: ["PAY_IN_BANK"],
    subNavConfig: [
      {
        id: 1,
        label: "Bank Wise",
        navigationPath: "/payin-bank"
      },
      {
        id: 2,
        label: "Client Wise",
        navigationPath: "/payin-client"
      }
    ]
  },
  PAYOUT: {
    id: NAV_LINK_IDS.PAY_OUT,
    label: "Pay Out",
    iconClass: "fa fa-ticket",
    permissions: ["PAY_OUT_BANK"],
    subNavConfig: [
      {
        id: 1,
        label: "Bank Wise",
        navigationPath: "/payout-bank"
      },
      {
        id: 2,
        label: "Client Wise",
        navigationPath: "/payout-client"
      }
    ]
  },

  REVENUE: {
    id: NAV_LINK_IDS.REVENUE,
    label: "Revenue",
    iconClass: "fa fa-ticket",
    permissions: ["REVN_DETS"],
    subNavConfig: [
      {
        id: 1,
        label: "Total Revenue",
        navigationPath: "/revenue"
      },
      {
        id: 2,
        label: "Collection Pending",
        navigationPath: "/collection-pending"
      }
    ]
  },
  TRADES: {
    id: NAV_LINK_IDS.TRADES,
    label: "Trades",
    iconClass: "fa fa-ticket",
    permissions: ["TRADES"],
    subNavConfig: [
      {
        id: 1,
        label: "Dashboard",
        navigationPath: "/trades-dashboard"
      },
      {
        id: 2,
        label: "Today's Trades",
        navigationPath: "/trades-today"
      },
      {
        id: 3,
        label: "Trade's Recon",
        navigationPath: "/trades-recon"
      },
      {
        id: 4,
        label: "Order",
        navigationPath: "/trades-order"
      }
    ]
  },

  EXCHANGE_STOCK: {
    id: NAV_LINK_IDS.EXCHANGE_STOCK,
    label: "Exchange Stock Settlement",
    iconClass: "fa fa-ticket",
    navigationPath: "/exchange-stock",
    permissions: ["STOCK_SETT", "STOCK_SETT_CSV"]
  },

  EXCHANGE_FUND: {
    id: NAV_LINK_IDS.EXCHANGE_FUND,
    label: "Exchange Fund Settlement",
    iconClass: "fa fa-ticket",
    navigationPath: "/exchange-fund",
    permissions: ["FUND_SETT"]
  },

  FINANCE: {
    id: NAV_LINK_IDS.FINANCE,
    label: "Finance",
    iconClass: "fa fa-ticket",
    navigationPath: "/finance",
    permissions: ["FINANCE"]
  },

  CHECKLIST: {
    id: NAV_LINK_IDS.CHECKLIST,
    label: "EOD/BOD Checklist",
    iconClass: "fa fa-ticket",
    navigationPath: "/checklist",
    permissions: ["CHECKLIST"]
  }
};

export default PRIMARY_NAV;
