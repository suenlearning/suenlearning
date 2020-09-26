<template>
  <div class="container">
    <div class="item" v-for="(block, index) in blocks" :key="index">
      <router-link :to="block.path">
        <img :src="require(`@/assets/img/${block.image}`)" :alt="block.alt" />
      </router-link>
      <h3>{{ block.name }}</h3>
      <p>{{ block.description }}</p>
    </div>
  </div>
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
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  height: 300px;
  width: 800px;
}
.item {
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 250px;
}
.item img {
  max-height: 120px;
}
</style>
