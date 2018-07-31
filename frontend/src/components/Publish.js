import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as recoveryActions from '../actions/recoveryActions.js';

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
    };
  }

  handleSubmit(ev) {
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  onGetDate(ev) {
    const { newBook } = this.props;
    console.log('klk');
    // sendRecoveryEmail(this.state);
    newBook();
  }
  render() {
    const { bookName, content, author, category, format } = this.state;

    const enabled = (
      content.length > 0 && bookName.length > 0 &&
      author.length > 0
    );

    const { errClass, errText } = this.state;
    const { loading } = this.props;

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

                    <div className="input-field col s12">
                      <textarea id="content" name="content" value={this.state.content} onChange={this.handleSubmit.bind(this)} className="materialize-textarea"></textarea>
                      <label htmlFor="content">Content</label>
                    </div>
                  </div>
                </div>

                <div className="card-action">
                {
                  loading && (
                    <div className="preloader-wrapper small active">
                      <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div><div className="gap-patch">
                          <div className="circle"></div>
                        </div><div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>

                      <div className="spinner-layer spinner-red">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div><div className="gap-patch">
                          <div className="circle"></div>
                        </div><div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>

                      <div className="spinner-layer spinner-yellow">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div><div className="gap-patch">
                          <div className="circle"></div>
                        </div><div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>

                      <div className="spinner-layer spinner-green">
                        <div className="circle-clipper left">
                          <div className="circle"></div>
                        </div><div className="gap-patch">
                          <div className="circle"></div>
                        </div><div className="circle-clipper right">
                          <div className="circle"></div>
                        </div>
                      </div>
                    </div>
                  )
                }
                { !loading &&
                  (
                  <button disabled={!enabled} onClick={this.onGetDate.bind(this)} className="btn waves-effect waves-light" type="submit" >Submit
                    <i className="material-icons right">send</i>
                  </button>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    userStatus: state.recovery.userStatus,
    loading: state.recovery.loading,
    loaded: state.recovery.loaded,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(recoveryActions, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Publish));
