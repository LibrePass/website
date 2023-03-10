<script>
  function submit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // TODO: Send data to server
    alert("TODO")

    /*
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("Successfully registered");
          window.location.href = "/login";
        }
      });*/
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
