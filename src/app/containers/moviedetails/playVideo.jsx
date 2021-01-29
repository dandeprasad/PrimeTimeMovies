import React from "react";
import { Row, Col } from 'reactstrap';

import { connect } from "react-redux";
import '../../css/userprofile/user-home.scss';
import saahoBanner from "../../img/saaho-review-banner.jpg";
import { Progress } from 'reactstrap';
import PXVideo from '../PXVideo';
import captions from "../../img/captions_PayPal_Austin_en.vtt";
import PropTypes from 'prop-types';

class PlayVideo extends React.Component {

  constructor(props) {
    super(props);

  }
  componentWillMount() {

  }

  render() {

  return (

<>
<div className='container-fluid'>
<PXVideo
  sources={[
    "https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/primetimemovies/Saaho+Trailer+-+Telugu+-+Prabhas+-+Shraddha+Kapoor+-+Sujeeth+-+%23SaahoTrailer+-+UV+Creations.mp4",
    "https://www.paypalobjects.com/webstatic/mktg/videos/PayPal_AustinSMB_baseline.webm"
  ]}
  caption={{
    label: "English captions",
    src: captions,
    lang: "en",
    default: true
  }}
  poster={saahoBanner}
 
  controls
  id="myvid"
  fallback
  debug
/>

</div>
</>


);
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
export default connect(mapStateToProps,mapDispatchToProps)(PlayVideo);
PlayVideo.propTypes = {
  
}
