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
    <ChartImage></ChartImage>
    <!-- <LineChart></LineChart> -->
    <br />
    <br />
    <br />
    <ImageGrid></ImageGrid>
  </div>
</template>

<script>
// import LineChart from "./LineChart.vue";
import ChartImage from "./ChartImage";
import FileUpload from "./FileUpload.vue";
import ImageGrid from "./ImageGrid.vue";
import FileList from "./FileList.vue";

export default {
  name: "ContentsPage",
  // components: { LineChart, FileUpload, ImageGrid, FileList },
  components: { ChartImage, FileUpload, ImageGrid, FileList },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
