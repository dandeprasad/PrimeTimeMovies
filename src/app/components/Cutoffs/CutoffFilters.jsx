import React from "react";
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button,ButtonGroup,CardLink,Input,Table } from 'reactstrap';


import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import students from "../../img/students.jpg";
import {paramsToHeader,hideCutoffsFiltrContent} from "../../actions/HeaderParams";

import {apInstCodeRequest,apInstNameRequest,apInstOthersRequest,apEamcetStateMaintainceReq,CutoffsApEamcetData} from "../../actions/CutoffsActions";
import {setName} from "../../actions/userActions";
import { Link ,Route} from 'react-router-dom';
//export class App extends React.Component {   commenting because below redux will take care of attacting
 class CutoffFilters extends React.Component {


//     changeUsername() {
// this.props.setName("king");
//     }

constructor(props) {
  super(props);
  this.state = {
   posts:[]


  }
}
componentWillMount() {

  if(  this.props.match.url === "/Cutoffs")
  {
     this.props.paramsHeader(this.props);

  }
if( this.props.match.params.cutoffType ==='AP-EAMCET'){
this.apInstCodeRequest();
this.apInstNameRequest();
this.apInstOthersRequest();
}

  this.props.hideCutoffsFiltrContent(true);

window.addEventListener('scroll', this.listenToScroll.bind(this))
}
componentWillUnmount() {
  window.removeEventListener('scroll', this.listenToScroll.bind(this))
}

// componentWillReceiveProps(nextProps) {
//     if (nextProps.location.pathname !== this.props.location.pathname) {
//       //this.props.match.params.filterTypeId
//       console.log("here");
//       //take action here
//     //  this.props.makeFilterDataEmpty();
//
//       this.props.makeFilterDataEmpty(
//           () => {
//   this.serverRequest(0,5);
//        });
//
//
//
//
//     this.props.hideEvents(true);
//     }
//   }


  componentDidUpdate(nextProps){
     if (nextProps.location.pathname !== this.props.location.pathname) {

       if (nextProps.match.params.cutoffType==='AP-EAMCET'){
         this.apInstCodeRequest();
this.apInstNameRequest();
this.apInstOthersRequest();
       }
    this.props.hideCutoffsFiltrContent(true);
    }
  }

listenToScroll (){
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height



}

apInstOthersRequest (){
var WORKSPACE_ID = "HOME_WORKSPACE";
  var FUNCTION_ID = "GET_AP_EAMCET_DATA";
  var ACTION_ID = "GET_AP_EAMCET_INST_OTHERS";



  var Record = {

    "FUNCTION_ID" :FUNCTION_ID,
    "WORKSPACE_ID" : WORKSPACE_ID,
    "ACTION_ID" : ACTION_ID

  };
var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);
this.props.apInstOthersRequest(dande);
};


apInstCodeRequest (){
var WORKSPACE_ID = "HOME_WORKSPACE";
  var FUNCTION_ID = "GET_AP_EAMCET_DATA";
  var ACTION_ID = "GET_AP_EAMCET_INSTCODE";



  var Record = {

    "FUNCTION_ID" :FUNCTION_ID,
    "WORKSPACE_ID" : WORKSPACE_ID,
    "ACTION_ID" : ACTION_ID

  };
var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);
this.props.apInstCodeRequest(dande);
};

apInstNameRequest (){
var WORKSPACE_ID = "HOME_WORKSPACE";
  var FUNCTION_ID = "GET_AP_EAMCET_DATA";
  var ACTION_ID = "GET_AP_EAMCET_INSTNAME";



  var Record = {

    "FUNCTION_ID" :FUNCTION_ID,
    "WORKSPACE_ID" : WORKSPACE_ID,
    "ACTION_ID" : ACTION_ID

  };
var json = {
  "datatohost" : Record
};
var dande = 'ServerData=' + JSON.stringify(json);
this.props.apInstNameRequest(dande);
};
getAPEamcetdata(){

  var startIndex = 0;
  var LastIndex = 100;

  var WORKSPACE_ID = "HOME_WORKSPACE";
  var FUNCTION_ID = "GET_AP_EAMCET_DATA";
  var ACTION_ID = "AP_EAMCET_CUTOFFMAIN_DATA";



  var Record = {
    "WORKSPACE_ID" : WORKSPACE_ID,
    "FUNCTION_ID" : FUNCTION_ID,
    "ACTION_ID" : ACTION_ID,
    "SROW_INDEX" : startIndex,
    "EROW_INDEX": LastIndex,
    "uniqueTosend": this.props.CutoffsReduce.ap_cutoff.ap_state_maintaince
  };
  var json = {
    "datatohost" : Record
  };
  var dande = 'ServerData=' + JSON.stringify(json);




   this.props.CutoffsApEamcetData(dande);


}

HandleApInstCodeCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_CODE_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstNameCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_NAME_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstTypeCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_TYPE_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstRegCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_REG_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstDistCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_DIST_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstPlaceCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_PLACE_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstAffliCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_AFFLI_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstEstYearCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_ESTYEAR_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstBranchCodeCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_BRNCHCODE_CB":target.checked});
this.getAPEamcetdata();}
HandleApInstCutoffYearCB({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_CUTYEAR_CB":target.checked});
this.getAPEamcetdata();}


HandleApInstCode({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_CODE":target.value});
this.getAPEamcetdata();
}
HandleApInstName({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_NAME":target.value});
this.getAPEamcetdata();}
HandleApInstType({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_TYPE":target.value});
this.getAPEamcetdata();}
HandleApInstReg({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_REG":target.value});
this.getAPEamcetdata();}
HandleApInstDist({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_DIST":target.value});
this.getAPEamcetdata();}
HandleApInstPlace({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_PLACE":target.value});
this.getAPEamcetdata();}
HandleApInstAffli({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_AFFLI":target.value});
this.getAPEamcetdata();}
HandleApInstEstYear({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_ESTYEAR":target.value});
this.getAPEamcetdata();}
HandleApInstBranchCode({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_BRNCHCODE":target.value});
this.getAPEamcetdata();}
HandleApInstCutoffYear({ target }){this.props.apEamcetStateMaintainceReq({"AP_INST_CUTYEAR":target.value});
this.getAPEamcetdata();}

    render() {

const collegesMainResult = [];





for (var eachdata = 0; eachdata < this.props.CutoffsReduce.ap_cutoff.main_result.length; eachdata += 1) {

    for (var i = 0; i < Object.keys(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata]).length; i += 1) {


collegesMainResult.push(
  <tr>
  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_INST_NAME}</td>
  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_CUTOFF_YEAR}</td>
  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_INST_CODE}</td>
  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_TYPE}</td>
  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_REG}</td>
  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_DIST}</td>
  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_PLACE}</td>
  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_AFLIA_UNIV}</td>
    <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_EST_YEAR}</td>
      <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BRANCH_CODE}</td>
        <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_OC_BOYS}</td>
          <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_OC_GIRLS}</td>
            <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_SC_BOYS}</td>
              <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_SC_GIRLS}</td>
                <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_ST_BOYS}</td>
                  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_ST_GIRLS}</td>
                    <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCA_BOYS}</td>
                      <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCA_GIRLS}</td>

                      <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCB_BOYS}</td>
                        <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCB_GIRLS}</td>
                          <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCC_BOYS}</td>
                            <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCC_GIRLS}</td>
                              <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCD_BOYS}</td>

                              <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCD_GIRLS}</td>
                                <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCE_BOYS}</td>
                                  <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_BCE_GIRLS}</td>
                                    <td>{Object.values(this.props.CutoffsReduce.ap_cutoff.main_result[eachdata])[i].OUTPUT_AP_CLG_CUTOFF_FEE}</td>

  </tr>
