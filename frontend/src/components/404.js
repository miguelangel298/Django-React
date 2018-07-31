import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Error404 extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto text-center mt-5">
          <h1>404 - Pagina no encontrada.</h1>
          <p className="mb-5">Lo sentimos, El enlace que has seguido probablemente está roto, o ya no se encuentra disponible.</p>
          <Link to="/" className="btn btn-green"><i className="fa fa-arrow-left mr-2"></i>Volver al inicio</Link>
          <br/>
            <br/>
          <hr/>
        </div>
      </div>
    );
  }
}
export default withRouter(Error404);
