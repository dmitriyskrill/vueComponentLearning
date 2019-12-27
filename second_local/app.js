let PlanComponent = {
    template: '#plan-template',
    props: {
        name: String,
    }
}


let PlanPickerComponent = {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['first', 'second', 'third']
        }
    },
    components:{
        plan: PlanComponent
    }

}


new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent,
        'plan': PlanComponent // можно написать и.... plan: PlanComponent
    }
})