//{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
)
}
}




      const collegesInstCode = [];

      if (this.props.CutoffsReduce.ap_cutoff.inst_code.length>0){
      for (var eachdata = 0; eachdata < this.props.CutoffsReduce.ap_cutoff.inst_code.length; eachdata += 1) {

          for (var i = 0; i < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_code[eachdata]).length; i += 1) {


      collegesInstCode.push(
      <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_code[eachdata])[i].AP_INST_CODE} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_code[eachdata])[i].AP_INST_CODE}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_code[eachdata])[i].AP_INST_CODE}</option>

      //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
      )
      }
      }
      }
      const collegesInstType = [];
  const collegesInstReg = [];
  const collegesInstDist = [];
  const collegesInstPlace = [];
  const collegesInstAffli=[];
  const collegesInstEstYear=[];
  const collegesInstBranchCode = [];
  const collegesInstCutofyear = [];
      if (this.props.CutoffsReduce.ap_cutoff.inst_others.length>0){
      for (var eachdata = 0; eachdata < this.props.CutoffsReduce.ap_cutoff.inst_others.length; eachdata += 1) {

          for (var i = 0; i < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata]).length; i += 1) {

if (i==0){
    for (var j = 0; j < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i]).length; j += 1) {
      collegesInstType.push(
      <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_TYPE} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_TYPE}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_TYPE}</option>

      //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
      )
    }
      }

      if (i==1){
          for (var j = 0; j < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i]).length; j += 1) {
            collegesInstReg.push(
            <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_REG} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_REG}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_REG}</option>

            //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
            )
          }
            }
            if (i==2){
                for (var j = 0; j < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i]).length; j += 1) {
                  collegesInstDist.push(
                  <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_DIST} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_DIST}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_DIST}</option>

                  //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
                  )
                }
                  }
                  if (i==3){
                      for (var j = 0; j < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i]).length; j += 1) {
                        collegesInstPlace.push(
                        <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_PLACE} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_PLACE}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_PLACE}</option>

                        //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
                        )
                      }
                        }
                        if (i==4){
                            for (var j = 0; j < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i]).length; j += 1) {
                              collegesInstAffli.push(
                              <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_AFLIA_UNIV} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_AFLIA_UNIV}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_AFLIA_UNIV}</option>

                              //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
                              )
                            }
                              }

                              if (i==5){
                                  for (var j = 0; j < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i]).length; j += 1) {
                                    collegesInstEstYear.push(
                                    <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_EST_YEAR} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_EST_YEAR}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_EST_YEAR}</option>

                                    //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
                                    )
                                  }
                                    }
                                    if (i==6){
                                        for (var j = 0; j < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i]).length; j += 1) {
                                          collegesInstBranchCode.push(
                                          <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_BRANCH_CODE} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_BRANCH_CODE}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_BRANCH_CODE}</option>

                                          //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
                                          )
                                        }
                                          }
                                          if (i==7){
                                              for (var j = 0; j < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i]).length; j += 1) {
                                                collegesInstCutofyear.push(
                                                <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_CUTOFF_YEAR} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_CUTOFF_YEAR}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_others[eachdata][i])[j].AP_INST_CUTOFF_YEAR}</option>

                                                //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
                                                )
                                              }
                                                }






      }
    }}

      const collegesInstName = [];

      if (this.props.CutoffsReduce.ap_cutoff.inst_name.length>0){
      for (var eachdata = 0; eachdata < this.props.CutoffsReduce.ap_cutoff.inst_name.length; eachdata += 1) {

          for (var i = 0; i < Object.keys(this.props.CutoffsReduce.ap_cutoff.inst_name[eachdata]).length; i += 1) {


      collegesInstName.push(
      <option key = {Object.values(this.props.CutoffsReduce.ap_cutoff.inst_name[eachdata])[i].AP_INST_NAME} value={Object.values(this.props.CutoffsReduce.ap_cutoff.inst_name[eachdata])[i].AP_INST_NAME}>{Object.values(this.props.CutoffsReduce.ap_cutoff.inst_name[eachdata])[i].AP_INST_NAME}</option>

      //{Object.values(this.props.ExamsReduce.result[eachdata])[i].LOGO_IMAGE}
      )
      }
      }
      }


        return (

          							 <Col xs="12" sm="12" md="12">
                         <Row>
	 <Col xs="12" sm="12" md="12" style={{borderBottom:'1px solid rgba( 0, 0, 0, 0.05 )',marginBottom: '20px'}}>
   <h1 style={{textTransform:'uppercase',fontWeight:'600',float:'left',color:'#777',fontSize:'18px'}}>Andhra Pradesh EAMCET Cutoffs</h1>
   </Col>
   </Row>
   <Row>


                         	 <Col xs="12" sm="4" md="4">

          								<Row style={{marginBottom: "6px", marginTop: "6px"}}>
          									<Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                            <input type="checkbox"  style={{margin: '0px 5px 0px 0px'}} onChange={this.HandleApInstCodeCB.bind(this)} />
          										<span className="pull-left"   >INSTITUTE CODE</span>
          									</Col>
          								<Col xs="12" sm="6" md="8">
          										<select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}}  onChange={this.HandleApInstCode.bind(this)}>
          <option value="select" selected="">Select</option>
  {collegesInstCode}
                               </select>
          									</Col>

          								</Row>
                          </Col>

                          <Col xs="12" sm="4" md="4">
                         <Row style={{marginBottom: "6px", marginTop: "6px"}}>
                           <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                           <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}}  onChange={this.HandleApInstNameCB.bind(this)}/>
                             <span className="pull-left"   >INSTITUTE NAME</span>
                           </Col>
                         <Col xs="12" sm="6" md="8">
                             <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}}   onChange={this.HandleApInstName.bind(this)} >
         <option value="select" selected="">Select</option>
{collegesInstName}
                              </select>
                           </Col>
                         </Row>
                         </Col>


                         <Col xs="12" sm="4" md="4">
                        <Row style={{marginBottom: "6px", marginTop: "6px"}}>
                          <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                          <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}} onChange={this.HandleApInstTypeCB.bind(this)} />
                            <span className="pull-left"   >COLLEGE TYPE</span>
                          </Col>
                        <Col xs="12" sm="6" md="8">
                            <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}}  onChange={this.HandleApInstType.bind(this)} >
                 <option value="select" selected="">Select</option>
{collegesInstType}
                             </select>
                          </Col>
                        </Row>
                        </Col>

