const scripMasterQuery = {
  getStockDetails: ({
    exchange,
    instrument,
    segment,
    series,
    stenabledtus,
    name
  }) => `SELECT *
  FROM equity_scrip_master
  where exchange${exchange ? `='${exchange}'` : ` like '%'`}
    and segment${instrument ? `='${instrument}'` : ` like '%'`}
    and instrument${segment ? `='${segment}'` : ` like '%'`}
    and series${series ? `='${series}'` : ` like '%'`}
    and stenabledtus${stenabledtus ? `='${stenabledtus}'` : ` like '%'`}
    and name like '${name}%'
   `,
  getFilterOptions: () =>
    `SELECT distinct exchange,segment,instrument,series,stenabledtus FROM equity_scrip_master`
};

module.exports = scripMasterQuery;
