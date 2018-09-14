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
        tweet: null,
        callHeader: null,
        callSubHeader: null,
        afterCallHeader: null,
        afterCallContent: null
      }
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    axios({
      method: "get",
      url: 'https://api.tipe.io/api/v1/document/5b9c0821536f820013841535',
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
          homeHeader: data.blocks[0].value
          // subHeader: data.blocks[1].value,
          // disclaimer: data.blocks[2].value,
          // congress: data.blocks[3].value,
          // info: data.blocks[4].value,
          // tweet: data.blocks[5].value,
          // callHeader: data.blocks[6].value,
          // callSubHeader: data.blocks[7].value,
          // afterCallHeader: data.blocks[8].value,
          // afterCallContent: data.blocks[9].value
        },
        loading: false
      }, () => {console.log(this.state)});
    }).catch(console.error);
  }

  render() {
    const {loading} = this.state;
    const {homeHeader, subHeader, disclaimer, congress, info, tweet, callHeader, callSubHeader, afterCallContent, afterCallHeader} = this.state.textContent;

      return (
        <div style={{display: loading ? 'none' : 'block'}}>
          <Main header={homeHeader} 
                subHeader={subHeader} 
                disclaimer={disclaimer} 
                congress={congress} info={info} 
                tweet={tweet} callHeader={callHeader} 
                callSubHeader={callSubHeader}
                afterCallContent={afterCallContent}
                afterCallHeader={afterCallHeader}/>
          <Footer tweet={tweet}/>
        </div>
      )
  }
}

export default App;