</Row>

<Row>
                      <Col xs="12" sm="4" md="4">
                       <Row style={{marginBottom: "6px", marginTop: "6px"}}>
                         <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                         <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}} onChange={this.HandleApInstRegCB.bind(this)} />
                           <span className="pull-left"   >REGION</span>
                         </Col>
                       <Col xs="12" sm="6" md="8">
                           <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleApInstReg.bind(this)}>
                <option value="select" selected="">Select</option>
{collegesInstReg}
                            </select>
                         </Col>
                       </Row>
                       </Col>

                      <Col xs="12" sm="4" md="4">
                      <Row style={{marginBottom: "6px", marginTop: "6px"}}>
                        <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                        <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}}  onChange={this.HandleApInstDistCB.bind(this)}/>
                          <span className="pull-left"   >DISTRICT</span>
                        </Col>
                      <Col xs="12" sm="6" md="8">
                          <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleApInstDist.bind(this)}>
               <option value="select" selected="">Select</option>
{collegesInstDist}
                           </select>
                        </Col>
                      </Row>
                      </Col>

                    <Col xs="12" sm="4" md="4">
                     <Row style={{marginBottom: "6px", marginTop: "6px"}}>
                       <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                       <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}} onChange={this.HandleApInstPlaceCB.bind(this)} />
                         <span className="pull-left"   >PLACE</span>
                       </Col>
                     <Col xs="12" sm="6" md="8">
                         <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleApInstPlace.bind(this)} >
              <option value="select" selected="">Select</option>
{collegesInstPlace}
                          </select>
                       </Col>
                     </Row>
                     </Col>
</Row>

