import React from "react";

export class AddListItem extends React.Component {
	state = {
		name: "",
		phone: ""
	};

	render() {
		return (
			<form onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					value={this.state.name}
					onChange={e =>
						this.setState({
							name: e.target.value
						})
					}
				/>
				<input
					type="number"
					value={this.state.phone}
					onChange={e => (
						this.setState({
							phone: e.target.value
						})
					)}
				/>
				<button
					onClick={() => {
						if ( (this.state.name && this.state.name.trim()) && (this.state.phone && this.state.phone.trim()) ) {
							this.props.onSave(this.state.name, this.state.phone);
							this.setState({ name: "", phone: "" });
						}
					}}
				>
					Add
				</button>
			</form>
		);
	}
}