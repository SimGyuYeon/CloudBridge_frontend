<template>
  <div class="hero-button-wrapper fade-in animation-delay__6">
    <div>
      <input
        type="file"
        @change="uploadFile"
        class="button button__blue d-none"
        ref="fileInput"
      />
      <button class="button button__blue" @click="simulateFileInputClick">
        파일 업로드
      </button>
    </div>
  </div>
</template>

<script>
import baseURL from "@/store/baseUrl";

export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    simulateFileInputClick() {
      // 파일 입력란을 클릭한 것처럼 시뮬레이트합니다.
      this.$refs.fileInput.click();
    },
    async uploadFile(event) {
      this.selectedFile = event.target.files[0];
      const formData = new FormData();
      console.log(this.selectedFile);
      formData.append("title", this.selectedFile.name);
      formData.append("file", this.selectedFile);
      // console.log(formData);
      try {
        const response = await baseURL.post("/api/upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert(response.data);
        this.$router.go(0);
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