<Row>
                     <Col xs="12" sm="4" md="4">
                    <Row style={{marginBottom: "6px", marginTop: "6px"}}>
                      <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                      <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}}  onChange={this.HandleApInstAffliCB.bind(this)}/>
                        <span className="pull-left"   >AFFLICATE UNIVERSITY</span>
                      </Col>
                    <Col xs="12" sm="6" md="8">
                        <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleApInstAffli.bind(this)} >
             <option value="select" selected="">Select</option>
{collegesInstAffli}
                         </select>
                      </Col>
                    </Row>
                    </Col>

                  <Col xs="12" sm="4" md="4">
                   <Row style={{marginBottom: "6px", marginTop: "6px"}}>
                     <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                     <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}} onChange={this.HandleApInstEstYearCB.bind(this)} />
                       <span className="pull-left"   >EST YEAR</span>
                     </Col>
                   <Col xs="12" sm="6" md="8">
                       <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleApInstEstYear.bind(this)}>
            <option value="select" selected="">Select</option>
{collegesInstEstYear}
                        </select>
                     </Col>
                   </Row>
                   </Col>

                   <Col xs="12" sm="4" md="4">
                  <Row style={{marginBottom: "6px", marginTop: "6px"}}>
                    <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
                    <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}}  onChange={this.HandleApInstBranchCodeCB.bind(this)}/>
                      <span className="pull-left"   >BRANCH</span>
                    </Col>
                  <Col xs="12" sm="6" md="8">
                      <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleApInstBranchCode.bind(this)}>
           <option value="select" selected="">Select</option>
{collegesInstBranchCode}
                       </select>
                    </Col>
                  </Row>
                  </Col>
</Row>
<Row>
<Col xs="12" sm="4" md="4">
<Row style={{marginBottom: "6px", marginTop: "6px"}}>
 <Col xs="12" sm="6" md="4"  className="cutoff_des"  >
 <input type="checkbox" value=""   style={{margin: '0px 5px 0px 0px'}}  onChange={this.HandleApInstCutoffYearCB.bind(this)}/>
   <span className="pull-left"   >CUTOFF YEAR</span>
 </Col>
<Col xs="12" sm="6" md="8">
   <select id="streamcolleges" className="form-control" style={{color: '#000000'}} style={{color: '#000000'}} onChange={this.HandleApInstCutoffYear.bind(this)}>
<option value="select" selected="">Select</option>
{collegesInstCutofyear}
    </select>
 </Col>
</Row>
</Col>
<Col xs="12" sm="12" md="12">
<p>Please select Checkboxes to include them in results<span style={{color: 'red'}}>*</span></p>
<Table hover responsive bordered>
<thead>
<tr>
<th>INSTITUTE NAME</th>
<th>CUTOFF YEAR</th>
<th>INSTITUTE CODE</th>

<th>COLLEGE TYPE</th>
<th>REG</th>
<th>DISTRICT</th>
<th>PLACE</th>
<th>AFFLICATED UNIVERSITY</th>
<th>ESTD YEAR</th>
<th>BRANCH CODE</th>
<th>OC BOYS</th>
<th>OC GIRLS</th>
<th>SC BOYS</th>
<th>SC GIRLS</th>
<th>ST BOYS</th>
<th>ST GIRLS</th>
<th>BCA BOYS</th>
<th>BCA GIRLS</th>
<th>BCB BOYS</th>
<th>BCB GIRLS</th>
<th>BCC BOYS</th>
<th>BCC GIRLS</th>
<th>BCD BOYS</th>
<th>BCD GIRLS</th>
<th>BCE BOYS</th>
<th>BCE GIRLS</th>
<th>COLLEGE FEE</th>
</tr>
</thead>
<tbody>
{collegesMainResult}
</tbody>
</Table>

            </Col>
</Row>
          							</Col>

        );

    }

}

//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {

    return {
      CutoffsReduce:state.CutoffsReduce
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       apInstCodeRequest:(datatosend) => {
           dispatch(apInstCodeRequest(datatosend));},
           apInstNameRequest:(datatosend) => {
               dispatch(apInstNameRequest(datatosend));},
               apInstOthersRequest:(datatosend) => {
                   dispatch(apInstOthersRequest(datatosend));},
           paramsHeader:(datatosend) => {
               dispatch(paramsToHeader(datatosend));
       },
       apEamcetStateMaintainceReq:(datatosend) => {
           dispatch(apEamcetStateMaintainceReq(datatosend));},
       hideCutoffsFiltrContent:(datatosend) => {
           dispatch(hideCutoffsFiltrContent(datatosend));
   },
   CutoffsApEamcetData:(datatosend) => {
       dispatch(CutoffsApEamcetData(datatosend));
}

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CutoffFilters);
