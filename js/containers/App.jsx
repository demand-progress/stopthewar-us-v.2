import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer.jsx';
import Main from './Main.jsx'
import { tipeAuth, tipeId } from '../config/keys.js'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      textContent: {
        homeHeader: null,
        subHeader: null,
        disclaimer: null,
        congress: null,
        info: null,
        tweet: null
      }
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    axios({
      method: "get",
      url: 'https://api.tipe.io/api/v1/document/5b96ac8f5e689900130b6e10',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': tipeAuth,
        'Tipe-Id': tipeId
      }
    })
    .then(response => {
      const { data } = response;
      console.log(data)
        this.setState({
        textContent:{
          homeHeader: data.blocks[0].value,
          subHeader: data.blocks[1].value,
          disclaimer: data.blocks[2].value,
          congress: data.blocks[3].value,
          info: data.blocks[4].value,
          tweet: data.blocks[5].value
        },
        loading: false
      }, () => {console.log(this.state)});
    }).catch(console.error);
  }

  render() {
    const {loading} = this.state;
    const {homeHeader, subHeader, disclaimer, congress, info, tweet} = this.state.textContent;

      return (
        <div style={{display: loading ? 'none' : 'block'}}>
          <Main header={homeHeader} subHeader={subHeader} disclaimer={disclaimer} congress={congress} info={info} tweet={tweet}/>
          <Footer tweet={tweet}/>
        </div>
      )
  }
}

export default App;