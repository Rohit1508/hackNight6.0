export const EA_STATUS = {
	NOT_APPLIED: -1,
	WAITING_LIST: 0,
	ACCESS_GRANTED: 1,
	LOGGED_IN_POST_ACCESS: 2,
};

export const EA_STATUS_DISPLAY_TEXT = {
	[EA_STATUS.NOT_APPLIED]: 'Not Applied',
	[EA_STATUS.WAITING_LIST]: 'Waiting List',
	[EA_STATUS.ACCESS_GRANTED]: 'Access Granted (not logged-in)',
	[EA_STATUS.LOGGED_IN_POST_ACCESS]: 'Logged-in after Access',
};

export const READINESS_STATUS = {
	NOT_READY: 0,
	READY: 1,
};

export const THEME_STATUS = {
	DRAFT: 'draft',
	DUE_TO_BE_PUBLISHED: 'dueToBePublished',
	ACTIVE: 'active',
	INACTIVE: 'inactive',
};

export const THEME_DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
