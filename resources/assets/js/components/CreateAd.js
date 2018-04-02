import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class CreateAd extends Component {
  constructor(props){
    super(props);
    this.state = {adTitle: '', adSubtitle: ''};


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
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
  handleSubmit(e){
    e.preventDefault();
    const ads = {
      title: this.state.adTitle,
      subtitle: this.state.adSubtitle
    }
    let uri = MyGlobleSetting.url + '/api/ads';
    axios.post(uri, ads).then((response) => {
      browserHistory.push('/display-item');
    });
  }


    render() {
      return (
      <div>
        <h1>Create Ad</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Ad Title:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Ad Subtitle:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleChange2}></textarea>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Ad</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateAd;