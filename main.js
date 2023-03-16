const app = Vue.createApp({
    // template: `<p>{{ title }} and {{!isCheck ? firstName +" "+ lastName : ""}}</p>
    //             <button @click = "onChangeName">Change</button>
    //             <div class="modal" v-if = "isShowModal">Modal form</div>`,

    data() {
        return {
            // title: 'Vuejs',
            // firstName: 'Hoang',
            // lastName: 'Ngoc',
            // isCheck: false, 
            // isShowModal: false  
            x: 0,
            y: 0
        }
    },

    methods: {
        onLogEvent(event) {
            console.log("run", event)
        }, 

        onLogEventMove(event) {
            console.log("run move", event)
            this.x = event.offsetX
            this.y = event.offsetY
        }

        // onChangeName() {
        //     this.title = "Lean VueJs day 1"
        //     this.firstName = "Ngoc"
        //     this.lastName = "Dai"
        //     this.isShowModal = !this.isShowModal
        // }
    },
})

app.mount("#contact")
