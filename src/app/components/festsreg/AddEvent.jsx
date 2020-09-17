import React from "react";

export class AddEvent extends React.Component{


        constructor(){
        super();
        this.state = {
EVENT_NAME:'',
EVENT_COORD_NAME:'',
EVENT_COORD_EMAIL:'',
EVENT_COORD_PHNO:'',
EVENT_DESC:"",
EVENT_RULES_FORMAT:'',
chkbox:false,
errors:{}
        }
    }

    validateField(field, e) {
var value = e.target.value;

  switch(field) {
    case 'EVENT_COORD_EMAIL':
    const  emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        !emailValid ? this.setState(prevState => ({ errors:{...prevState.errors,EVENT_COORD_EMAIL : 'Please Enter a valid Email'}})) : this.setState(prevState => ({ errors:{...prevState.errors,EVENT_COORD_EMAIL : ''}})) ;
     // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
      case 'EVENT_NAME' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, EVENT_NAME : 'Event  name  cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,EVENT_NAME : ''}})) ;
     break;
       case 'EVENT_COORD_NAME' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, EVENT_COORD_NAME : 'Event Coordinator Name cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,EVENT_COORD_NAME : ''}})) ;
     break;
      case 'EVENT_DESC' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, EVENT_DESC : 'Event Description  cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,EVENT_DESC : ''}})) ;
     break;
       case 'EVENT_RULES_FORMAT' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, EVENT_RULES_FORMAT : 'Event Rules Format  cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,EVENT_RULES_FORMAT : ''}})) ;
     break;

      case 'EVENT_COORD_PHNO' :
     value.length != 10 ?  this.setState(prevState => ({ errors:{...prevState.errors,EVENT_COORD_PHNO : 'Phone Number should have 10 digits'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,EVENT_COORD_PHNO : ''}})) ;
break;

     default:
      break;
  }
}



            onChangedata(){
                if (this.state.chkbox){
        this.props.datatopass(this.props.number,this.state)
                }
                else{
                     this.props.datatopass(this.props.number,"")
                }
    }
            HandleChangeeventname({ target }){
   this.setState({
      EVENT_NAME: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangeeventCoName({ target }){
   this.setState({
      EVENT_COORD_NAME: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangeeventCoEmail({ target }){
   this.setState({
      EVENT_COORD_EMAIL: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangeeventCoPhno({ target }){
   this.setState({
      EVENT_COORD_PHNO: target.value },
       () => {
    this.onChangedata();
    });

            }

                                    HandleChangeeventDesc({ target }){
   this.setState({
      EVENT_DESC: target.value },
       () => {
    this.onChangedata();
    });

            }
                                    HandleChangeeventRulesFt({ target }){
   this.setState({
      EVENT_RULES_FORMAT: target.value },
       () => {
    this.onChangedata();
    });

            }
                                    handleChangeChk(event){

   this.setState({
      chkbox: event.target.checked },
       () => {

    this.onChangedata();
    });


            }



    render(){
        return (







                        <div className="row" divnumber={this.props.number}>

                          <div className=" col-xs-12 col-sm-12 col-md-12" >
<div className="checkbox" >
    <label style={{color:"red"}}>
      <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk.bind(this)}/>
      <span  className="checkbox-decorator"><span className="check"></span><div className="ripple-container"></div></span>
      Select
    </label>
  </div>
  </div>


                    	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"EVENT_NAME__"+this.props.number} className="bmd-label-floating">EVENT NAME<span className="req-ind">*</span> </label>
    <input type="text" className="form-control" id={"EVENT_NAME__"+this.props.number} value={this.state.EVENT_NAME} required={true} onChange={ this.HandleChangeeventname.bind(this)} onBlur= {   this.validateField.bind(this,"EVENT_NAME")}/>
    <span className="bmd-help">You need to enter your Event Name.</span><br/>
      <span style={{color: "red"}}>{this.state.errors.EVENT_NAME }</span>
  </div>


</div>
        	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"EVENT_COORD_NAME__"+this.props.number} className="bmd-label-floating">EVENT CO-ORIDINATOR NAME<span className="req-ind">*</span> </label>
    <input type="text" className="form-control" id={"EVENT_COORD_NAME__"+this.props.number} value={this.state.EVENT_COORD_NAME} required={true} onChange={this.HandleChangeeventCoName.bind(this)} onBlur= {   this.validateField.bind(this,"EVENT_COORD_NAME")}/>
    <span className="bmd-help">You need to enter your Event Coordinator Name.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.EVENT_COORD_NAME }</span>  </div>


</div>

     	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"EVENT_COORD_EMAIL__"+this.props.number} className="bmd-label-floating">EVENT CO-ORIDINATOR EMAIL<span className="req-ind">*</span> </label>
    <input type="email" className="form-control" id={"EVENT_COORD_EMAIL__"+this.props.number}  value={this.state.EVENT_COORD_EMAIL} required={true} onChange={this.HandleChangeeventCoEmail.bind(this)} onBlur= {   this.validateField.bind(this,"EVENT_COORD_EMAIL")}/>
    <span className="bmd-help">You need to enter your Event Coordinator Email.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.EVENT_COORD_EMAIL }</span>  </div>


</div>
	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"EVENT_COORD_PHNO__"+this.props.number} className="bmd-label-floating">EVENT CO-ORIDINATOR PHONE NO<span className="req-ind">*</span> </label>
    <input type="email" className="form-control"   id={"EVENT_COORD_PHNO__"+this.props.number} value={this.state.EVENT_COORD_PHNO}  required={true} onChange={this.HandleChangeeventCoPhno.bind(this)} onBlur= {   this.validateField.bind(this,"EVENT_COORD_PHNO")}/>
    <span className="bmd-help">You need to enter your Event Coordinator Phone Number.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.EVENT_COORD_PHNO }</span>  </div>


</div>

    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname={"EVENT_DESC__"+this.props.number} className="bmd-label-floating">EVENT DESCRIPTION<span className="req-ind">*</span></label>
    <textarea className="form-control"rows="4" id={"EVENT_DESC__"+this.props.number} value={this.state.EVENT_DESC} required={true} onChange={this.HandleChangeeventDesc.bind(this)} onBlur= {   this.validateField.bind(this,"EVENT_DESC")}></textarea>
      <span className="bmd-help">You need to enter your Event Description.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.EVENT_DESC }</span>  </div>
  </div>
    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname={"EVENT_RULES_FORMAT__"+this.props.number} className="bmd-label-floating">EVENT RULES AND FORMAT<span className="req-ind">*</span></label>
    <textarea className="form-control"  rows="4" id={"EVENT_RULES_FORMAT__"+this.props.number}value={this.state.EVENT_RULES_FORMAT}  required={true} onChange={this.HandleChangeeventRulesFt.bind(this)} onBlur= {   this.validateField.bind(this,"EVENT_RULES_FORMAT")}></textarea>
    <span className="bmd-help">You need to enter your Event Rules and Format.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.EVENT_RULES_FORMAT }</span>  </div>
  </div>

</div>

        );
}}
