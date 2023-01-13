import React from 'react';
class ApiHealth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        fetch("http://localhost:3000/api/v1/health")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }
    render() {
        return <p className = "App-intro" >; { this.state.apiResponse }</p >
    }
}
export default ApiHealth;