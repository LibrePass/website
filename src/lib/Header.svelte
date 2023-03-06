<script>
  import banner from './images/banner.png'
  import { onMount } from "svelte";

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

  onMount(() => {
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
      <img src={banner} alt="LibrePass banner" />

      <div class="show-menu">
        <a href="javascript:void(0);" on:click={handleMenu}>Menu</a>
      </div>
    </div>

    <div class="left">
      <div>
        <a href="/">Download</a>
      </div>

      <div>
        <a href="/">Help</a>
      </div>

      <div>
        <a href="/">Contact</a>
      </div>
    </div>

    <div class="right">
      <div>
        <a href="/">Login</a>
      </div>

      <div>
        <a href="/">Register</a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../routes/variables.scss";

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
    padding: 1rem;
  }

  .left, .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
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
