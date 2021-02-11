<template>
  <section class="container">
    <div class="item" v-for="(block, index) in blocks" :key="index">
      <router-link :to="block.path">
        <img :src="require(`@/assets/img/${block.image}`)" :alt="block.alt" />
      </router-link>
      <h3>{{ block.name }}</h3>
      <p class="adjustHeight">{{ block.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
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
.container {
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* height: 100%; */
  width: 100%;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid red;
  width: 150px;
  height: 250px;
}
.item img {
  max-height: 120px;
}

.adjustHeight {
  height: 40px;
  display: flex;
  align-items: center;
}
</style>
