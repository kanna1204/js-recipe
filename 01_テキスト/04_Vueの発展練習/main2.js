Vue.createApp({
  data() {
    return {
      seen: false,
    }
  },
  methods: {
    hyouji() {
      this.seen = true
    },
  },
}).mount("#v-if")

Vue.createApp({
  data() {
    return {
      user: null,
    }
  },
  methods: {
    signIn() {
      this.user = {
        name: "かんな",
      }
    },
    signOut() {
      this.user = null
    },
  },
}).mount("#v-if-sign-in")

Vue.createApp({
  data() {
    return {
      animals: ["フラミンゴ", "ごりら", "らいおん"],
    }
  },
  methods: {
    addAnimal() {
      this.animals.push("きつね")
    },
  },
}).mount("#v-for")

Vue.createApp({
  data() {
    return {
      items: [
        {
          name: "apple",
          price: 150,
          amount: 3,
        },
        {
          name: "orange",
          price: 100,
          amount: 5,
        },
        {
          name: "grape",
          price: 400,
          amount: 1,
        },
      ],
    }
  },
  computed: {
    totalPrice() {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
  methods: {
    addItem(item) {
      item.amount += 1
    },
    minusItem(item) {
      item.amount -= 1
    },
  },
}).mount("#computed")
