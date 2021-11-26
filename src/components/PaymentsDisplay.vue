<template>
  <div>
    <!-- <div v-if="show" :class="[$style.show]">Props is true</div> -->
    <!-- <div v-for="(item, index) in items" :key="index">{{ item }}</div> -->
    <table id="table" cellpadding="10">
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td align="center">{{ index + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td align="center">{{ item.value }}</td>
      </tr>
    </table>
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