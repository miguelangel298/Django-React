import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Link } from 'react-router-dom';
import * as recoveryActions from '../actions/recoveryActions.js';
import jwt from 'jsonwebtoken';
const TOKEN_SECRET = '9d^9osok^__39na*3f5wtlh!5g5(*$yifh7@n(7rr*lm5q&^9s';

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      oldPassword: '',
      errClass: '',
      errText: '',
    };
  }
  onFormSubmit(ev) {
    ev.preventDefault();
    const { username, oldPassword } = this.state;
    const { history, passUsername, checkUserPassword, newBook } = this.props;
    if ((!username || username.length === 0) || (!oldPassword || oldPassword.length === 0)) {
      this.setState({
        errClass: 'invalid',
      })
    } else {
        const app = this;
          const userAndPasswordToken = jwt.sign({
            usuario: username,
            password: oldPassword,
          }, TOKEN_SECRET, { expiresIn: 86400 * 10 });
          newBook();
          checkUserPassword(userAndPasswordToken).then((obj, nombreUsuario) => {
            if (obj.block && obj.block.length > 0) {
              app.setState({
                errClass: 'invalid',
                errText: 'Este usuario se encuentra bloqueado durante una hora.',
              });
            }
            else if (obj.STATUS !== 1) {
              app.setState({
                errClass: 'invalid',
                errText: 'Estas credenciales no coinciden con nuestros registros.',
              });
            } else {
              passUsername(username);
              history.push('/cambio');
            }
          });
    }
  }
  onOldPasswordChange(ev) {
    const oldPassword = ev.target.value;
    if (oldPassword.length > 0) {
      this.setState({
        errClass: '',
      });
    } else {
      this.setState({
        errClass: 'invalid',
        matchPassErr: true,
      });
    }
    this.setState({
      oldPassword,
    });
  }
  onUsernameChange(ev) {
    const username = ev.target.value;
    if (username.length > 0) {
      this.setState({
        errClass: '',
        errText: '',
      });
    } else {
      this.setState({
        errClass: 'invalid',
      });
    }
    this.setState({
      username,
    });
  }
  render() {
    const { errClass, errText } = this.state;
    const { loading } = this.props;

    return (
      <div className="row">
        <div className="col-md-6 col-lg-4 col-sm-8 mx-auto my-5">
          <div className="card p-3">
            <div className="card-title">
              <h4 className="mt-3">Cambiar Contraseña</h4>
              <hr/>
            </div>
            <div className="card-body m-0">
                <div className="alert alert-primary mb-5" role="alert">
                  <small>Al intentar 3 veces el usuario será bloqueado por una hora.</small>
                </div>
              <form onSubmit={this.onFormSubmit.bind(this)}>
                <div className="md-form">
                    <input type="text" id="inputLGEx" className={`form-control form-control-lg  ${errClass}`} onChange={this.onUsernameChange.bind(this)} />
                    <label htmlFor="inputLGEx">Escribe tu nombre de usuario</label>
                  </div>
                  <div className="md-form">
                      <input type="password" id="oldpass" className={`form-control form-control-lg ${errClass}`} onChange={this.onOldPasswordChange.bind(this)} />
                      <label htmlFor="oldpass">Escribe tu contraseña</label>
                  </div>
                  <small className="text-danger">{errText}</small>
                  <div className="mt-5">
                    <Link to="/verificacion-email">¿Has olvidado tu contraseña?</Link>
                  </div>
                <div className="form-group mt-5 text-right">
                  {
                    !loading && (
                        <div className="preloader-wrapper mr-5 active">
                              <div className="spinner-layer spinner-blue-only">
                                  <div className="circle-clipper left">
                                      <div className="circle"></div>
                                  </div>
                                  <div className="gap-patch">
                                      <div className="circle"></div>
                                  </div>
                                  <div className="circle-clipper right">
                                      <div className="circle"></div>
                                  </div>
                              </div>
                        </div>
                    )
                  }
                  { !loading &&
                    (
                      <button type="submit" className="btn btn-green" onClick={this.onFormSubmit.bind(this)}>Siguiente<i className="fa fa-arrow-right ml-2"></i></button>

                    )
                  }
                </div>
              </form>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inicio));
