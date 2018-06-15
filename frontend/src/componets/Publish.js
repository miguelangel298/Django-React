import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { getAvailablePost }  from '../actions/recoveryActions.js';

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: '',
      author: '',
      category: '',
      format: '',
      content: '',
    }
  }
  onGetDate(ev) {
    getAvailablePost().then((result) => {

    });
  }
  render() {
    return (
      <div className="container">
        <div className= "section" >
          <div className="row">
            <div className="col s12 ">
              <div className="card darken-1">
                <div className="card-content ">
                  <span className="card-title">Publish book</span>
                  <div className="row ">
                  <br/>
                    <div className="input-field col s6">
                      <input placeholder="Book name" id="book_name" type="text" className="validate"/>
                      <label htmlFor="book_name">Book name</label>
                    </div>
                    <div className="input-field col s6">
                      <input placeholder="Author" id="author" type="text" className="validate"/>
                      <label htmlFor="author">Author</label>
                    </div>
                    <div className="input-field col s6">
                      <select name="category">
                        <option value="" disabled selected>Select category</option>
                        <option value="1">Stories</option>
                        <option value="2">Science fiction</option>
                        <option value="3">Novels</option>
                      </select>
                      <label htmlFor="author">Category</label>
                    </div>
                    <div className="input-field col s6">
                      <select name="format">
                        <option value="" disabled defaultValue>Select type of format</option>
                        <option value="1">Html</option>
                        <option value="2">Text-plain</option>
                      </select>
                      <label htmlFor="author">Format</label>
                    </div>
                    <div className="input-field col s12">
                      <textarea id="content" name="content" className="materialize-textarea"></textarea>
                      <label htmlFor="content">Content</label>
                    </div>
                  </div>
                </div>
                <div className="card-action">
                  <a onClick={this.onGetDate.bind(this)} >Guardar</a>
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
