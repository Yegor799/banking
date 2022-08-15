import './SignIn.css';
import logo from '../../images/logo.jpeg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignIn = () => {
  return (
    <div className='sign-in'>
      <div className='sign-in-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='title-form'>
        <h2 className='sign-in-title'>Sign In</h2>
        
          <TextField label="Email" variant="standard" />
          <TextField label="Password" variant="standard" />
          <Button variant="contained">Sign In</Button>
        
      </div>
    </div>
  );
}

export default SignIn;