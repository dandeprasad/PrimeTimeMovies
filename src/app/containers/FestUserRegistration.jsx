import React from "react";
import PropTypes from 'prop-types';
import { AddEvent } from '../components/festsreg/AddEvent';
import { PersonalInfo } from '../components/festsreg/PersonalInfo';
import { CollegeInfo } from '../components/festsreg/CollegeInfo';
import { AddWorkShop } from '../components/festsreg/AddWorkshop';
import { FestInfo } from '../components/festsreg/FestInfo';
import { AddPaperPresent } from '../components/festsreg/AddPaperPresent';
import { FestOthers } from '../components/festsreg/Others';
import { FestLinks } from '../components/festsreg/FestLinks';
import { connect } from "react-redux";
import {festSubmitReq } from "../actions/FestRegisAction"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import '../css/festregistration.scss';

   class FestUserRegistration extends React.Component {

  constructor(props) {
    super(props);


   this.state = {
    numChildren: 1,
     numWChildren: 1,
     numWChildren:1,
     numPChildren:1,
      errors: {UR_NAME:' ',UR_EMAIL_ADDRS:' ',UR_EMAIL_ADDRS:' '},
UR_NAME:'', UR_EMAIL_ADDRS:'', YOUR_PH_NUMBER:'',CLG_NAME:'',CLG_TYPE:'',CLG_WEBSITE:'',CLG_EMAILID:'',CLG_PH_NUM:'',CLG_LOC:'',HW_REACH:'',CLG_CITY:'',CLG_STATE:'',
FEST_NAME:'',FEST_CAPTION:'',FEST_TYPE:'',FEST_DESC:'',FEST_WEBSITE:'',FEST_DEPRT:'',FEST_ST_DATE:'', FEST_END_DATE:'',FEST_REG_URL:'',FEST_ACC:'',FEST_EMAIL_ADD:'',
selectedFile:'' ,FEST_GUEST:'' ,FEST_SPONSERS:'', DEADLINE_REG :'',REG_FEE:'', FEST_CONT_PERSN:'',
CLG_WEBSITE1:'',FEST_WEBSITE1:'',FACEBOOK_LINK:'',TWITTER_LINK:'',YOUTUBE_LINK:'',
events:{},
workshops:{},
paperPersn:{}

  }
  }



validateField(field, value) {


  switch(field) {
    case 'UR_EMAIL_ADDRS':
    const  emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        !emailValid ? this.setState(prevState => ({ errors:{...prevState.errors,UR_EMAIL_ADDRS : 'Please Enter a valid Email'}})) : this.setState(prevState => ({ errors:{...prevState.errors,UR_EMAIL_ADDRS : ''}})) ;
     // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
      case 'UR_NAME' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, UR_NAME : 'Username cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,UR_NAME : ''}})) ;
     break;
      case 'YOUR_PH_NUMBER' :
     value.length != 10 ?  this.setState(prevState => ({ errors:{...prevState.errors,YOUR_PH_NUMBER : 'Phone Number should have 10 digits'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,YOUR_PH_NUMBER : ''}})) ;
break;
     case 'CLG_NAME' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,CLG_NAME : 'College Name cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,CLG_NAME : ''}})) ;
     break;

      case 'CLG_TYPE' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,CLG_TYPE : 'College Type cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,CLG_TYPE : ''}})) ;
     break;

            case 'CLG_WEBSITE1' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,CLG_WEBSITE1 : 'College Website cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,CLG_WEBSITE1 : ''}})) ;
     break;
         case 'CLG_WEBSITE' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,CLG_WEBSITE : 'College Website cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,CLG_WEBSITE : ''}})) ;
     break;

         case 'CLG_EMAILID':
    const  emailValid1 = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        !emailValid1 ? this.setState(prevState => ({ errors:{...prevState.errors,CLG_EMAILID : 'Please Enter a valid Email'}})) : this.setState(prevState => ({ errors:{...prevState.errors,CLG_EMAILID : ''}})) ;

      break;

         case 'CLG_PH_NUM' :
     value.length != 10 ? this.setState(prevState => ({ errors:{...prevState.errors,CLG_PH_NUM : 'Phone Number should have 10 digits'}})) : this.setState(prevState => ({ errors:{...prevState.errors,CLG_PH_NUM : ''}})) ;
break;
      case 'CLG_LOC' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,CLG_LOC : 'College Location cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,CLG_LOC : ''}})) ;
     break;
         case 'HW_REACH' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,HW_REACH : 'How to Reach Us cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,HW_REACH : ''}})) ;
     break;
      case 'FEST_NAME' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_NAME : 'How to Fest Name cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_NAME : ''}})) ;
     break;
         case 'FEST_CAPTION' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_CAPTION : 'How to Fest Caption cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_CAPTION : ''}})) ;
     break;
        case 'FEST_DESC' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_DESC : 'How to Fest Description cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_DESC : ''}})) ;
     break;
        case 'FEST_WEBSITE' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_WEBSITE : 'How to Fest Website cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_WEBSITE : ''}})) ;
     break;
        case 'FEST_WEBSITE1' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_WEBSITE1 : 'How to Fest Website cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_WEBSITE1 : ''}})) ;
     break;
        case 'FEST_DEPRT' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_DEPRT : 'How to Fest Department cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_DEPRT : ''}})) ;
     break;
        case 'FEST_ST_DATE' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_ST_DATE : 'How to Fest Start Date cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_ST_DATE : ''}})) ;
     break;
      case 'FEST_END_DATE' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_END_DATE : 'How to Fest End Date cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_END_DATE : ''}})) ;
     break;
           case 'FEST_REG_URL' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_REG_URL : 'How to Fest Registration URL cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_END_DATE : ''}})) ;
     break;
        case 'FEST_ACC' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_ACC : 'How to Fest Accomadation cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_ACC : ''}})) ;
     break;
         case 'FEST_EMAIL_ADD' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors,FEST_EMAIL_ADD : 'How to Fest Email address cannot be empty'}})) : this.setState(prevState => ({ errors:{...prevState.errors,FEST_EMAIL_ADD : ''}})) ;
     break;

     default:
      break;
  }
}


    handleFestSubmit (){


    const  fd = new FormData();
    fd.append('image',this.state.selectedFile);
fd.append('UR_NAME',this.state.UR_NAME);


            const datatosend = {
      UR_NAME: this.state.UR_NAME,
      UR_EMAIL_ADDRS:this.state.UR_EMAIL_ADDRS,
      YOUR_PH_NUMBER:this.state.YOUR_PH_NUMBER,
      SELECTTED_FILE:fd

    };

     this.props.festSubmitReq(this.state);
  }




