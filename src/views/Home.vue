<template>
  <section class="main__home">
    <ul class="home__cards--container">
      <li class="home__cards--item" v-for="(card, index) in cards" :key="index">
        <router-link :to="card.path" class="card__link">
          <article class="card">
            <img
              class="card__img"
              :src="require(`@/assets/img/${card.image}`)"
              :alt="card.alt"
            />
            <h3 class="card__title">{{ card.name }}</h3>
            <p class="card__description">{{ card.description }}</p>
          </article>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          name: 'generator',
          description: 'create your own worksheets',
          path: '/workspace',
          image: 'generator.png',
          alt: 'worksheet generator'
        },
        {
          name: 'browse',
          description: 'explore our database',
          path: '/about',
          image: 'solids.png',
          alt: 'files'
        }
      ]
    }
  }
}
</script>

<style scoped>
.main__home {
  height: 100%; /* to fill whole main element */
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

.card__img {
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

  .card__img {
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
