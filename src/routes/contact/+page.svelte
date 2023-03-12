<script>
    import Email from "svelte-material-icons/Email.svelte";
    import Account from "svelte-material-icons/Account.svelte";

    const email = "librepass@medzik.dev"
</script>

<section>
    <h1>Contact</h1>

    <h2>Feel free to contact me if you have any questions, suggestions or bugs.</h2>

    <p><Email /> <a href={`mailto:${email}`}>{email}</a></p>
    <p><Account /> <a href="https://matrix.to/#/@medzik:matrix.io">@medzik:matrix.org</a></p>
</section>

<style lang="scss">
  @import "$lib/css/variables.scss";

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: $bg-color-2;
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    font-weight: bold;
    margin: 0 0.5rem;
  }

  p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
