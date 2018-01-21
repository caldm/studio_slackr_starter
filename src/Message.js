import './Message.css';
import React from 'react';

export default class Message extends React.Component {
  render() {
    var renderedDate = (new Date(this.props.value.timestamp)).toLocaleString();
    var renderedContents = this.props.value.image_source ? 
          <div className="Message-image"><img src={this.props.value.image_source} alt={this.props.value.contents} /></div> :
          <div className="Message-contents">{this.props.value.contents}</div>;
    return (
      <div className="Message">
        <div>
          <span className="Message-author">{this.props.value.author}</span>
          <span className="Message-timestamp">
            {renderedDate}
          </span>
        </div>
        {renderedContents}
      </div>
    );
  }
}
