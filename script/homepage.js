class MainPage extends HTMLElement{constructor(){super(),this.innerHTML='<h1>Home</h1><div><blockquote><li>My name is sufys.</li><li>I am 15 years old.</li><li>You can contact me <a href="mailto:sufys@proton.me">here.</a></blockquote></div>'}connectedCallback(){console.log("connected!",this)}disconnectedCallback(){console.log("disconnected",this)}}"customElements"in window&&customElements.define("main-page",MainPage);