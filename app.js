Vue.component('orders-wrapper',{
    template: `<p>{{greeting}}</p>`,
    data(){
        return{
            greeting: 'Hello world'
        }
    }
})

var app = new Vue({
    el: '#app'
})