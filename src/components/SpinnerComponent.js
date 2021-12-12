import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const  SpinnerComponent = () => {
    return (
        <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
    );
    }
    export default SpinnerComponent;