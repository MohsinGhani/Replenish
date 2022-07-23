import React from "react";

require("src/styles/index.less");

// eslint-disable-next-line react/function-component-definition, react/prop-types
export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
