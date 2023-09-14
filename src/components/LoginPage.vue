<template>
  <div>
    <h2>Login</h2>
    <div>
      <div>
        <input
          type="text"
          id="account"
          placeholder="Account"
          v-model="user.account"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <div>
        <button @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.commit({
        type: "setUserData",
        userData: this.user,
      });
      this.$router.push("/main");
    },
  },
};
</script>
