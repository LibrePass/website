<script>
  import { AuthClient } from "@librepass/client";

  async function submit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const authClient = new AuthClient();

    try {
      const response = await authClient.login(email, password)

      // set cookie with access and refresh token
      document.cookie = `access_token=${response.accessToken}; path=/;`
      document.cookie = `refresh_token=${response.refreshToken}; path=/;`

      window.location.href = "/user/dashboard"
    } catch (err) {
      alert(err.message)
    }
  }
</script>

<section>
  <div class="form">
    <h1>Login</h1>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Email" />

    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Password" />

    <button on:click={submit}>Login</button>
  </div>
</section>

<style lang="scss">
  @import "../register/styles.scss";
</style>
