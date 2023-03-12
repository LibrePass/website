<script>
  import { onMount } from "svelte";

  import { getCookie } from "$lib/utils/cookies.js";
  import * as cookies from "$lib/utils/cookies.js";

  let mounted = false;
  let userId;

  onMount(() => {
    mounted = true;
    userId = getCookie(cookies.userId);
  })
</script>

<section>
  {#if mounted}
    {#if userId}
      <h1>Logged in</h1>
      <h2>ID: {userId}</h2>
    {:else}
      <h1>Not logged in</h1>
    {/if}
  {/if}
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
    text-align: center;
  }
</style>
