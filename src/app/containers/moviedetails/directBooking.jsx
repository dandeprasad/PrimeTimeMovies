/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import DirectBookingData from './directBookingData';
import bookticket from "../../imgsvg/book-your-ticket.svg";
import '../../css/util/util.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DirectBooking = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
     
      <button type="submit" onClick={toggle}   className="btn booking-button"><span><img src={bookticket} id="bg" alt=""/></span>BOOK YOUR TICKET</button>
      <Modal  isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className} centered backdrop={false} size='lg'>
        <ModalHeader toggle={toggle} >PrimeTimeMovies</ModalHeader>
        <ModalBody>
        <DirectBookingData/>
           </ModalBody>
       {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
       </ModalFooter>*/}
      </Modal>
    </div>
  );
}

export default DirectBooking;