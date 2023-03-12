<script>
  import { AuthClient } from "@librepass/client";

  async function submit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const passwordHint = document.getElementById("passwordHint").value;

    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    const authClient = new AuthClient();

    try {
      await authClient.register(email, password, passwordHint)

      window.location.href = "/login"
    } catch (err) {
      alert(err.message)
    }
  }
</script>

<section>
  <div class="form">
    <h1>Register</h1>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Email" />

    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Password" />

    <label for="password2">Confirm Password</label>
    <input type="password" id="password2" name="password2" placeholder="Confirm Password" />

    <label for="passwordHint">Password Hint</label>
    <input type="text" id="passwordHint" name="passwordHint" placeholder="Password Hint (optional)" />

    <button on:click={submit}>Register</button>
  </div>
</section>

<style lang="scss">
  @import "styles.scss";
</style>
