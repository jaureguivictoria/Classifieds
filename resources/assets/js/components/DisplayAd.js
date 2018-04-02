import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';
class DisplayAd extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', ads: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/ads')
       .then(response => {
         this.setState({ ads: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.ads instanceof Array){
         return this.state.ads.map(function(object, i){
             return ;

         })
       }
     }


  render(){
    return (
      <div>
        <h1>Ads</h1>


        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Create Ad</Link>
          </div>
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Ad Title</td>
                <td>Ad Subtitle</td>
                <td width="200px">Actions</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayAd;