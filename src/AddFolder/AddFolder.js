import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import NoteContext from "../NoteContext";
import API_BASE from "../config";
import "./AddFolder.css";

export default class AddFolder extends Component {
  static contextType = NoteContext;

  state = { error: null };

  handleSubmit = (e) => {
    e.preventDefault();
    const folder = { name: e.target["folder-name-input"].value };
    this.setState({ error: null });
    fetch(`${API_BASE}/folders`, {
      method: "POST",
      body: JSON.stringify(folder),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res.json();
      })
      .then((folderData) => {
        this.context.addFolder(folderData);
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { error } = this.state;
    return (
      <section className="AddFolder">
        <h2>Create a folder</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="folder-name-input">Name</label>
            <input
              type="text"
              id="folder-name-input"
              name="folder-name-input"
              required
            />
          </div>
          <div className="buttons">
            <button type="submit">Add folder</button>
          </div>
          {error && (
            <p className="error" role="alert">
              {error.message || error.error}
            </p>
          )}
        </NotefulForm>
      </section>
    );
  }
}
