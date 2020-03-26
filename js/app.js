new Vue({
    el: "#app",
    data: {
        tab: 'profile'
    },
    methods: {
        setTab: function (tab) {
            this.tab = tab;
        }
    }
});
