import React from "react";
import { Container, Row, Col,Button,Table ,NavLink} from 'reactstrap';
import { connect } from "react-redux";
import '../css/cutoffs.scss';
import {paramsToHeader } from "../actions/HeaderParams";
import {submitLogin} from "../actions/userActions";
import {Helmet} from "react-helmet";
import { Redirect } from 'react-router';
const PropTypes = window.PropTypes || require('prop-types')

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
class UserLogin extends React.Component {


constructor(props){
super(props);
this.state = {
grant_type:'password',
username:'',
password:'',
errors:{}
}
}

componentWillMount() {


}
changeUserName({ target }){
this.setState({
username: target.value })

}
changeuserPassword({ target }){
this.setState({
password: target.value })

}
clickSubmitLogin (){


 this.props.SubmitReq(this.state);
}
    render() {

        const { isAuthenticated } =this.props.auth;
        if (isAuthenticated) {
          return <Redirect to='/home'/>;
        }


        return (


<Row>

              <div className="card-body">
            <div className="card-title"><h3>User Login</h3></div>
            <div className="row">


                <div className=" col-xs-12 col-sm-12 col-md-12" >
                <div className="form-group ">
            <label forname="UR_NAME" className="bmd-label-floating">User Email<span className="req-ind">*</span></label>
            <input type="text" className="form-control" id="UR_NAME" required={true} value={this.state.username} onChange={ this.changeUserName.bind(this)}/>
            <span className="bmd-help">You need to enter your emailid</span> <br/>
            </div>
                </div>


                <div className=" col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
            <label forname="YOUR_PASSWORD" className="bmd-label-floating">PASSWORD<span className="req-ind">*</span></label>
            <input type="password" className="form-control" id="YOUR_PASSWORD" required={true}  value={this.state.password} onChange={ this.changeuserPassword.bind(this)}/>
            <span className="bmd-help">You need to enter your phone number.</span><br/>
            <span style={{color: "red"}}>{this.props.ErrorMsgph }</span>
            </div>
                </div>
                            </div>
                            <hr/>
                            <button type="submit" onClick={this.clickSubmitLogin.bind(this)}  className="btn btn-primary btn-raised">Submit</button>





            </div>


</Row>
        );
    }
}
const mapStateToProps = (state,ownProps) => {

    return {

        auth:state.user

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       SubmitReq:(datatosend) => {
           dispatch(submitLogin(datatosend));}

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);

UserLogin.propTypes = {
    auth: PropTypes.object.isRequired
}