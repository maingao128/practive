import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";

export default function confirm(config = {}) {

	const div = document.createElement("div");
	const body = document.getElementsByTagName("body")[0];
	body.appendChild(div);

	ReactDOM.render(
		<Modal data={config} close={close} />,
		div
	);

	function close() {
		const unmountResult = ReactDOM.unmountComponentAtNode(div);
		if(unmountResult && div.parentNode) {
			div.parentNode.removeChild(div);
		}
	}
}