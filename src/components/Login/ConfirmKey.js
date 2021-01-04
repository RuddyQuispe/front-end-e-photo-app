import axios from 'axios';
import React, { Component } from 'react'
import config from '../../config/config';

export default class ConfirmKey extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            key: ""
        }
    }

    onChangeEmail = (e) => this.setState({ email: e.target.value });

    onChangeKey = (e) => this.setState({ key: e.target.value });

    handleConfirmKey = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${config.host}/api/auth/confirm_key`, this.state);
        alert(response.data.message);
        if (response.data.message=="Done") {
            this.props.history.push("/new_password");
        }
    }

    render() {
        return (
            <div className="ui-background">
                <div className="container">
                    <div className="abs-center">
                        <form className="bg-light px-4 py-3" onSubmit={this.handleConfirmKey}>
                            <h3>Confirm Key</h3>
                            <div className="form-group form-group-default">
                                <label htmlFor="exampleDropdownFormEmail1">Key</label>
                                <input type="text" className="form-control" id="exampleDropdownFormEmail1" placeholder="Key sent on email" onChange={this.onChangeKey} />
                            </div>
                            <div className="form-group form-group-default">
                                <label>Email</label>
                                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={this.onChangeEmail} />
                            </div>
                            <button type="submit" className="btn btn-primary">Send Key</button>
                        </form>
                        <div className="dropdown-divider" />
                    </div>
                </div>
            </div>
        )
    }
}
