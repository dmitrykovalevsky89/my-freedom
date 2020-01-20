import React from "react";

export class AddClientForm extends React.Component {
  state = {
    name: "",
    phone: "",
    status: "null"
  };

  handleChange = evt => {
    this.setState({ status: evt.target.value });
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
          onChange={e =>
            this.setState({
              phone: e.target.value
            })
          }
        />
        <select onChange={this.handleChange} value={this.state.status}>
          <option value="null">не покупал</option>
          <option value="one">одна покупка</option>
          <option value="more">больше одной покупки</option>
        </select>
        <button
          onClick={() => {
            if (
              this.state.name &&
              this.state.name.trim() &&
              this.state.phone &&
              this.state.phone.trim()
            ) {
              this.props.onSave(
                this.state.name,
                this.state.phone,
                this.state.status
              );
              this.setState({ name: "", phone: "", status: "null" });
            }
          }}
        >
          Add
        </button>
        <button onClick={() => this.props.onCancel()}>Cancel</button>
      </form>
    );
  }
}
