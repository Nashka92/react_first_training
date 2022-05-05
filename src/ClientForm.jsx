import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  handleChange = (event) => {
    this.setState({ nouveauClient: event.currentTarget.value });
  };

  //méthode pour ajouter un client
  handleSubmit = (event) => {
    //pour que la page ne se recharge pas
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    this.props.onClientAdd({ id, nom });

    //pour que le champs soit vide
    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.nouveauClient}
          onChange={this.handleChange}
          type="text"
          placeholder="Ajouter un user"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default ClientForm;
