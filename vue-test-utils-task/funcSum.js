export default {
  template: `
    <div class="app">
    <form @submit.prevent="sumOfMin()">
      <label for="poisk">Введите последовательность чисел:</label>
      <input type="text" id="poisk" name="num"
          v-model.trim="num">
      <button type="submit" id="test">Найти сумму минимальных чисел</button>
    </form>
    <div>
      <p id="result">{{text}}</p>
    </div>
    </div>
  `,

  data () {
    return {
      count: 0,
      num: "",
      error: "Введите числа через пробел",
      text: ""
    }
  },

  methods: {
    increment () {
      this.count++
    },
    searchMin(num) {
      let num1 = num.split(" ");
        if (!num1.every((a) => /^(0|-?[1-9]\d*)$/.test(a))) {
          return 'error';
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
          return sum;
        }
    },
    sumOfMin() {
      this.text = "";
      if (this.num==false || this.num.includes(',')){
        this.text = this.error;
      } else {
        this.text = this.searchMin(this.num);
      }
      this.$emit('submit', this.text);
    }
  }
}


