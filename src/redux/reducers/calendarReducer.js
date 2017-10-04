import actionTypes from '../constants';

const initialState = {
	availableHours: [],
	holidays: [],
	selectedDate: '',
	selectedTime: '',
	selectedDay: '',
};

const calendar = (state = initialState, action) => {
	let { holidays, availableHours, selectedDate, selectedTime, selectedDay } = state;
	switch (action.type) {
		case actionTypes.SET_HOLIDAYS:
			holidays = action.data;
			return {...state, holidays};
		case actionTypes.SET_AVAILABLE_HOURS:
			availableHours = action.data;
			return {...state, availableHours};
		case actionTypes.SELECT_DATE:
			selectedDate = action.data;
			selectedDate.set({ 'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0 });
			return {...state, selectedDate};
		case actionTypes.SELECT_TIME:
			selectedTime = action.data;
			selectedDay = selectedDate.set('hour', selectedTime);
			return {...state, selectedTime, selectedDay};
		default:
			return state;
	}
};

export default calendar;
