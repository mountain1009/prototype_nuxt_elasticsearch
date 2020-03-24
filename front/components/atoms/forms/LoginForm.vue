<template>
  <v-card>
    <v-container>
      <v-form ref="form" :model="form">
        <v-text-field
          label="メールアドレス"
          v-model="form.email"
          required
        />
        <v-text-field
          label="パスワード"
          v-model="form.password"
          required
        />
        <v-btn @click="login">Login</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
      }
    },
    methods: {
      async login() {
        return this.$auth.loginWith('local', {data: this.form})
      }
    }
  }
</script>
