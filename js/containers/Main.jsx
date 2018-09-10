import React, { Component } from 'react';
import Markdown from 'react-markdown'
import Form from './Form.jsx';
import Video from './Video.jsx';

class Main extends Component {

    render() {
        const {header, subHeader, disclaimer, congress, info, tweet, callHeader, callSubHeader, afterCallHeader, afterCallContent} = this.props;
        return (
          <div className="unit">
            <div className="hero" id="bftn-action-form">
                <div>
                    <div id="signThePetition">
                        <Form header={header} 
                              subHeader={subHeader} 
                              disclaimer={disclaimer} 
                              congress={congress} 
                              callHeader={callHeader} 
                              callSubHeader={callSubHeader}
                              afterCallContent={afterCallContent}
                              afterCallHeader={afterCallHeader}/>
                    </div>
                </div>
                
                <div className="unit">
                    <Video tweet={tweet} />
                    <Markdown source={info} />
                </div>
            </div>
        </div>);
    }
}

export default Main;