//computed thực hiện như 1 function nhưng nó chỉ được coi như một thuộc tính 

new Vue({
    el: '#app',
    data: {
        // title: 'Long time long see',
        // main: 'Hoang Ngoc Dai',
        // link: 'https://github.com/ngocdai2001',
        // testHTML: '<a href="https://codelearn.io/sharing/thao-tac-voi-dom-bang-javascript">Learn VueJs</a>',
        // dem: 0,
        // x : 0,
        // y : 0,
        // diem: 'Môn A có điểm 8',


        // Phân biệt click giữa các ô với computed, nếu không phải ô thứ 3 thì chuyển 
        // hết sang màu đỏ, còn ô thứ 3 thì chuyển sang xanh
        checkBlock: false,
        color: 'green',
        ho: 'Nguyen',
        ten: 'Vuong',
    },
    computed: {
        validateCheckblock() {
             
        }
    },
    watch: {
        // diem: function(newValue) {
        //     alert('Điểm của bạn có sự thay đổi!')
        // }
    },
    methods: {
        thisMoment() {
            return new Date()
        },
        printThisMoment() {
            const timer = setInterval(() => {
                this.$refs.computedNow.innerText = this.now
                this.$refs.methodNow.innerText = this.thisMoment()
            }, 1000)
            setTimeout(() => clearTimeout(timer), 5001)
        }
        // divClasses: function() {
        //     return {
        //         red : this.checkBlock,
        //         green: !this.checkBlock,
        //     }
        // }
        // changeValue: function(event) {
        //     this.title = event.target.value;
        // },
        // showPost: function() {
        //     return this.main;
        // },
        // toaDo: function(event) {
        //     this.x = event.clientX;
        //     this.y = event.clientY;
        // },
        // stopMouse: function(event) {
        //     event.stopPropagation(); //Dừng sự kiện event Mouse   
        // },
        // keyBoard: function() {
        //     alert('Xin Chào ');
        // }
    },
})

// app.diem = 'Bạn A có điểm 9'