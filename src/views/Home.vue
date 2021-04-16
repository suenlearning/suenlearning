<template>
  <main class="main__home">
    <ul class="reasons">
      <li class="reasons__reason">
        <h2 class="reasons__title">Fast & easy</h2>
        <p class="reasons__text">
          Prepare activities for your students in just a few minutes and in
          simple steps
        </p>
      </li>
      <li class="reasons__reason">
        <h2 class="reasons__title">Share with students</h2>
        <p class="reasons__text">
          You can send a direct link to your students or download the activity
          as a pdf
        </p>
      </li>
      <li class="reasons__reason">
        <h2 class="reasons__title">Build your collection</h2>
        <p class="reasons__text">
          Save created activities in the cloud to have easy access whenever
          needed
        </p>
      </li>
      <li class="reasons__reason">
        <h2 class="reasons__title">Browse our database</h2>
        <p class="reasons__text">
          Don't reinvent the wheel - check and use what other teachers have
          created
        </p>
      </li>
      <li class="reasons__reason">
        <h2 class="reasons__title">Free to use</h2>
        <p class="reasons__text">
          No hidden fees. No trial period. Free unlimited access.
        </p>
      </li>
    </ul>
    <figure class="infographic">
      <img
        src="@/assets/images/edu.png"
        alt="infographic"
        class="infographic__image"
      />
    </figure>
  </main>
</template>

<script></script>

<style scoped>
.main__home {
  margin-top: 30px;
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.reasons {
  width: 40vw;
}

.reasons__reason {
  margin: 1vw 0;
}

.reasons__title {
  color: var(--colorTextHeader);
  /* 20px */
  font-size: 1.25rem;
  font-weight: 500;
}

.reasons__text {
  font-size: 16px;
  line-height: 1.3;
  font-weight: 300;
}

.infographic {
  height: 60vh;
  max-height: 400px;
  margin-left: 3vw;
}

.infographic__image {
  height: 100%;
}

@media screen and (min-width: 768px) {
  .home__cards--container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .home__cards--item {
    margin: 0 15px;
    padding: 20px 12px;
    width: 154px;
    border: 2px solid var(--colorBorder);
  }

  .card__thumb {
    max-height: 100px;
  }

  .card__title {
    font-size: 20px;
  }

  .card__description {
    font-size: 18px;
  }
}
</style>
