import React from 'react';
import { FontLoader } from "./FontLoader";
import { GuiPanel } from "../gui/GuiPanel";
import { AppCanvas } from "./AppCanvas";

/*

	COMPONENTS

*/
export class AppWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeObject: null,
			visible: true
		};

		// function binding https://reactjs.org/docs/faq-functions.html#why-is-binding-necessary-at-all 
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.inputHandler = this.inputHandler.bind(this);
	}

	close() {
		this.setState({
			visible: false
		});
	}

	open() {
		this.setState({
			visible: true
		});
	}

	inputHandler(mesh) {
		// console.log('handler() called for object ' + mesh.props.name)
		// console.log(mesh);
		this.setState({
			activeObject: mesh
		});
	}

	render() {
		return (
			<div style={{ height: "100%" }}>
				<FontLoader></FontLoader>

				<GuiPanel
					selectedObject={this.state.activeObject}
					visible={this.state.visible}
					close={this.close} />

				<AppCanvas
					inputHandler={this.inputHandler}
					open={this.open} />
			</div>
		);
	}
}
