import React from "react";

export class EditClientForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.clientObj.name,
      phone: this.props.clientObj.phone,
      status: this.props.clientObj.status
    };
  }

  handleSave = () => {
    if (
      this.state.name &&
      this.state.name.trim() &&
      this.state.phone &&
      this.state.phone.trim()
    ) {
      this.props.onSave(this.state.name, this.state.phone, this.state.status);
      this.setState({
        name: "",
        phone: "",
        status: "null"
      });
    }
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={evt =>
                    this.setState({
                      name: evt.target.value
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.phone}
                  onChange={evt =>
                    this.setState({
                      phone: evt.target.value
                    })
                  }
                />
              </td>
              <td>
                <select
                  value={this.state.status}
                  onChange={evt =>
                    this.setState({
                      status: evt.target.value
                    })
                  }
                >
                  <option value="null">не покупал</option>
                  <option value="one">одна покупка</option>
                  <option value="more">
                    больше одной покупки
                  </option>
                </select>
              </td>
              <td>
                <button onClick={this.handleSave}>Save</button>
              </td>
              <td>
                <button onClick={() => this.props.onCancel()}>Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}
