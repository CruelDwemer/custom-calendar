import React, { Component } from 'react';
import { OverlayTrigger, ButtonToolbar, Popover, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { selectTime } from '../redux/actions';

class _CalendarElement extends Component {

	renderPopover = () => {
		return(
			<Popover id="popover-trigger-click-root-close" title="Select time!">
				{this.props.availableHours && this.props.availableHours.length > 0
					?
					this.props.availableHours.map(
						(item, index) => (
							<div key={index}><Button onClick={() => this.props.selectTime(item)}>{item}:00</Button></div>
						)
					)
					:
					<strong>no available time</strong>
				}
			</Popover>
		)
	};

	render() {
		return(
			<ButtonToolbar>
				<OverlayTrigger
					trigger="click"
					rootClose
					placement="bottom"
					overlay={this.renderPopover()}
				>
					<div className={this.props.nameOfClass}>
						{this.props.day}
					</div>
				</OverlayTrigger>
			</ButtonToolbar>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		selectTime: data => {
			dispatch(selectTime(data));
		}
	};
};

const CalendarElement = connect(
	null,
	mapDispatchToProps
)(_CalendarElement);

export default CalendarElement
