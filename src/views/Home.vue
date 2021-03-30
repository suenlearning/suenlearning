<template>
  <main class="main__home">
    <ul class="home__cards--container">
      <li class="home__cards--item">
        <router-link :to="{ name: 'generators' }" class="card__link">
          <article class="card">
            <img
              class="card__thumb"
              :src="require(`@/assets/img/generator.png`)"
              alt="worksheet generator"
            />
            <h3 class="card__title">generator</h3>
            <p class="card__description">create your own worksheets</p>
          </article>
        </router-link>
      </li>
      <li class="home__cards--item">
        <router-link :to="{ name: 'about' }" class="card__link">
          <article class="card">
            <img
              class="card__thumb"
              :src="require(`@/assets/img/solids.png`)"
              alt="browse database"
            />
            <h3 class="card__title">browse</h3>
            <p class="card__description">explore our database</p>
          </article>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script></script>

<style scoped>
.main__home {
  width: 100%;
  height: 100vh;
  /* height: 100%; /* to fill whole main element */
}

.home__cards--container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.home__cards--item {
  margin: 12px 0;
  padding: 16px 8px;
  width: 134px;
  border: 1px solid var(--colorBorder);
  border-radius: 10px;
  /* height: 250px; */
}

/* .card {
  width: 100%;
} */

.card__thumb {
  /* options: use only images of the same size and alpha background or set fixed height to the lowest of the images */
  /* width: 100%; */
  max-height: 70px;
}

.card__title {
  font-size: 16px;
  margin: 10px 0;
  font-weight: 600;
}

.card__description {
  font-weight: 300;
  font-size: 16px;
}

.card__link {
  text-decoration: none;
  color: var(--colorMain);
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
