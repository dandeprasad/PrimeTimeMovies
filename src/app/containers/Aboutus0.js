import React from "react";

import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import '../css/home.scss';
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class Aboutus extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

    render() {
        return (
            <div className="container">
            <Row>
            <Helmet>
                            <meta charSet="utf-8" />
                            <title>College explore Developers</title>
                            <meta name="description" content="Dande reddy prasad ,Siva Ganesh" />
                            <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>

                            <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                            <meta property="og:site_name" content="Collegeexplore"/>
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content="http://collegeexplore.in"/>
                            <meta property="og:title" content="College explore Developers"/>
                            <meta property="og:description" content="College explore Developers"/>
                        </Helmet>

                <Col xs="12" sm="12" md="12">

                <h2><span className="header-style"/ >Our Vision</h2>
                  <ul>
                  <li>
                Our vision is to empower students to make their own
        					correct choices in life in a faster, better and wiser fashion.
                  </li>
                  </ul>
                </Col>
                <Col xs="12" sm="12" md="12">

            <h2> <span className="header-style" />   Our Mission  </h2>
            <ul>
          <li>  <p>  We want to be a bridge between students and Other side of world. </p>
          </li>
          <li><p>
            Our content obtained from the most authentic source, the
            					collegeexplore will provide you information about the colleges
            					,placements, cut-off, current affairs and much more.
            </p></li>
            </ul>
                </Col>
                <Col xs="12" sm="12" md="12">
              <p><span className="header-style" /><b>For any info or queries contact us at :</b>
				dandereddyprasad@collegeexplore.in</p>
			<p><span className="header-style" /><b>Developers:</b> Dande Reddy Prasad,Siva Ganesh,Damoji
				Pathivada</p>
                </Col>
</Row>
            </div>
        );
    }
}
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
export default connect(mapStateToProps,mapDispatchToProps)(Aboutus);
