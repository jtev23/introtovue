import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myvm = (() => {
    // can put whatever here... this is inside the closure

    let vue_VM = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                { name: "Trevor", role: "prof" },
                { name: "Justin", role: "coordinator" },
                { name: "Joe", role: "prof" }
            ],

            isVisible: false,

            hasError: true

        },

        created: function () {
            this.logLoaded();
        },

        methods: {
            logLoaded() {
                console.log('loaded')
            },

            alertName(name) {
                console.log(name)
            }
        }
    }).$mount("#app");
})();