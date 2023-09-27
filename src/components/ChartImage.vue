<template>
  <div>
    <div v-if="$store.state.images && $store.state.images.image0">
      <img class="col" :src="$store.state.images.image0" alt="이미지" />
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
