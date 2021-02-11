<template>
  <header class="header">
    <img :src="imagePath" alt="logo" class="logo" />
    <nav>
      <ul class="header__nav">
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          class="header__nav--item"
        >
          <router-link :to="link.path" class="nav__link"
            >{{ link.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
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
.header {
  /* width: 100%; */
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  border-top: 8px solid var(--colorHeader);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav {
  display: flex;
}

.header__nav .header__nav--item:last-child {
  padding: 0 0 0 15px;
}

.header__nav .header__nav--item:first-child {
  border: none;
}

.header__nav--item {
  padding: 0 15px;
  border-left: 1px solid var(--colorBorder);
}

.nav__link {
  color: #521818;
  text-decoration: none;
  font-size: 17px;
}

.header__nav a.router-link-exact-active {
  color: #30b2e7;
}

.logo {
  height: 30px;
}
</style>
