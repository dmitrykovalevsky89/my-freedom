import React from "react";
import "./input.css";

class Input extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			value: '',
			label: 'Введите номер',
			clsName: 'normal'
		};

		this.handleChange = this.handleChange.bind(this);
		this.validPhone = this.validPhone.bind(this);
	}

	// Сложность с регуляркой
	validPhone(evt) {
		const validTest = /^\+375\[25|29]?|[33|44]?\d{12}$/;
		// const validTest = /^\+\/375\/25|29\/\d{7}$/;
		return validTest.test(evt);
	};

	handleChange(evt) {
		const validTest = /^\+\d*\.?\d*$/; // if only "+" and number

		// console.log(validTest.test(evt.target.value));
		if (validTest.test(evt.target.value)) {
			this.setState({
				value: evt.target.value
			});

			// console.log(this.validPhone(evt.target.value));

		} else {
			this.setState({
				label: 'Вводить только в формате +375...'
			});
		}

		// console.log(evt.target.value);
	};

	render() {
		return (
			<>
				<label>{this.state.label}</label><br/>
				<input
					type="text"
					placeholder="+375..."
					maxLength="13"
					className={this.state.clsName}
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</>
		);
	}
}

export default Input;