import React from "react";
import { AddListItem } from "./AddListItem";
import { FormEdit } from "./FormEdit";

function addUser(users, userToAdd) {
  return [...users, userToAdd];
}

function updateUsers(users, id, fieldToUpdate) {
  // Алгоритм обновления такой
  // 1. Копируем весь массив до той задачи, которую нужно изменеить
  // 2. Задачу которую нужно изменить копируем, у копии меняем нужные поля
  // 3. Копию задачи дописываем в копию массива
  // 4. Копируем в массив-копию остаток оригинального массива - все задачи после той, которую нужно обновить

  const userIndex = users.findIndex(user => user.id === id); // находим индекс задачи, которую надо обновить по ее id
  const userToUpdate = users[userIndex];
  const userCopy = { ...userToUpdate, ...fieldToUpdate }; // копируем задачу которую надо обновить и меняем у нее поля

  return [
    ...users.slice(0, userIndex), // копируем массив до обновляемой задачи
    userCopy, // вставляем копию обновленной задачи
    ...users.slice(userIndex + 1) // копируем остаток массива
  ];
}

export class Userlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: "Name 1",
          phone: "+375291234567",
          status: "не покупал"
        },
        {
          id: 2,
          name: "Name 2",
          phone: "+375291234568",
          status: "не покупал"
        },
        {
          id: 3,
          name: "Name 3",
          phone: "+375291234569",
          status: "не покупал"
        }
      ],
      itemToEdit: null
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  deleteItem(index) {
    const newItems = [...this.state.users];
    newItems.splice(index, 1);

    this.setState({
      users: newItems
    });
  }

  editItem(userId) {
    this.setState({
      itemToEdit: userId
    });
  }

  nextId = 4;

  render() {
    if (this.state.itemToEdit) {
      return (
        <FormEdit
          nameUser={
            this.state.users.find(user => user.id === this.state.itemToEdit).name
          }
          phoneUser={
            this.state.users.find(user => user.id === this.state.itemToEdit).phone
          }
          onSave={(name, phone) => {
            const copy = updateUsers(this.state.users, this.state.itemToEdit, {
              name,
              phone
            });

            this.setState({
              users: copy, // заменяем задачи обновленной копией
              itemToEdit: null // обнуляем редактируемую задачу, чтобы спрятать форму редактирования и показать список задач
            });
          }}
          onCancel={ () => (
            this.setState({
              itemToEdit: null
            })
          )}
        />
      );
    }
    return (
      <>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {this.state.users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => this.editItem(user.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => this.deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <AddListItem
          onSave={(userName, userPhone, userStatus) => {
            const user = {
              id: this.nextId,
              name: userName,
              phone: userPhone,
              status: userStatus
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
