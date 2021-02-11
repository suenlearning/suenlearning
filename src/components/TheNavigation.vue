<template>
  <nav id="nav">
    <figure class="logo">
      <img :src="imagePath" alt="logo" />
    </figure>
    <ul class="navLinks">
      <li class="link" v-for="(link, index) in navLinks" :key="index">
        <router-link :to="link.path">{{ link.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['imagePath'],
  data() {
    return {
      navLinks: [
        {
          text: 'home',
          path: '/'
        },
        {
          text: 'workspace',
          path: '/workspace'
        },
        {
          text: 'patreon',
          path: '#'
        },
        {
          text: 'about',
          path: '/about'
        },
        {
          text: 'contact',
          path: '/contact'
        }
      ]
    }
  }
}
</script>

<style>
#nav {
  display: flex;
  height: 60px;
  max-width: 1200px;
  padding: 10px 0px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
#nav a {
  font-weight: normal;
  color: #521818;
  text-decoration: none;
  align-items: center;
}
#nav a.router-link-exact-active {
  color: #30b2e7;
}
.navLinks {
  display: flex;
  align-items: center;
  height: 100%;
}
.link {
  padding-right: 30px;
  align-items: center;
}

.logo img {
  height: 25px;
  justify-content: flex-start;
}
</style>
