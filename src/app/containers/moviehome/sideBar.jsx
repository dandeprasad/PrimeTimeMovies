import React from "react";
import { Row, Col} from 'reactstrap';
import { connect } from "react-redux";

import '../../css/moviehome/movie-home.scss';
import PropTypes from 'prop-types';

 class SideBar extends React.Component {

constructor(props) {
  super(props);
  this.toggle = this.toggle.bind(this);

}
componentWillMount() {


}
toggle() {
    this.props.HandleChangeToggle1();
}

    render() {
        return(

            <>
  <div className='sidebar-content' onClick={this.toggle}/>
<div className="movie-sidebar w3-bar-block" id="mySidebar">
<div className="main-side-header">
    <h5>PrimeTimeMovies</h5>
</div>
<hr style={{borderTop:'1px solid #4d5664'}} />
  <a href="#" className="w3-bar-item w3-button">Link 1</a>
  <a href="#" className="w3-bar-item w3-button">Link 2</a>
  <a href="#" className="w3-bar-item w3-button">Link 3</a>
</div>
            </>)
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
         
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
SideBar.propTypes = {
}

