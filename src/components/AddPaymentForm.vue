<template>
  <div>
    <input type="text" placeholder="Value" v-model="value" />
    <!-- <input type="text" placeholder="Category" v-model="category" /> -->
    <select name="" id="" v-model="category">
      <option
        v-for="category of categoryList"
        :value="category"
        :key="category"
      >
        {{ category }}
      </option>
    </select>
    <input type="text" placeholder="Date" v-model="date" />
    <button @click="addPayment()">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      value: "",
      category: "",
      date: "",
    };
  },
  computed: {
    paymentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    addPayment() {
      const { value, category, date } = this;
      const data = {
        value: +value,
        category,
        date: date || this.paymentDate,
      };
      this.$emit("add-payment", data);
      //   console.log("add");
      this.value = "";
      this.category = "";
      this.date = "";
    },
    // clean() {
    //   this.value = "";
    //   this.category = "";
    //   this.date = "";
    // },
  },
};
</script>

<style>
</style>