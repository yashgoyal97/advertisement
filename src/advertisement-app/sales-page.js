import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/gold-cc-input/gold-cc-input.js';
import '@polymer/iron-icons/iron-icons.js';
import 'highcharts-chart/highcharts-chart.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';



/**
* @customElement
* @polymer
*/
class AdminPage extends PolymerElement {
    static get template() {
        return html`
<style>
    .container{
        display:grid;
        grid-template-rows:80px auto;
        grid-template-columns:1fr;
        grid-template-areas:"header" "main" "footer";
        grid-gap:2px;
    }
    header{
        grid-area:header;
        background-color:rgba(0,50,255,0.6);
        color:white;
        display:grid;
        grid-template-rows:1fr;
        grid-template-columns:1fr 1fr 1fr;
        grid-template-areas:"empty logo homepage";
        padding:5px;
    }
    #logo{
        grid-area: logo;
    }
    main{
        grid-area:main;
        display:flex;
        flex-direction:column;
    }
    #goToHomeBtn{
        grid-area:homepage;
    }
</style>
<div class="container">
    <header>
        <div id="logo"><h2>Give2Hand<iron-icon icon="all-out"></iron-icon></h2></div>
        <paper-button id="goToHomeBtn" on-click="_handleLogout">LOGOUT<iron-icon icon='settings-power'></iron-icon></paper-button>
    </header>
    <main>
       
    </main>
</div>
<iron-ajax id='ajax' handle-as='json' on-response='_handleResponse' on-error='_handleError' content-type='application/json'></iron-ajax>
`;
    }
    /**
     * Properties used are defined here with their respective default values.
     */

    static get properties() {
        return {

        }
    }


    // _handleResponse(event) {
    //     switch (this.action) {
    //         case 'chart':
    //             this.schemeData = event.detail.response.schemes;
    //             console.log(this.schemeData);
    //             break;
    //         case 'table':
    //             this.schemeTable = event.detail.response.donors;
    //             break;
    //     }
    // }

    _handleLogout() {
        sessionStorage.clear();
        window.history.pushState({}, null, '#/login');
        window.dispatchEvent(new CustomEvent('location-changed'));
    }

    _makeAjax(url, method, postObj) {
        let ajax = this.$.ajax;
        ajax.url = url;
        ajax.method = method;
        ajax.body = postObj ? JSON.stringify(postObj) : undefined;
        ajax.generateRequest();
    }
}

window.customElements.define('admin-page', AdminPage);