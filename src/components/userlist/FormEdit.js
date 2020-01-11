import React from "react";

export class FormEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.nameUser,
      phone: this.props.phoneUser
    };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    if (
      this.state.name &&
      this.state.name.trim() &&
      this.state.phone && this.state.phone.trim()
    ) {
      this.props.onSave(this.state.name, this.state.phone);
      this.setState({
        name: "",
        phone: ""
      });
    }
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
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
                  onChange={e =>
                    this.setState({
                      name: e.target.value
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.phone}
                  onChange={e =>
                    this.setState({
                      phone: e.target.value
                    })
                  }
                />
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
