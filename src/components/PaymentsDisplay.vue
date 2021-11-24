<template>
  <div>
    <div v-if="show" :class="[$style.show]">Props is true</div>
    <div v-for="(item, index) in items" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  //   props: ["show"],
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      require: true,
      //если не примитивные данные, то в качестве дефолтных значений исп функция
      default: () => [],
    },
  },
};
</script>

<style module>
.show {
  color: red;
}
</style>