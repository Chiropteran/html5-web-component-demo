/*
	HTML5 Web Component Demo
	By Joseph Juma
*/

/* Components */
class HeaderComponent extends HTMLElement {
	/*
		Header Component
		-----------------------------------------------------------------------
		A component for the bar at the top of a page.
		-----------------------------------------------------------------------
	*/
	
	constructor(){
		super();
		let content = document.getElementById("header-bar-template").content;
		const nodeRoot = this.attachShadow({ mode: 'open'}).appendChild( content.cloneNode(true));
	};
};

class FooterComponent extends HTMLElement {
	/*
		Header Component
		-----------------------------------------------------------------------
		A component for the bar at the bottom of a page.
		-----------------------------------------------------------------------
	*/
	
	constructor(){
		super();
		let content = document.getElementById("footer-bar-template").content;
		const nodeRoot = this.attachShadow({ mode: 'open'}).appendChild( content.cloneNode(true));
	};
};

class TileComponent extends HTMLElement {
	/*
		Tile Component
		-----------------------------------------------------------------------
		A contained tile that has a title, description and image on it. Is 
		clickable and should be used to redirect to other pages.
		-----------------------------------------------------------------------
	*/
	
	constructor(){
		super();
		let content = document.getElementById("tile-component-template").content;
		const nodeRoot = this.attachShadow({ mode: 'open'}).appendChild( content.cloneNode(true));
	};
};

/* Element Defines */
customElements.define('header-bar',HeaderComponent);
customElements.define('footer-bar', FooterComponent);
customElements.define('tile-component', TileComponent);