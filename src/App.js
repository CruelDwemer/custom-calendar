import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers';
import './App.css';
import rootSaga from './redux/sagas/rootSaga';
import CalendarComponent from './Components/CalendarComponent';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
    <Provider store={store}>
	    <div className="App">
				<CalendarComponent />
	    </div>
    </Provider>
    );
  }
}

export default App;
