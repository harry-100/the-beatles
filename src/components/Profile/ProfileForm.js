
import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    
    // add validation
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBfUIGezImF90UD-LrVfCDQIayOlAwenHs',
    {  
      method:'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      // assumption: Always successful
  });
    
    return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minlength="7" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}
}
export default ProfileForm;
