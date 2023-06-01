import React, { Component } from "react";

export default class MyPureComponent extends Component {
	shouldComponentUpdate(nextProps) {
		console.log("from myPureComponent");
		for (let key in nextProps) {
			if (!this.props[key] || nextProps[key] !== this.props[key]) {
				console.log(key, nextProps[key]);
				return true;
			}
		}
		return false;
	}
	render() {
		return <MyPureComponent />;
	}
}
