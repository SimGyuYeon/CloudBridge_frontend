<template>
  <div>
    <div v-if="$store.state.images && $store.state.images.image1">
      <div class="row">
        <img class="col" :src="$store.state.images.image1" alt="이미지" />
        <img class="col" :src="$store.state.images.image2" alt="이미지" />
      </div>
      <div class="row">
        <img class="col" :src="$store.state.images.image3" alt="이미지" />
        <img class="col" :src="$store.state.images.image4" alt="이미지" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 이미지 경로를 데이터에 설정합니다.
      // imagePath: this.$store.state.images,
    };
  },
};
</script>

<style scoped></style>
