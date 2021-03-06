import React, {Component} from 'react';
import axios from 'axios';
import { Link,browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class UpdateAd extends Component {
  constructor(props) {
      super(props);
      this.state = {title: '', subtitle: '',description: '', status:''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.activate = this.activate.bind(this);
      this.deactivate = this.deactivate.bind(this);
  }


  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/api/ads/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ 
          title: response.data.title,
          subtitle: response.data.subtitle,
          description: response.data.description,
          status: response.data.status
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      title: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      subtitle: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      description: e.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    const ads = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      description: this.state.description
    }
    let uri = MyGlobleSetting.url + '/api/ads/'+this.props.params.id;
    axios.patch(uri, ads).then((response) => {
          browserHistory.push('/display-item');
    });
  }
  
  activate(event) {
    event.preventDefault();
    const ads = {
      id: this.state.id
    }
    let uri = MyGlobleSetting.url + '/api/ads/'+this.props.params.id+'/activate';
    axios.patch(uri, ads).then((response) => {
          browserHistory.push('/display-item');
    });
  }
  
  deactivate(event) {
    event.preventDefault();
    const ads = {
      id: this.state.id
    }
    let uri = MyGlobleSetting.url + '/api/ads/'+this.props.params.id+'/deactivate';
    axios.patch(uri, ads).then((response) => {
          browserHistory.push('/display-item');
    });
  }
  
  render(){
    return (
      <div>
        <h3>Actualizar anuncio {this.state.status}</h3>
        <div className="row form-group">
          <div className="col-md-8"></div>
          <div className="col-md-2">
              {this.state.status == 'Pendiente' || this.state.status == 'Vencido'? (
                <form onSubmit={this.activate}>
                    <button className="btn btn-primary">Activar</button>
                </form>
          ) : ( 
              <form onSubmit={this.deactivate}>
                  <button className="btn btn-danger">Desactivar</button>
              </form>
          ) }
          </div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Volver al anuncio</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Titulo</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={this.state.title} onChange={this.handleChange1} />
                </div>
            </div>


            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Subtitulo</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={this.state.subtitle} onChange={this.handleChange2} />
                </div>
            </div>
            
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Descripcion</label>
                <div className="col-sm-10">
                    <textarea className="form-control"
                    onChange={this.handleChange3} value={this.state.description}></textarea>  
                </div>
            </div>


            <div className="form-group">
                <div className="col-sm-2 offset-sm-5">
                    <button className="btn btn-primary">Actualizar</button>
                </div>
            </div>
        </form>
    </div>
    )
  }
}
export default UpdateAd;