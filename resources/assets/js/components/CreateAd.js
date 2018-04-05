import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class CreateAd extends Component {
  constructor(props){
    super(props);
    this.state = {adTitle: '', adSubtitle: '',adDescription:''};


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleChange1(e){
    this.setState({
      adTitle: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      adSubtitle: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      adDescription: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const ads = {
      title: this.state.adTitle,
      subtitle: this.state.adSubtitle,
      description: this.state.adDescription
    }
    let uri = MyGlobleSetting.url + '/api/ads';
    axios.post(uri, ads).then((response) => {
      browserHistory.push('/display-item');
    });
  }


    render() {
      return (
        <div>
            <h3>Crear anuncio</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Titulo</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleChange1} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Subtitulo</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleChange2} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Descripcion</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" onChange={this.handleChange3}></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2 offset-sm-5">
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
      )
    }
}
export default CreateAd;