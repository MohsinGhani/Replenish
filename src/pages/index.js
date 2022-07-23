import React from "react";

import Home from "src/containers/Home";

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const HomePage = (props) => {
	return <Home />;
};

HomePage.propTypes = propTypes;

HomePage.defaultProps = defaultProps;

export default HomePage;
