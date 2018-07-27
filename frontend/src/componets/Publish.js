import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getAvailablePost } from '../actions/recoveryActions.js';

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      author: '',
      category: '',
      format: '',
      content: '',
      valid: true
    }
  }

  handleSubmit(ev) {
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  onGetDate(ev) {
    console.log(this.state);
  }
  render() {
    const { bookName, content, author, category, format } = this.state;

    const enabled = (
      content.length > 0 && bookName.length > 0 &&
      author.length > 0 && category.length > 0 &&
      format.length > 0
    );

    return (
      <div className="container">
        <div className="section" >
          <div className="row">
            <div className="col s12 ">
              <div className="card darken-1">
                <div className="card-content ">
                  <span className="card-title">Publish book</span>
                  <div className="row ">
                    <br />
                    <div className="input-field col s6">
                      <input value={this.state.bookName} onChange={this.handleSubmit.bind(this)} placeholder="Book name" id="book_name" name="bookName" type="text" className="validate" />
                      <label htmlFor="book_name">Book name</label>
                    </div>
                    <div className="input-field col s6">
                      <input value={this.state.author} placeholder="Author" id="author" onChange={this.handleSubmit.bind(this)} name="author" type="text" className="validate" />
                      <label htmlFor="author">Author</label>
                    </div>
                    <div className="input-field col s6">
                      <select name="category" value={this.state.category} onChange={this.handleSubmit.bind(this)}>
                        <option value="" disabled selected>Select category</option>
                        <option value="1">Stories</option>
                        <option value="2">Science fiction</option>
                        <option value="3">Novels</option>
                      </select>
                      <label htmlFor="author">Category</label>
                    </div>
                    <div className="input-field col s6">
                      <select name="format" value={this.state.format} onChange={this.handleSubmit.bind(this)}>
                        <option value="0">Select type of format</option>
                        <option value="1">Html</option>
                        <option value="2">Text-plain</option>
                      </select>
                      <label htmlFor="author">Format</label>
                    </div>
                    <div className="input-field col s12">
                      <textarea id="content" name="content" value={this.state.content} onChange={this.handleSubmit.bind(this)} className="materialize-textarea"></textarea>
                      <label htmlFor="content">Content</label>
                    </div>
                  </div>
                </div>
                <div className="card-action">
                  <button disabled={!enabled} onClick={this.onGetDate.bind(this)} className="btn waves-effect waves-light" type="submit" >Submit
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter((Publish));
