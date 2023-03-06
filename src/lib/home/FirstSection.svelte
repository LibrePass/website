<script>
  import desktopImage from '$lib/images/desktop.png';
</script>

<section>
  <div class="drawing-box">
    <div class="text-img">
      <div class="text-img-1">
        <h1>
          Take control of your passwords with LibrePass.
        </h1>

        <h2>
          With LibrePass, collaboration and productivity go hand in hand. Experience the ease of secure password management and take your work to the next level.
        </h2>

        <a href="/">
          <button class="get-started">
            Get Started
          </button>
        </a>
      </div>

      <div class="text-img-2">
        <img src={desktopImage} alt="github screenshot" />
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  @import "../../routes/variables.scss";

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
    background: $bg-color-2;
  }

  .drawing-box {
    max-width: 70rem;
    margin: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .text-img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .text-img-1, .text-img-2 {
    flex: 0.5;
  }

  button {
    background: $color-theme-3;
    color: $color-theme-1;
    border: none;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: 600;
  }

  .get-started {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .drawing-box {
      text-align: center;
    }

    .text-img {
      flex-direction: column;
    }
  }
</style>
