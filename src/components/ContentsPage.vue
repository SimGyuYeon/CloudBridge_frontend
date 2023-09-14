<template>
  <div>
    <FileUpload></FileUpload>
    <br />
    <br />
    <br />
    <FileList></FileList>
    <br />
    <br />
    <br />
    <LineChart></LineChart>
    <br />
    <br />
    <br />
    <ImageGrid></ImageGrid>
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import FileUpload from "./FileUpload.vue";
import ImageGrid from "./ImageGrid.vue";
import FileList from "./FileList.vue";

export default {
  name: "ContentsPage",
  components: { LineChart, FileUpload, ImageGrid, FileList },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
