import React from "react";

export class AddWorkShop extends React.Component{


        constructor(){
        super();
        this.state = {
WORKSHOP_NAME:'',
WORKSHOP_CO_NAME:'',
WORKSHOP_COOD_EMAIL:'',
WORKSHP_PHNO:'',
WORKSHOP_DESC:"",
WORKSHOP_RULES_FORMAT:'',
chkbox:false,
errors:{}
        }
    }

    validateField(field, e) {
var value = e.target.value;

  switch(field) {
    case 'WORKSHOP_COOD_EMAIL':
    const  emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        !emailValid ? this.setState(prevState => ({ errors:{...prevState.errors,WORKSHOP_COOD_EMAIL : 'Please Enter a valid Email'}})) : this.setState(prevState => ({ errors:{...prevState.errors,WORKSHOP_COOD_EMAIL : ''}})) ;
     // fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
      case 'WORKSHOP_NAME' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, WORKSHOP_NAME : 'Workshop  name  cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,WORKSHOP_NAME : ''}})) ;
     break;
       case 'WORKSHOP_CO_NAME' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, WORKSHOP_CO_NAME : 'Workshop Coordinator Name cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,WORKSHOP_CO_NAME : ''}})) ;
     break;
      case 'WORKSHOP_DESC' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, WORKSHOP_DESC : 'Workshop Description  cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,WORKSHOP_DESC : ''}})) ;
     break;
       case 'WORKSHOP_RULES_FORMAT' :
     !value ? this.setState(prevState => ({ errors:{...prevState.errors, WORKSHOP_RULES_FORMAT : 'Workshop Rules Format  cannot be empty'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,WORKSHOP_RULES_FORMAT : ''}})) ;
     break;

      case 'WORKSHP_PHNO' :
     value.length != 10 ?  this.setState(prevState => ({ errors:{...prevState.errors,WORKSHP_PHNO : 'Phone Number should have 10 digits'}})) :  this.setState(prevState => ({ errors:{...prevState.errors,WORKSHP_PHNO : ''}})) ;
break;

     default:
      break;
  }
}


//sending data to parent class
            onChangedata(){
                if (this.state.chkbox){
        this.props.datatopass(this.props.number,this.state)
                }
                else{
                     this.props.datatopass(this.props.number,"")
                }
    }


//setting state for current classes starts
            HandleChangeWrkName({ target }){
   this.setState({
      WORKSHOP_NAME: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangeWrkCoName({ target }){
   this.setState({
      WORKSHOP_CO_NAME: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangeWrkCoodEmail({ target }){
   this.setState({
      WORKSHOP_COOD_EMAIL: target.value },
       () => {
    this.onChangedata();
    });

            }
                        HandleChangeWrkPhno({ target }){
   this.setState({
      WORKSHP_PHNO: target.value },
       () => {
    this.onChangedata();
    });

            }

                                    HandleChangeWrkDesc({ target }){
   this.setState({
      WORKSHOP_DESC: target.value },
       () => {
    this.onChangedata();
    });

            }
                                    HandleChangeWrkRulesFt({ target }){
   this.setState({
      WORKSHOP_RULES_FORMAT: target.value },
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

            onChangeHandler(event){
   this.setState({
     selectedFile: event.target.files[0],
     loaded: 0,
   },
    () => {

 this.onChangedata();

})}

//setting state for current classes ends

    render(){
        return (







                        <div className="row" divnumber={this.props.number}>

                          <div className=" col-xs-12 col-sm-12 col-md-12" >
<div className="checkbox" >
    <label style={{color:"red"}}>
      <input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk.bind(this)}/>
      <span className="checkbox-decorator"><span className="check"></span><div className="ripple-container"></div></span>
      Select
    </label>
  </div>
  </div>

                    	{/* <div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname="WORKSHOP_NAME" className="bmd-label-floating">WORKSHOP NAME<span className="req-ind">*</span> </label>
    <input type="text" className="form-control" id="WORKSHOP_NAME" required={true}/>
    <span className="bmd-help">You need to enter your Workshop Name.</span>
  </div>


</div> */}








                    	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"WORKSHOP_NAME__"+this.props.number} className="bmd-label-floating">WORKSHOP NAME<span className="req-ind">*</span> </label>
    <input type="text" className="form-control" id={"WORKSHOP_NAME__"+this.props.number} value={this.state.WORKSHOP_NAME} required={true} onChange={ this.HandleChangeWrkName.bind(this)} onBlur= {   this.validateField.bind(this,"WORKSHOP_NAME")}/>
    <span className="bmd-help">You need to enter your Workshop Name.</span><br/>
      <span style={{color: "red"}}>{this.state.errors.WORKSHOP_NAME }</span>
  </div>

</div>
               	{/* <div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname="WORKSHOP_CO_NAME" className="bmd-label-floating">WORKSHOP CO-ORIDINATOR NAME<span className="req-ind">*</span> </label>
    <input type="text" className="form-control" id="WORKSHOP_CO_NAME" required={true}/>
    <span className="bmd-help">You need to enter your Workshop Coordination name.</span>
  </div>


</div> */}
        	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"WORKSHOP_CO_NAME"+this.props.number} className="bmd-label-floating">WORKSHOP CO-ORIDINATOR NAME<span className="req-ind">*</span> </label>
    <input type="text" className="form-control" id={"WORKSHOP_CO_NAME"+this.props.number} value={this.state.WORKSHOP_CO_NAME} required={true} onChange={this.HandleChangeWrkCoName.bind(this)} onBlur= {   this.validateField.bind(this,"WORKSHOP_CO_NAME")}/>
    <span className="bmd-help">You need to enter your Workshop Coordinator Name.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.WORKSHOP_CO_NAME }</span>  </div>


</div>

     	{/* <div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname="WORKSHOP_COOD" className="bmd-label-floating">WORKSHOP CO-ORIDINATOR EMAIL<span className="req-ind">*</span> </label>
    <input type="email" className="form-control" id="WORKSHOP_COOD" required={true}/>
    <span className="bmd-help">You need to enter your Workshop Coodinator email address.</span>
  </div>


</div> */}

     	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"WORKSHOP_COOD_EMAIL"+this.props.number} className="bmd-label-floating">WORKSHOP CO-ORIDINATOR EMAIL<span className="req-ind">*</span> </label>
    <input type="email" className="form-control" id={"WORKSHOP_COOD_EMAIL"+this.props.number}  value={this.state.WORKSHOP_COOD_EMAIL} required={true} onChange={this.HandleChangeWrkCoodEmail.bind(this)} onBlur= {   this.validateField.bind(this,"WORKSHOP_COOD_EMAIL")}/>
    <span className="bmd-help">You need to enter your Workshop Coordinator Email.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.WORKSHOP_COOD_EMAIL }</span>  </div>


</div>



	{/* <div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname="WORKSHP_PHNO" className="bmd-label-floating">WORKSHOP CO-ORIDINATOR PHONE NO<span className="req-ind">*</span> </label>
    <input type="email" className="form-control" id="WORKSHP_PHNO" required={true}/>
    <span className="bmd-help">You need to enter your Workshop Coordinator Phone Number.</span>
  </div>


</div> */}



	<div className=" col-xs-12 col-sm-12 col-md-4">
							<div className="form-group">
    <label forname={"WORKSHP_PHNO"+this.props.number} className="bmd-label-floating">WORKSHOP CO-ORIDINATOR PHONE NO<span className="req-ind">*</span> </label>
    <input type="number" className="form-control"   id={"WORKSHP_PHNO"+this.props.number} value={this.state.WORKSHP_PHNO}  required={true} onChange={this.HandleChangeWrkPhno.bind(this)} onBlur= {   this.validateField.bind(this,"WORKSHP_PHNO")}/>
        <span className="bmd-help">You need to enter your Workshop Coordinator Phone Number.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.WORKSHP_PHNO }</span>  </div>


</div>



    {/* <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname="WORKSHOP_DESC" className="bmd-label-floating">WORKSHOP DESCRIPTION<span className="req-ind">*</span></label>
    <textarea className="form-control" id="WORKSHOP_DESC" rows="4" required={true}></textarea>
      <span className="bmd-help">You need to enter your Workshop Description.</span>
  </div>
  </div> */}


    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname={"WORKSHOP_DESC"+this.props.number} className="bmd-label-floating">WORKSHOP DESCRIPTION<span className="req-ind">*</span></label>
    <textarea className="form-control"rows="4" id={"WORKSHOP_DESC"+this.props.number} value={this.state.WORKSHOP_DESC} required={true} onChange={this.HandleChangeWrkDesc.bind(this)} onBlur= {   this.validateField.bind(this,"WORKSHOP_DESC")}></textarea>
       <span className="bmd-help">You need to enter your Workshop Description.</span>><br/>
  <span style={{color: "red"}}>{this.state.errors.WORKSHOP_DESC }</span>  </div>

  </div>


    {/* <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname="WORKSHOP_RULES_FORMAT" className="bmd-label-floating">WORKSHOP RULES AND FORMAT<span className="req-ind">*</span></label>
    <textarea className="form-control" id="WORKSHOP_RULES_FORMAT" rows="4" required={true}></textarea>
    <span className="bmd-help">You need to enter your Workshop Rules and Format.</span>
  </div>
  </div>
 */}



    <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group">
    <label forname={"WORKSHOP_RULES_FORMAT"+this.props.number} className="bmd-label-floating">WORKSHOP RULES AND FORMAT<span className="req-ind">*</span></label>
    <textarea className="form-control"  rows="4" id={"WORKSHOP_RULES_FORMAT"+this.props.number}value={this.state.WORKSHOP_RULES_FORMAT}  required={true} onChange={this.HandleChangeWrkRulesFt.bind(this)} onBlur= {   this.validateField.bind(this,"WORKSHOP_RULES_FORMAT")}></textarea>
     <span className="bmd-help">You need to enter your Workshop Rules and Format.</span><br/>
  <span style={{color: "red"}}>{this.state.errors.WORKSHOP_RULES_FORMAT }</span>  </div>
  </div>



            <div className=" col-xs-12 col-sm-12 col-md-4" >
      <div className="form-group" style={{display: 'none'}}>
    <label forname="WORKSHP_BANER"  className="bmd-label-floating">WORKSHOP BANNER<span className="req-ind">*</span></label>
    <input type="file" className="form-control-file" id="WORKSHP_BANER" required={true}  encType="multipart/form-data" onChange={this.onChangeHandler.bind(this)}/>
    <small className="text-muted">Upload your Workshop Banners.</small>
  </div>
  </div>

</div>


        );
}}
