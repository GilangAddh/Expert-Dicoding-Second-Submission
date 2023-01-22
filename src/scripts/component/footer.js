class FooterContent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

    <p>Copyright @ WarungWareug</p>

      `;
  }
}

customElements.define('footer-content', FooterContent);
