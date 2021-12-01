<template>
  <div :class="[$style.wrapper]">
    <div @click="onClick(cur - 1)">&lt;</div>
    <div
      v-for="i in amount"
      :key="i"
      :class="{ [$style.active]: cur === i }"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">&gt;</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    // длина списка платежей
    length: Number,
    // количество платежей на странице
    n: Number,
    cur: Number,
  },
  computed: {
    // количество страниц
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(page) {
      if (page < 1 || page > this.amount || page === this.cur) {
        return;
      }
      this.$emit("onSelectPage", page);
    },
  },
};
</script>

<style module lang="scss">
.wrapper {
  display: flex;
  & > div {
    padding: 10px;
  }
}
.active {
  background: #ccc;
}
</style>

