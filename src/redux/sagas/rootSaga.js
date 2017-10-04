import actionTypes from '../constants';
import { fork, put } from 'redux-saga/effects';

import response from '../../response';

// Симулирует выпад ошибки с вероятностью около 50%
function* getResponse() {
	let selector = yield Math.random();
	if (selector > 0.5) {
		return response
	} else {
		throw new Error();
	}
}

function* start() {
	try {
		const resp = yield getResponse();
		yield put({ type: actionTypes.SET_HOLIDAYS, data: resp.holidays});
		yield put({ type: actionTypes.SET_AVAILABLE_HOURS, data: resp.availableHours});
	} catch(error) {
		alert("An error occurred, try to reload page");
	}
}

export default function* rootSaga() {
	yield fork (start);
}
