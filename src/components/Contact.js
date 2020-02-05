import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        online: props.online,
      };
    }

render() {
    return  (
    <div className="Contact">
          <img src={this.props.avatar} alt={this.props.name}className="avatar"/>
          <div>
            <h4 className="name">{this.props.name}</h4>
            <div className="status">
                <div className={this.state.online ? "status-online" : "status-offline"}
                onClick={event => {
                    const userStatus = !this.state.online;
                    this.setState({ online: userStatus });
                  }}
                />
                <span className="status-text">
                    {this.state.online ? 'Online' : 'Offline'}
                </span>
            </div>
          </div>
      </div>
      );
}
}
export default Contact;
