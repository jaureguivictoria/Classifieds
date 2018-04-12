import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class TableRow extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/ads/${this.props.obj.id}`;
    axios.delete(uri).then((response) => {
      browserHistory.push('/');
    });
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.subtitle}
          </td>
          <td>
          <form onSubmit={this.handleSubmit} className="form-inline">
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary mr-2">Actualizar</Link>
           <input type="submit" value="Eliminar" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRow;