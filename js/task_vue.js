"use strict"

 Vue.createApp({
    data() {
        return {
            num: "",
            error: "Введите массив чисел через пробел",
            text: ""
        }
    },
    computed: {
    },
    methods: {
      searchMin(num) {
         let num1 = num.split(" ");
         if (!num1.every((a) => /^(0|-?[1-9]\d*)$/.test(a))) {
            return this.error;
         } else {
            let min1 = parseInt(num1[0]);
            let min2 = parseInt(num1[1]);
            if (num1[0]>num1[1]) {
               min2 = parseInt(num1[0]);
               min1 = parseInt(num1[1]);
            }
            for (let q=2; q<num1.length; q++) {
               if (parseInt(num1[q])<min2 && parseInt(num1[q])>= min1) {
                  min2 = parseInt(num1[q]);
               } 
               if (parseInt(num1[q])<min1) {
                  min2 = min1;
                  min1 = parseInt(num1[q]);
               } 
            }
            let sum = min1 + min2;
            return `Сумма двух минимальных чисел: ${sum}`;
         }
         // вариант 2 нахождения минимальных значенией через sort
            // let num1 = num.split(" ").sort( (a, b) => a - b );
            // let sum = parseInt(num1[0]) + parseInt(num1[1]);

         // вариант 3 нахождения  минимальных значенией через Math.min:
            // let num1 = num.split(" ");
            // let min = Math.min(...num1);
            // let sum = min + Math.min(...num1.splice(num1.indexOf(min), 1));
      },
      sumOfMin() {
         this.text = "";
         if (this.num==false || this.num.includes(',')){
            this.text = this.error;
         } else {
           this.text = this.searchMin(this.num);
         }
      },
      test_button() {
         let button = document.getElementById('test');
         if (button.addEventListener('click')) {
            
         }
      }
   }
 }).mount("#app");