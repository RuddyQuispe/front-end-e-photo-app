import axios from 'axios';
import React, { Component } from 'react'
import config from '../../config/config';

export default class RestoreAccount extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            type_user: "O"
        }
    }

    onChangeEmail = (e) => this.setState({ email: e.target.value });

    onChangeTypeUser = (e) => this.setState({ type_user: e.target.value });

    handleRestoreAccount = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${config.host}/api/auth/restore_account`, {
            email: this.state.email,
            type: (this.state.type_user === "P") ? true : false
        });
        alert(response.data.message);
        this.props.history.push("/login");
    }
    render() {
        return (
            <div className="ui-background">
                <div className="container">
                    <div className="abs-center">
                        <form className="bg-light px-4 py-3" onSubmit={this.handleRestoreAccount}>
                            <h3><b>Restore Account</b></h3>
                            <div className="form-group form-group-default">
                                <label htmlFor="exampleDropdownFormEmail1">Email Account</label>
                                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" onChange={this.onChangeEmail} />
                            </div>
                            <div className="form-group form-group-default">
                                <label>Type User</label>
                                <select className="form-control" id="formGroupDefaultSelect" onChange={this.onChangeTypeUser}>
                                    <option value="O">Organizer Event User</option>
                                    <option value="P">Photographer User</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Email</button>
                        </form>
                        <div className="dropdown-divider" />
                    </div>
                </div>
            </div>
        )
    }
}
