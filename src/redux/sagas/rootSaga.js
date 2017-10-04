import { fork, put } from 'redux-saga/effects';
import response from '../../response';

function* getResponse() {
	let selector = yield Math.random();
	console.log(selector);
	if (selector > 0.5) {
		return response
	} else {
		throw new Error();
	}
}

function* start() {
	try {
		const resp = yield getResponse();
		yield put({ type: 'SET_HOLIDAYS', data: resp.holidays});
		yield put({ type: 'SET_AVAILABLE_HOURS', data: resp.availableHours});
	} catch(error) {
		alert("An error occured, try to reload page");
	}
	// yield put({ type: 'SET_HOLIDAYS', data: response.holidays});
	// yield put({ type: 'SET_AVAILABLE_HOURS', data: response.availableHours});
}

export default function* rootSaga() {
	yield fork (start);
}