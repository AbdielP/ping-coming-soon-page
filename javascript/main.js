(() => {
    const app = new Vue({
        el: '#app',
        data: {
            error: false,
            email: null
        },
        methods: {
            checkForm: function (e) {
                
                e.preventDefault();
                if (!this.email) {
                    this.error = true;
                } else if (!this.validEmail(this.email)) {
                    this.error = true;
                } else {
                    this.error = false;
                }
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    })
})();