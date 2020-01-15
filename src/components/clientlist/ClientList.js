import React from "react";
import { AddClientForm } from "./AddClientForm";
import { EditClientForm } from "./EditClientForm";

function addClient(clients, clientToAdd) {
  return [...clients, clientToAdd];
}

function updateClients(clients, id, fieldToUpdate) {
  // Алгоритм обновления такой
  // 1. Копируем весь массив до той задачи, которую нужно изменеить
  // 2. Задачу которую нужно изменить копируем, у копии меняем нужные поля
  // 3. Копию задачи дописываем в копию массива
  // 4. Копируем в массив-копию остаток оригинального массива - все задачи после той, которую нужно обновить

  const clientIndex = clients.findIndex(client => client.id === id); // находим индекс задачи, которую надо обновить по ее id
  const clientToUpdate = clients[clientIndex];
  const clientCopy = { ...clientToUpdate, ...fieldToUpdate }; // копируем задачу которую надо обновить и меняем у нее поля

  return [
    ...clients.slice(0, clientIndex), // копируем массив до обновляемой задачи
    clientCopy, // вставляем копию обновленной задачи
    ...clients.slice(clientIndex + 1) // копируем остаток массива
  ];
}

export class ClientList extends React.Component {
  state = {
    clients: [
      {
        id: 1,
        name: "Name 1",
        phone: "+375291234567",
        status: "null"
      },
      {
        id: 2,
        name: "Name 2",
        phone: "+375291234568",
        status: "one"
      },
      {
        id: 3,
        name: "Name 3",
        phone: "+375291234569",
        status: "more"
      }
    ],
    statusObj: {
      null: "не покупал",
      one: "одна покупка",
      more: "больше одной покупки"
    },
    editedUserId: null,
    shouldShowForm: null
  };

  deleteItem = index => {
    const newItems = [...this.state.clients];
    newItems.splice(index, 1);

    this.setState({
      clients: newItems
    });
  };

  editItem = clientId => {
    this.setState({
      editedUserId: clientId
    });
  };

  addItem = () => {
    this.setState({
      shouldShowForm: true
    });
  };

  nextId = 4;

  render() {
    if (this.state.shouldShowForm) {
      return (
        <AddClientForm
          onSave={(clientName, clientPhone, clientStatus) => {
            const client = {
              id: this.nextId,
              name: clientName,
              phone: clientPhone,
              status: clientStatus
            };

            this.setState({
              clients: addClient(this.state.clients, client),
              shouldShowForm: null
            });

            this.nextId++;
          }}
          onCancel={() =>
            this.setState({
              shouldShowForm: null
            })
          }
        />
      );
    } else if (this.state.editedUserId) {
      return (
        <EditClientForm
          clientObj={
            this.state.clients.find(client => client.id === this.state.editedUserId)
          }
          onSave={(name, phone, status) => {
            const copy = updateClients(this.state.clients, this.state.editedUserId, {
              name,
              phone,
              status
            });

            this.setState({
              clients: copy, // заменяем задачи обновленной копией
              editedUserId: null // обнуляем редактируемую задачу, чтобы спрятать форму редактирования и показать список задач
            });
          }}
          onCancel={() =>
            this.setState({
              editedUserId: null
            })
          }
        />
      );
    }
    return (
      <>
        <button onClick={() => this.addItem()}>Add new client</button>
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
            {this.state.clients.map((client, index) => (
              <tr key={index}>
                <td>{client.id}</td>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{this.state.statusObj[client.status]}</td>
                <td>
                  <button onClick={() => this.editItem(client.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.deleteItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