//Click events Start
    addEventClick(){
   this.setState({
      numChildren: this.state.numChildren + 1
    });
    }
    removeEventClick(){
   this.setState({
      numChildren: this.state.numChildren - 1
    });
    }

        addWorkshopClick(){
   this.setState({
      numWChildren: this.state.numWChildren + 1
    });
    }
    removeWorkshopClick(){
   this.setState({
      numWChildren: this.state.numWChildren - 1
    });
    }
        addPaperPresentClick(){
   this.setState({
      numPChildren: this.state.numPChildren + 1
    });
    }
   removePaperPresentClick(){
   this.setState({
      numPChildren: this.state.numPChildren - 1
    });
    }
//Click events Ends
    onChangeSetEventData(id , setData){
this.setState(
        prevState => ({ events:{...prevState.events,[id] :setData}}))

    }
        onChangeSetWorkshopData(id , setData){
this.setState(
        prevState => ({ workshops:{...prevState.workshops,[id] :setData}}))

    }
            onChangeSetPaperPresData(id , setData){
this.setState(
        prevState => ({ paperPersn:{...prevState.paperPersn,[id] :setData}}))

    }

    render() {

const addEvent = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {

        // this.setState({["EVENT_COORD_NAME"+{i}]: "" });
        // this.setState({["EVENT_COORD_EMAIL"+{i}]: "" });
        // this.setState({["EVENT_COORD_PHNO"+{i}]: "" });
        // this.setState({["EVENT_DESC"+{i}]: "" });
        // this.setState({["EVENT_RULES_FORMAT"+{i}]: "" });

      addEvent.push(<AddEvent key={i} number={i}
         datatopass={this.onChangeSetEventData.bind(this)}
      />);
    };
const addWorkShop = [];

    for (var i = 0; i < this.state.numWChildren; i += 1) {
      addWorkShop.push(<AddWorkShop key={i} number={i}
       datatopass={this.onChangeSetWorkshopData.bind(this)}
       />);
    };
    const addPaperPresent = [];

    for (var i = 0; i < this.state.numPChildren; i += 1) {
      addPaperPresent.push(<AddPaperPresent key={i} number={i}
       datatopass={this.onChangeSetPaperPresData.bind(this)}
       />);
    };
        return (


<Container>
<Card id="fests-card">
<h2>Fest Registration</h2>

<PersonalInfo UR_NAME = {this.state.UR_NAME} UR_EMAIL_ADDRS = {this.state.UR_EMAIL_ADDRS}  YOUR_PH_NUMBER = {this.state.YOUR_PH_NUMBER} ErrorMsg = {this.state.errors.UR_NAME} ErrorMsgem = {this.state.errors.UR_EMAIL_ADDRS} ErrorMsgph = {this.state.errors.YOUR_PH_NUMBER}
HandleEmChange = {({ target }) => {
 this.validateField('UR_EMAIL_ADDRS',target.value);
  this.setState({

   UR_EMAIL_ADDRS: target.value
  })
} }
HandlephChange = {({ target }) => {
      this.validateField('YOUR_PH_NUMBER',target.value);
  this.setState({
   YOUR_PH_NUMBER: target.value
  })
} }
HandleChange = {({ target }) => {
    this.validateField('UR_NAME',target.value);

      this.setState({
   UR_NAME: target.value
  })



} } />

<CollegeInfo CLG_NAME = {this.state.CLG_NAME} CLG_TYPE = {this.state.CLG_TYPE}  CLG_WEBSITE = {this.state.CLG_WEBSITE} CLG_EMAILID = {this.state.CLG_EMAILID}
CLG_PH_NUM = {this.state.CLG_PH_NUM} CLG_LOC = {this.state.CLG_LOC} HW_REACH = {this.state.HW_REACH}CLG_CITY = {this.state.CLG_CITY} CLG_STATE = {this.state.CLG_STATE}
ErrorMsgclgName = {this.state.errors.CLG_NAME} ErrorMsgclgType = {this.state.errors.CLG_TYPE} ErrorMsgclgWeb = {this.state.errors.CLG_WEBSITE}
ErrorMsgClgEmail = {this.state.errors.CLG_EMAILID}  ErrorMsgClgPhno = {this.state.errors.CLG_PH_NUM} ErrorMsgclgLoc = {this.state.errors.CLG_LOC}
ErrorMsgHowtoReach = {this.state.errors.HW_REACH}

HandleChangeclgName = {({ target }) => {
 this.validateField('CLG_NAME',target.value);
  this.setState({

   CLG_NAME: target.value
  })
} }
HandleChangeclgType = {({ target }) => {
      this.validateField('CLG_TYPE',target.value);
  this.setState({
   CLG_TYPE: target.value
  })
} }
HandleChangeclgWeb = {({ target }) => {
    this.validateField('CLG_WEBSITE',target.value);

      this.setState({
   CLG_WEBSITE: target.value
  })
}}

HandleChangeClgEmail = {({ target }) => {
    this.validateField('CLG_EMAILID',target.value);

      this.setState({
   CLG_EMAILID: target.value
  })
}}

HandleChangeClgPhno = {({ target }) => {
    this.validateField('CLG_PH_NUM',target.value);

      this.setState({
   CLG_PH_NUM: target.value
  })
}}

HandleChangeclgLoc = {({ target }) => {
    this.validateField('CLG_LOC',target.value);

      this.setState({
   CLG_LOC: target.value
  })
}}

HandleChangeHowtoReach = {({ target }) => {
    this.validateField('HW_REACH',target.value);

      this.setState({
   HW_REACH: target.value
  })
}}
HandleChangeClgState = {({ target }) => {

      this.setState({
   CLG_STATE: target.value
  })
}}
HandleChangeClgCity = {({ target }) => {


      this.setState({
  CLG_CITY: target.value
  })
}}
/>


<FestInfo  FEST_LOGO_IMG={this.state.FEST_LOGO_IMG} FEST_BANNER_IMG={this.state.FEST_BANNER_IMG}  FEST_NAME = {this.state.FEST_NAME} FEST_CAPTION = {this.state.FEST_CAPTION}  FEST_TYPE = {this.state.FEST_TYPE}
 FEST_DESC = {this.state.FEST_DESC} FEST_WEBSITE = {this.state.FEST_WEBSITE}  FEST_DEPRT = {this.state.FEST_DEPRT}
  FEST_ST_DATE = {this.state.FEST_ST_DATE} FEST_END_DATE = {this.state.FEST_END_DATE}  FEST_REG_URL = {this.state.FEST_REG_URL}
  FEST_ACC = {this.state.FEST_ACC} FEST_EMAIL_ADD = {this.state.FEST_EMAIL_ADD}FEST_IMAGES = {this.state.FEST_IMAGES} FEST_BANNER_IMG = {this.state.FEST_BANNER_IMG}


  ErrorMsgfestName = {this.state.errors.FEST_NAME} ErrorMsgfestCap = {this.state.errors.FEST_CAPTION} ErrorMsgclgWeb = {this.state.errors.FEST_TYPE}
ErrorMsgClgEmail = {this.state.errors.FEST_DESC}  ErrorMsgClgPhno = {this.state.errors.FEST_WEBSITE} ErrorMsgclgLoc = {this.state.errors.FEST_DEPRT}
ErrorMsgHowtoReach = {this.state.errors.FEST_ST_DATE} ErrorMsgClgEmail = {this.state.errors.FEST_END_DATE}  ErrorMsgClgPhno = {this.state.errors.FEST_REG_URL} ErrorMsgclgLoc = {this.state.errors.FEST_ACC}
ErrorMsgHowtoReach = {this.state.errors.FEST_EMAIL_ADD}


HandleChangefestName = {({ target }) => {
 this.validateField('FEST_NAME',target.value);
  this.setState({

   FEST_NAME: target.value
  })
} }

HandleFestLogo = {({ target }) => {

this.setState({
           FEST_LOGO_IMG: target.files

      });

  }}

  HandleFestBanner = {({ target }) => {

  this.setState({
             FEST_BANNER_IMG: target.files

        });

    }}
HandleFestImages= {({ target }) => {
  this.setState({

   FEST_IMAGES: target.files
  })
} }


HandleChangefestCap = {({ target }) => {
      this.validateField('FEST_CAPTION',target.value);
  this.setState({
   FEST_CAPTION: target.value
  })
} }
HandleChangefestType = {({ target }) => {
    this.validateField('FEST_TYPE',target.value);

      this.setState({
   FEST_TYPE: target.value
  })

} }

HandleChangefestDesc = {({ target }) => {
    this.validateField('FEST_DESC',target.value);

      this.setState({
   FEST_DESC: target.value
  })


} }

HandleChangefestWeb = {({ target }) => {
    this.validateField('FEST_WEBSITE',target.value);

      this.setState({
   FEST_WEBSITE: target.value
  })


} }

HandleChangefestDept = {({ target }) => {
    this.validateField('FEST_DEPRT',target.value);

      this.setState({
   FEST_DEPRT: target.value
  })


} }
HandleChangefestStDate = {({ target }) => {
    this.validateField('FEST_ST_DATE',target.value);

      this.setState({
   FEST_ST_DATE: target.value
  })


} }
HandleChangefestEdDate = {({ target }) => {
    this.validateField('FEST_END_DATE',target.value);

      this.setState({
   FEST_END_DATE: target.value
  })


} }
HandleChangefestRegUrl = {({ target }) => {
    this.validateField('FEST_REG_URL',target.value);

      this.setState({
   FEST_REG_URL: target.value
  })


} }

HandleChangefestAcc = {({ target }) => {
    this.validateField('FEST_ACC',target.value);

      this.setState({
   FEST_ACC: target.value
  })


} }
HandleChangefestEmAddrs = {({ target }) => {
    this.validateField('FEST_EMAIL_ADD',target.value);

      this.setState({
   FEST_EMAIL_ADD: target.value
  })


} }
/>



<CardBody>
<CardTitle><h3>Event Information</h3></CardTitle>
 <Row>


					<Col xs="12" sm="12"md="2">
				<button type="submit" onClick={this.addEventClick.bind(this)}  className="btn btn-primary btn-raised">ADD EVENT</button>
					</Col>
							<Col xs="12" sm="12"md="2">
						<button type="submit" onClick={this.removeEventClick.bind(this)} className="btn btn-primary btn-raised">REMOVE EVENT</button>
						</Col>
                        <Col xs="12" sm="12"md="10">
					</Col>
                      <Col xs="12" sm="12"md="12">
                        <p style={{color:"red"}}>(All actions apply only to entries with check marked check boxes.)</p>

</Col>
{addEvent}

                     </Row>
                        <hr/>





</CardBody>

{/* workshops */}

<div className="card-body">
<div className="card-title"><h3>Workshop Information</h3></div>
<div className="row">


						<div className=" col-xs-12 col-sm-12 col-md-2" >
				<button type="submit" onClick={this.addWorkshopClick.bind(this)}  className="btn btn-primary btn-raised">ADD WORKSHOP</button>
						</div>
						<div className=" col-xs-12 col-sm-12 col-md-1">
						<button type="submit" onClick={this.removeWorkshopClick.bind(this)} className="btn btn-primary btn-raised">REMOVE WORKSHOP</button>
						</div>
					<div className=" col-xs-12 col-sm-12 col-md-10">

						</div>
                        <div className=" col-xs-12 col-sm-12 col-md-12">
                        <p style={{color:"red"}}>(All actions apply only to entries with check marked check boxes.)</p>
                        </div>

{addWorkShop}

                        </div>
                        <hr/>





</div>


<div className="card-body">
<div className="card-title"><h3>Paper Persentaion Information</h3></div>
<div className="row">


						<div className=" col-xs-12 col-sm-12 col-md-3" >
				<button type="submit" onClick={this.addPaperPresentClick.bind(this)}  className="btn btn-primary btn-raised">ADD PAPER PERSENTATION</button>
						</div>
						<div className=" col-xs-12 col-sm-12 col-md-1">
						<button type="submit" onClick={this.removePaperPresentClick.bind(this)} className="btn btn-primary btn-raised">REMOVE PAPER PERSENTATION</button>
						</div>
					<div className=" col-xs-12 col-sm-12 col-md-10">

						</div>
                        <div className=" col-xs-12 col-sm-12 col-md-12">
                        <p style={{color:"red"}}>(All actions apply only to entries with check marked check boxes.)</p>
                        </div>

{addPaperPresent}

                        </div>
                        <hr/>





</div>
<FestOthers FEST_GUEST = {this.state.FEST_GUEST} FEST_SPONSERS = {this.state.FEST_SPONSERS}  DEADLINE_REG = {this.state.DEADLINE_REG}
REG_FEE = {this.state.REG_FEE} FEST_CONT_PERSN = {this.state.FEST_CONT_PERSN}
HandleChangefestGuest = {({ target }) => {

  this.setState({

   FEST_GUEST: target.value
  })
} }
HandleChangeFestspons = {({ target }) => {

  this.setState({
   FEST_SPONSERS: target.value
  })
} }
HandleChangeDeadRegis = {({ target }) => {


      this.setState({
   DEADLINE_REG: target.value
  })} }
HandleChangeRegFee = {({ target }) => {


      this.setState({
   REG_FEE: target.value
  })} }
  HandleChangeFestContPrsn = {({ target }) => {


      this.setState({
   FEST_CONT_PERSN: target.value
  })


} } />


<FestLinks CLG_WEBSITE1 = {this.state.CLG_WEBSITE1} FEST_WEBSITE1 = {this.state.FEST_WEBSITE1}  FACEBOOK_LINK = {this.state.FACEBOOK_LINK}
 TWITTER_LINK = {this.state.TWITTER_LINK} YOUTUBE_LINK = {this.state.YOUTUBE_LINK}  POSTERS_LINK = {this.state.POSTERS_LINK} ErrorMsgClgWebsite = {this.state.errors.CLG_WEBSITE1} ErrorMsgFestWebsite = {this.state.errors.FEST_WEBSITE1}
HandleChangeClgWebsite = {({ target }) => {
 this.validateField('CLG_WEBSITE1',target.value);
  this.setState({

   CLG_WEBSITE1: target.value
  })
} }
HandleChangeFestWebsite = {({ target }) => {
      this.validateField('FEST_WEBSITE1',target.value);
  this.setState({
   FEST_WEBSITE1: target.value
  })
} }
HandleChangeFacebookLink = {({ target }) => {
    this.validateField('FACEBOOK_LINK',target.value);

      this.setState({
   FACEBOOK_LINK: target.value
  })



} }
HandleChangeTwitterLink = {({ target }) => {
    this.validateField('TWITTER_LINK',target.value);

      this.setState({
   TWITTER_LINK: target.value
  })



} }
HandleChangeYoutubeLink = {({ target }) => {
    this.validateField('YOUTUBE_LINK',target.value);

      this.setState({
   YOUTUBE_LINK: target.value
  })



} }
HandleChangePosterLink = {({ target }) => {
    this.validateField('POSTERS_LINK',target.value);

      this.setState({
   POSTERS_LINK: target.value
  })



} }  />

<button type="submit" onClick={this.handleFestSubmit.bind(this)}  className="btn btn-primary btn-raised">Submit Data</button>
                </Card>

          </Container>
        );
}};


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state) => {
       if (state.festRegisreduce.resultcode =="000000"){

            alert('success');
        }
        if(state.festRegisreduce.resultcode =="999999"){
          alert('Failed to Upload');
        }
    return {
        festRegisreduce: state.festRegisreduce,

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       festSubmitReq:(datatosend) => {
           dispatch(festSubmitReq(datatosend));
       }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(FestUserRegistration);
