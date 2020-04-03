import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import App from '../_components/App';

class PrivateRoute extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            redirectPath: null,
        };
        this.shouldRedirect = false;
    }

    render(){
        return(
            <App/>
        );
    }
}

const mapStateToProps =  state => ({
});

const mapDispatchToProps = dispatch => ({
});

PrivateRoute.defaultProps = {
    data: []
};
PrivateRoute.PropTypes = {
    expandView: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);