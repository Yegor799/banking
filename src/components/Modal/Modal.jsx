import './Modal.css';
import Alert from '@mui/material/Alert';

const Modal = ({error}) => {
  return (
    <div className='modal'>
      {error ? 
        <Alert severity="error">Payment was declined</Alert>
        :
        <Alert severity="success">Payment was successfull!</Alert>
    }
    </div>
  )
}

export default Modal;