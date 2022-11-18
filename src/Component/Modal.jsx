import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";

export const ModelComponent = (props) => {
  return (
    <Modal  
    {...props}    
      size="lg"
      xs="auto"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Card.Img
          variant="top"
          src={`https://demo.tech2edge.co/samples/${props.data.img}`}
        />
        <h4>Profession: {props.data.profession}</h4>
        <h4>Age: {props.data.age}</h4>
        <h4>
          Details:           
        </h4>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}