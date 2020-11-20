import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeAlert } from "../redux/alert/AlertAction";

const Alert = ({ alerts=null, removeAlert }) => {
  const getAlert = () => {
    let result = []
    if(alerts !== null && alerts.length > 0){
      for(let i=0; i<alerts.length; i++){
        result.push(
          <div key={alerts[i].id} className={`alert alert-${alerts[i].alertType}`}>
            {alerts[i].msg}
          </div>
        );
        setTimeout(() => {
          removeAlert(alerts[i].id)
        }, 3000);
      }
    }
  
    return result;
  }

  return(
    <React.Fragment>
      {getAlert()}
    </React.Fragment>
  )
}

Alert.propTypes = {
  alerts: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {alerts: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeAlert: (id) => dispatch(removeAlert(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
