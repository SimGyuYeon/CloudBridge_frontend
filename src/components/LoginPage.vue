<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form class="login100-form validate-form" @submit.prevent="login">
          <h1
            :style="{
              fontFamily: 'proxima-nova-soft, sans-serif',
              fontWeight: '400',
              fontSize: '2.0rem',
              paddingBottom: '200px',
              width: '100%',
            }"
          >
            단기 시계열 예측 시스템
          </h1>
          <span class="login100-form-title p-b-34"> username Login </span>
          <div
            class="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
            data-validate="Type user name"
          >
            <input
              id="first-name"
              class="input100"
              type="text"
              name="username"
              v-model="user.username"
              placeholder="User name"
            />
            <span class="focus-input100"></span>
          </div>
          <div
            class="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
            data-validate="Type password"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              v-model="user.password"
              placeholder="Password"
            />
            <span class="focus-input100"></span>
          </div>
          <div class="container-login100-form-btn">
            <button class="login100-form-btn" type="submit">Log in</button>
          </div>
          <div class="w-full text-center p-t-27 p-b-239">
            <!-- <span class="txt1">
              Forgot
            </span>
            <a href="#" class="txt2">
              User name / password?
            </a> -->
          </div>
        </form>
        <div
          class="login100-more"
          :style="{
            backgroundImage: `url(${require('@/assets/img/kdn.png')})`,
            backgroundSize: '80%',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      cssProps: {
        backgroundImage: `url(${require("@/assets/img/kdn.png")})`,
      },
    };
  },
  methods: {
    async login() {
      try {
        const res = await this.$store.dispatch("FETCH_LOGIN", this.user);
        console.log(res);
        // Check if the login was successful before navigating to "/main"
        if (res.success) {
          this.$router.push("/main");
        } else {
          alert("Login failed, contact administrator");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred during login");
      }
    },
  },
};
</script>
