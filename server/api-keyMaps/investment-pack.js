const packDetailsReqKeyMap = {
	ipName: 'name',
	description: 'description',
	riskCategoryId: 'riskMode',
	publishDate: 'publishDate',
	createdById: 'createdById',
	/* reviewDate: null, */
	sipBasePrice: 'sipBasePrice',
	lumpsumBasePrice: 'lumpsumBasePrice' /* approvedBy: "approvedBy", */,
	packPaymentType: (query) => query.paymentType.toUpperCase(),
	schemes: (query) => query.schemes.map((scheme) => ({
		isin: scheme.isin,
		weightage: scheme.allocation,
	})),
};

const packDetailsResKeyMap = {
	name: 'ipName',
	description: 'description',
	imageUrl: 'imageUrl',
	riskMode: 'riskCategoryId',
	createdById: 'createdById',
	publishDate: 'publishDate',
	sipBasePrice: 'sipBasePrice',
	lumpsumBasePrice: 'lumpsumBasePrice',
	status: 'status' /*   approvedBy: "approvedBy", */,
	/*   paymentType: query => query.paymentType.toLowerCase(),
   */ schemes: (query) => query.schemes.map((scheme) => ({
		isin: scheme.isin,
		fundName: scheme.fundName,
		allocation: scheme.weightage,
		sipAllowed: scheme.sipAllowed,
		lumpsumAllowed: scheme.lumpsumAllowed,
		sipInvestmentAmt: (scheme.weightage * query.sipBasePrice) / 100,
		lumpsumInvestmentAmt: (scheme.weightage * query.lumpsumBasePrice) / 100,
		sip: {
			amountInMultiplesOf: scheme.purchase.sip.length
				? scheme.purchase.sip[0].amountInMultiplesOf
				: 0,
			maximumInvestment: scheme.purchase.sip.length
				? scheme.purchase.sip[0].maximumInvestment
				: 0,
			minimumInvestment: scheme.purchase.sip.length
				? scheme.purchase.sip[0].minimumInvestment
				: 0,
		},
		lumpsum: {
			minimumInvestment: scheme.purchase.lumpsum.minimumInvestment,
			maximumInvestment: scheme.purchase.lumpsum.maximumInvestment,
			amountInMultiplesOf: scheme.purchase.lumpsum.amountInMultiplesOf,
		},
	})),
};

const allowedActionsResKeyMap = {
	update: 'update',
	approve: 'approve',
	publish: 'publish',
};

const schemeForInvestPacKResMap = {
	isin: 'isin',
	fundName: 'fundName',
	allocation: () => 0,
	investmentAmt: () => 0,
	sipAllowed: 'sipAllowed',
	lumpsumAllowed: 'lumpsumAllowed',
	sip: (query) => (query.sipAllowed
		? {
			amountInMultiplesOf: query.purchase.sip[0].amountInMultiplesOf,
			maximumInvestment: query.purchase.sip[0].maximumInvestment,
			minimumInvestment: query.purchase.sip[0].minimumInvestment,
		}
		: {}),
	lumpsum: (query) => (query.lumpsumAllowed
		? {
			minimumInvestment: query.purchase.lumpsum.minimumInvestment,
			maximumInvestment: query.purchase.lumpsum.maximumInvestment,
			amountInMultiplesOf: query.purchase.lumpsum.amountInMultiplesOf,
		}
		: {}),
};

module.exports = {
	packDetailsReqKeyMap,
	packDetailsResKeyMap,
	allowedActionsResKeyMap,
	schemeForInvestPacKResMap,
};
