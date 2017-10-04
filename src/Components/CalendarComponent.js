import React, { Component } from 'react';
import Calendar from 'rc-calendar';
import moment from 'moment';
import { connect } from 'react-redux';

import CalendarElement from './CalendarElement';
import { selectDate } from '../redux/actions';

class _CalendarComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: moment(),
		};
	}

	isHoliday = (date) => {
		if (this.props.holidays) {
			if (this.props.holidays.find(item => moment(item.holiday).isSame(date, "day"))) {
				return true;
			}
		}
		return false;
	};

	getAvailableHours = (date) => {
		if (this.props.availableHours) {
			let result = this.props.availableHours.find(item => moment(item.date).isSame(date, "day"));
			if (result) {
				return result.hours;
			} else {
				return null;
			}
		}
		return null;
	};

	render() {
		console.log('props', this.props);
		return(
			<div>
				<Calendar
					className="calendar"
					dateRender={(value, selected) => {
						if (this.isHoliday(value)) {
							return(
							<CalendarElement nameOfClass="holiday" day={value.date()} availableHours={this.getAvailableHours(value)}/>)
						}
						if (value.isSame(selected)) {
							return(
								<CalendarElement
									nameOfClass="selected"
									day={value.date()}
									availableHours={this.getAvailableHours(value)}
								/>
							)
						}
						return(<CalendarElement nameOfClass="regular" day={value.date()} availableHours={this.getAvailableHours(value)}/>)
					}
					}
					onSelect={(date) =>{
						this.props.selectDate(date);
					}}
					showDateInput={false}
				/>
				<input
					className="input"
					value={this.props.selectedDay ? this.props.selectedDay.format() : ""}
					placeholder="Select day and time"
				  readOnly
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		holidays: state.calendar.holidays,
		availableHours: state.calendar.availableHours,
		selectedDay: state.calendar.selectedDay,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		selectDate: data => {
			dispatch(selectDate(data));
		}
	};
};

const CalendarComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(_CalendarComponent);

export default CalendarComponent;
