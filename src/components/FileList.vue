<template>
  <div>
    <!-- 확인용 -->
    <!-- {{ selected }} -->
    <b-table
      striped
      hover
      :items="this.$store.state.items"
      :fields="this.$store.state.fields"
      selectable
      select-mode="single"
      @row-selected="onRowSelected"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    onRowSelected(items) {
      items = items[0];
      this.selected = items;
      console.log(items.id);
      this.$store.dispatch("FETCH_CHART", { id: items.id });
      this.$store.dispatch("FETCH_IMAGES", { id: items.id });
    },
  },
  created() {
    this.$store.dispatch("FETCH_ITEMS");
  },
};
</script>

<style lang="scss" scoped></style>
