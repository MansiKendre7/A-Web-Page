import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      contactMethod: '',
      emailAddress: ''
    };
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleContactMethodChange = (event) => {
    this.setState({ contactMethod: event.target.value });
  };

  handleEmailAddressChange = (event) => {
    this.setState({ emailAddress: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form values from this.state

    // Clear the form inputs and reset the state
    this.setState({
      firstName: '',
      lastName: '',
      contactMethod: '',
      emailAddress: ''
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">A Web Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="form-label">
            First Name:
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Last Name:
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            How should we contact you?
            <select
              value={this.state.contactMethod}
              onChange={this.handleContactMethodChange}
              className="form-input"
            >
              <option value="">Choose an option</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
          </label>
          <br />
          {this.state.contactMethod === 'Phone' && (
            <label className="form-label">
              Phone Number:
              <input
                type="text"
                value={this.state.phoneNumber}
                onChange={this.handlePhoneNumberChange}
                className="form-input"
              />
            </label>
          )}
          {this.state.contactMethod === 'Email' && (
            <label className="form-label">
              Email Address:
              <input
                type="text"
                value={this.state.emailAddress}
                onChange={this.handleEmailAddressChange}
                className="form-input"
              />
            </label>
          )}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
