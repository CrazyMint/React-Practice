import React from "react";

export const myMemo = (WrappedComponent) => {
	return class newComponent extends React.Component {
		shouldComponentUpdate(nextProps) {
			for (let key in nextProps) {
				if (!this.props[key] || nextProps[key] !== this.props[key]) {
					return true;
				}
				console.log(key, nextProps[key]);
			}
			return false;
		}

		render() {
			return (
				<WrappedComponent {...this.props} {...this.state}></WrappedComponent>
			);
		}
	};
};
