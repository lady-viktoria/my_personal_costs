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
      <tr v-for="(item, index) in currentElements" :key="index">
        <td align="center">{{ n * (curPage - 1) + index + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td align="center">{{ item.value }}</td>
      </tr>
    </table>
    <Pagination
      :length="items.length"
      :n="n"
      :cur="curPage"
      @onSelectPage="onChangePage"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  components: { Pagination },
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
  data() {
    return {
      curPage: 1,
      n: 3,
    };
  },
  methods: {
    onChangePage(p) {
      this.curPage = p;
    },
  },
  computed: {
    currentElements() {
      const { n, curPage } = this;
      return this.items.slice(n * (curPage - 1), n * (curPage - 1) + n);
    },
  },
  // mounted() {
  //   const page = this.$route.params.page || 1;
  //   this.curPage = Number(page);
  // },
};
</script>

<style module>
.show {
  color: red;
}
</style>