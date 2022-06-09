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
         let num1 = num.split(" ").sort( (a, b) => a - b );
         if (!num1.every((a) => /^(0|-?[1-9]\d*)$/.test(a))) {
            return this.error;
         } else {
            let sum = parseInt(num1[0].trim()) + parseInt(num1[1].trim());
            return `Сумма двух минимальных чисел: ${sum}`;
         }
         // вариант нахождения 2 минимальных значенией через Math.min:
               // let num1 = num.split(" ");
               // let min = Math.min(...num1);
               // let sum = min + Math.min(...num1.splice(num1.indexOf(min), 1));
      },
      sumOfMin() {
         this.text = "";
         if (this.num==false || this.num.includes(',')){
            this.text = this.error;
         } else {
            this.testFunc();
            this.text = this.searchMin(this.num);
         }
      },
      testFunc(){
         if (this.searchMin('1 0 2')!=='Сумма двух минимальных чисел: 1') {
            throw new Error('Функция работает неверно')
         }
         if (this.searchMin('1 0  2')!=='Введите массив чисел через пробел') {
            throw new Error('Функция работает неверно')
         }
      }
   }
 }).mount("#app");