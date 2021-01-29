import React from "react";

import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import {Helmet} from "react-helmet";
import '../css/home.scss';
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class PrivacyPolicy extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

    render() {
        return (
            <div className="container">
            <Row>
            <Helmet>
                            <meta charSet="utf-8" />
                            <title>College explore privacy</title>
                            <meta name="description" content="Dande reddy prasad ,Siva Ganesh" />
                            <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>

                            <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                            <meta property="og:site_name" content="Collegeexplore"/>
                            <meta property="og:type" content="website"/>
                            <meta property="og:url" content="http://collegeexplore.in"/>
                            <meta property="og:title" content="College explore privacy"/>
                            <meta property="og:description" content="College explore privacy"/>
                        </Helmet>

                <Col xs="12" sm="12" md="12">

                <h2>Privacy Policy</h2> <p> Dande Redy Prasad built the collegeexplore app as a Free app. This SERVICE is provided by Dande Redy Prasad at no cost and is intended for use as is.
                    </p> <p>This page is used to inform website visitors regarding my policies with the collection, use, and
                      disclosure of Personal Information if anyone decided to use my Service.
                    </p> <p>If you choose to use my Service, then you agree to the collection and use of information in relation
                      to this policy. The Personal Information that I collect is used for providing and improving the
                      Service. I will not use or share your information with anyone except as described
                      in this Privacy Policy.
                    </p> <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible
                      at collegeexplore unless otherwise defined in this Privacy Policy.
                    </p> <p><strong>Information Collection and Use</strong></p> <p>For a better experience, while using our Service, I may require you to provide us with certain
                      personally identifiable information, including but not limited to Collecting users audio for searching colleges. The information that I request is retained on your device and is not collected by me in any way
                    </p> <p>The app does use third party services that may collect information used to identify you.</p> <div><p>Link to privacy policy of third party service providers used by the app</p> <ul><li><a href="https://www.google.com/policies/privacy/" target="_blank">Google Play Services</a></li></ul></div> <p><strong>Log Data</strong></p> <p> I want to inform you that whenever you use my Service, in a case of an
                      error in the app I collect data and information (through third party products) on your phone
                      called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address,
                      device name, operating system version, the configuration of the app when utilizing my Service,
                      the time and date of your use of the Service, and other statistics.
                    </p> <p><strong>Cookies</strong></p> <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These
                      are sent to your browser from the website that you visit and are stored on your device internal memory.
                    </p> <p>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries
                      that use “cookies” to collection information and to improve their services. You have the option to either
                      accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to
                      refuse our cookies, you may not be able to use some portions of this Service.
                    </p> <p><strong>Service Providers</strong></p> <p> I may employ third-party companies and individuals due to the following reasons:</p> <ul><li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li> <li>To perform Service-related services; or</li> <li>To assist us in analyzing how our Service is used.</li></ul> <p> I want to inform users of this Service that these third parties have access to your
                      Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they
                      are obligated not to disclose or use the information for any other purpose.
                    </p> <p><strong>Security</strong></p> <p> I value your trust in providing us your Personal Information, thus we are striving
                      to use commercially acceptable means of protecting it. But remember that no method of transmission over
                      the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee
                      its absolute security.
                    </p> <p><strong>Changes to This Privacy Policy</strong></p> <p> I may update our Privacy Policy from time to time. Thus, you are advised to review
                      this page periodically for any changes. I will notify you of any changes by posting
                      the new Privacy Policy on this page. These changes are effective immediately after they are posted on
                      this page.
                    </p> <p><strong>Contact Us</strong></p> <p>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact
                      me at <b>teamcollegeexplore@collegeexplore.in</b>.
                    </p>
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
export default connect(mapStateToProps,mapDispatchToProps)(PrivacyPolicy);
