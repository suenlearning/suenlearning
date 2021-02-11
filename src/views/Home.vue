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
  align-items: center;
  justify-content: center;
  text-align: center;
}

.home__cards--item {
  margin: 0 15px;
  padding: 20px 12px;
  width: 154px;
  border: 2px solid var(--colorBorder);
  border-radius: 10px;
  /* height: 250px; */
}

/* .card {
  width: 100%;
} */

.card__img {
  /* options: use only images of the same size and alpha background or set fixed height to the lowest of the images */
  /* width: 100%; */
  max-height: 100px;
}

.card__title {
  margin: 10px 0;
  font-weight: 600;
}

.card__description {
  font-weight: 300;
}

.card__link {
  text-decoration: none;
  color: var(--colorMain);
}
</style>
