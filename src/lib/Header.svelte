<script>
  import { onMount } from "svelte"

  import banner from './images/banner.png'
  import { getCookie } from "$lib/utils/cookies.js";
  import * as cookies from "$lib/utils/cookies.js";

  function handleMenu() {
    const left = document.querySelector('.left')
    const right = document.querySelector('.right')

    if (left.style.display === 'none') {
      left.style.display = 'flex'
      right.style.display = 'flex'
    } else {
      left.style.display = 'none'
      right.style.display = 'none'
    }
  }

  let mounted = false;
  let userId;

  onMount(() => {
    mounted = true;
    userId = getCookie(cookies.userId);

    // window.addEventListener('resize', handleResize)
    window.onresize = handleResize
  })

  function handleResize() {
    const left = document.querySelector('.left')
    const right = document.querySelector('.right')

    if (window.innerWidth > 768) {
      left.style.display = 'flex'
      right.style.display = 'flex'
    }
  }
</script>

<section>
  <div class="drawing-box">
    <div class="banner">
      <a href="/">
        <img src={banner} alt="LibrePass banner" />
      </a>

      <div class="show-menu">
        <a href={null} on:click={handleMenu}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#fff"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a>
      </div>
    </div>

    <div class="left">
      <div>
        <a href="/download">Download</a>
      </div>

      <div>
        <a href="/help">Help</a>
      </div>

      <div>
        <a href="/contact">Contact</a>
      </div>
    </div>

    <div class="right">
      {#if mounted}
        {#if userId}
          <div>
            <a href="/user/dashboard">Dashboard</a>
          </div>
        {:else}
          <div>
            <a href="/login">Login</a>
          </div>

          <div>
            <a href="/register">Register</a>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</section>

<style lang="scss">
  @import "$lib/css/variables.scss";

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: $bg-color-2;
  }

  .drawing-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 70rem;
  }

  a {
    color: inherit;
    font-weight: 600;
    cursor: pointer;
  }

  .left, .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
  }

  .left div, .right div {
    padding: 0.5rem;
  }

  .left {
    justify-content: flex-start;
  }

  .right {
    justify-content: flex-end;
  }

  img {
    height: 5rem;
  }

  .show-menu {
    display: none;
  }

  //// create a vertical media query for mobile devices
  //@media screen and (max-width: 768px) {
  //  .drawing-box {
  //    flex-direction: column;
  //  }
  //
  //  .left {
  //    margin-bottom: 2rem;
  //  }
  //
  //  .right {
  //    margin-top: 2rem;
  //  }
  //}

  // create show/hide menu for mobile devices
  @media screen and (max-width: 768px) {
    .drawing-box {
      flex-direction: column;
      height: 100%;
    }

    .banner {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      flex: 1;
    }

    .banner img {
      justify-content: flex-start;
    }

    .show-menu {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
    }

    .left, .right {
      display: none;
      flex-direction: column;
      width: 100%;
      align-items: start;
      top: 5rem;
    }

    .left div, .right div {
      padding: 0.5rem;
      align-items: start;
    }
  }
</style>
