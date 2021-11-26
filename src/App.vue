<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <header>
      <h1>My personal costs</h1>
    </header>
    <button @click="showForm()">ADD NEW COST +</button>
    <p></p>
    <AddPaymentForm v-if="addForm" @add-payment="addNewPayment" />
    <PaymentsDisplay :show="show" :items="paymentsList" />

    <!-- <PaymentsDisplay show /> -->
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPaymentForm from "./components/AddPaymentForm.vue";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: true,
      paymentsList: [],
      addForm: false,
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: "28.03.2021",
          category: "Food",
          value: 169,
        },
        {
          date: "20.03.2021",
          category: "Sport",
          value: 400,
        },
        {
          date: "26.03.2021",
          category: "Internet",
          value: 300,
        },
      ];
    },
    showForm() {
      this.addForm = !this.addForm;
    },
    addNewPayment(payment) {
      console.log("addNewPayment", payment);
      this.paymentsList.push(payment);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
    console.log(this.paymentsList);
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
