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
               return <TableRow obj={object} key={i} />;
           })
       }
     }


  render(){
    return (
      <div>
        <h3>Anuncios</h3>

        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Titulo</td>
                <td>Subtitulo</td>
                <td width="200px">Acciones</td>
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