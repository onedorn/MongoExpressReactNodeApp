import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Contacts from '../contacts/Contacts';


const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();

    // eslint-disable-next-line
  }, [])

  return (
    <div className='grid-2'>
      <div>
        {/* {contact form} */}
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
