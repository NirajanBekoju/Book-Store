import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


import NavBar from "../../components/NavBar";
import axios from 'axios';

function UserDashboard({ isAuthenticated }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }

    axios.get(`http://127.0.0.1:8000/api/dashboard/`, config)
    .then(res => {
      console.log("from responese")
      console.log(res)
      setUser(res.data)
    })
    .catch(err =>  {
      console.log("from error")
      console.log(err);
      console.log(user)
    })   
  }, [user])

  if (!isAuthenticated){
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <NavBar />
      {
        user ? 
        <div>
          {user.name}
          {user.email}
          {user.phone_number}
        </div>
        :
        <div>
          you are not authorized
        </div>
      }
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps,)(UserDashboard);
