import React from "react";

import { User } from '../components/User';
import { Main } from '../components/Main';

import { connect } from "react-redux";
import {setName} from "../actions/userActions"
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class App extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

    render() {
        return (
            <div className="container">
                <Main changeUsername={()=> this.props.setName("king")}/>
                <User username={this.props.user.name}/>

            </div>
        );
    }
}
//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state) => {
    return {
        user: state.user,
        math:state.math
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       setName:(name) => {
           dispatch(setName(name));
       }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
