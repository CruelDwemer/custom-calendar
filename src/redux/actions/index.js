import actionTypes from '../constants';

export const setAvailableHours = (data) => ({
	type: actionTypes.SET_AVAILABLE_HOURS,
	data
});

export const setHolidays = (data) => ({
	type: actionTypes.SET_HOLIDAYS,
	data
});

export const selectDate = (data) => ({
	type: actionTypes.SELECT_DATE,
	data
});

export const selectTime = (data) => ({
	type: actionTypes.SELECT_TIME,
	data
});