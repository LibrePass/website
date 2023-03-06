<script>
</script>

<section>
  <div class="drawing-box">
    <h1>Everything you need out of a password manager</h1>
  </div>

  <div class="row">
    <div class="row-item">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#fff"><path d="M80 896v-90h86V316q0-24.75 17.625-42.375T226 256h620v60H226v490h234v90H80Zm479 0q-16.575 0-27.787-13.5Q520 869 520 852V415q0-16.575 11.213-27.787Q542.425 376 559 376h271.751Q850 376 865 386.5q15 10.5 15 28.5v437.273q0 18.584-14.5 31.155Q851 896 831 896H559Zm21-90h240V436H580v370Z"/></svg>
      <h1>Easy</h1>
      <h2>The application's clear interface makes LibrePass easy to use.</h2>
    </div>

    <div class="row-item">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#fff"><path d="M407 731q23 23 66.5 21.5T537 720l216-339-335 219q-30 20-32 64t21 67Zm71-474q57 0 119 18.5T716 339l-52 37q-45-30-96.5-44.5T477.978 317q-140.472 0-239.225 100.215Q140 517.431 140 659.983 140 705 152.5 751q12.5 46 35.5 85h579q22-36 35-84t13-94q0-42-12.5-90.5T758 478l39-52q38 56 57 112.5T875 652q2 60-12 113t-41 98q-12 23-25.5 28t-33.5 5H192q-17 0-33.5-8.5T134 863q-26-48-40-97.5T80 660q0-83 31.5-156.5t85.5-128Q251 321 323.68 289T478 257Zm-9 331Z"/></svg>
      <h1>Speed</h1>
      <h2>Instant access to your passwords and data.</h2>
    </div>

    <div class="row-item">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#fff"><path d="M480 976q-140-35-230-162.5T160 534V296l320-120 320 120v238q0 152-90 279.5T480 976Zm0-62q106-35 175.5-128.5T737 576H480V241l-260 97v196q0 12 .5 20.5T223 576h257v338Z"/></svg>
      <h1>Secure</h1>
      <h2>Protect your passwords and data with end to end encryption.</h2>
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
    background: $bg-color-3;
  }

  h2 {
    font-size: 1rem;
    font-weight: 600;
    color: $text-color-2;
  }

  .drawing-box {
    max-width: 70rem;
    margin: 1rem;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .row-item {
    height: 12rem;
    flex: 1;
    margin: 2.5rem;
    max-width: 15rem;
    text-align: center;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .drawing-box {
      text-align: center;
    }

    .row {
      flex-direction: column;
    }

    .row-item {
      margin: 1rem;
    }
  }
</style>
