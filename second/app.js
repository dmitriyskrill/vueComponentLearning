Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['first', 'second', 'third']
        }
    }
})

Vue.component('plan', {
    template: '#plan-template',
    props: {
        name: String,
    }
})

new Vue({
    el: '#app',
})