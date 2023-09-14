<template class="homepage">
  <div>
    <header>ID</header>
    <!-- 뒷 배경 -->
    <div class="background-chart fade-in">
      <canvas
        id="background-bar"
        width="1063"
        height="375"
        style="
          display: block;
          box-sizing: border-box;
          height: 375px;
          width: 1063px;
        "
      ></canvas>
    </div>
    <div class="content-overlay fade-in-up animation-delay__1">
      <TitleView></TitleView>
      <ContentsPage></ContentsPage>
    </div>
  </div>
</template>

<script>
import TitleView from "@/components/TitleView.vue";
import ContentsPage from "./ContentsPage.vue";

export default {
  name: "MainPage",
  components: {
    TitleView,
    ContentsPage,
  },
};
</script>

<style scoped></style>
