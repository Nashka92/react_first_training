import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Anna RAACH" },
      { id: 2, nom: "Jocya RAACH" },
      { id: 3, nom: "Yacine RAACH" }
    ]
  };

  //méthode pour supprimer un client
  handleDelete = (id) => {
    //copie de mon tab
    const clients = [...this.state.clients];
    //méthode findIndex permet de trouver la
    //position d'un élément en particulier dans un tab
    const index = clients.findIndex((client) => client.id === id);

    //suppression de la place
    clients.splice(index, 1);

    //met a jour le state
    this.setState({ clients });
  };

  handleAdd = (client) => {
    //copie de mon tableau
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>

        <ul>
          {this.state.clients.map((client) => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd = {this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
