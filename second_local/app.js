let PlanComponent = {
    template: '#plan-template',
    props: {
        name: String,
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected(){
            return this.name === this.selectedPlan
        }
    },

    methods: {
        select() {
            this.$emit('select', this.name)
        }
    }
}


let PlanPickerComponent = {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['first', 'second', 'third'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
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