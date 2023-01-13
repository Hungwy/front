import React from 'react';
class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        fetch("http://localhost:3000/api/v1/users")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }
    render() {
        return <p className = "App-intro" >; { this.state.apiResponse }</p >
    }
}
export default UsersList;