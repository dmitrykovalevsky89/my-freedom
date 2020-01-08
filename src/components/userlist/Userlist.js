import React from "react";
import { AddListItem } from "./AddListItem";

function addUser(users, userToAdd) {
  return [...users, userToAdd];
}

export class Userlist extends React.Component {
  state = {
    users: [
      {
        id: 1,
        name: "Name 1",
        phone: "+375291234567"
      },
      {
        id: 2,
        name: "Name 2",
        phone: "+375291234568"
      },
      {
        id: 3,
        name: "Name 3",
        phone: "+375291234569"
      }
    ]
  };

  nextId = 4;

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddListItem
            onSave={ (userName, userPhone) => {
              const user = {
                id: this.nextId,
                name: userName,
                phone: userPhone
              };

              this.setState({
                users: addUser(this.state.users, user)
              });

              this.nextId++;
            }}
        />
      </>
    );
  }
}
