<template>
  <header class="header">
    <h1 class="hidden">Worksheet Generator</h1>
    <router-link to="/" class="nav__link"
      ><img :src="imagePath" alt="logo" class="logo"
    /></router-link>
    <nav>
      <ul class="header__nav">
        <li class="header__nav--item">
          <router-link :to="{ name: 'home' }" class="nav__link"
            >home</router-link
          >
        </li>
        <li class="header__nav--item">
          <router-link :to="{ name: 'generators' }" class="nav__link"
            >workspace</router-link
          >
        </li>
        <!-- <li class="header__nav--item">
          <a href="/" class="nav__link">patreon</a>
        </li> -->
        <li class="header__nav--item">
          <router-link :to="{ name: 'about' }" class="nav__link"
            >about</router-link
          >
        </li>
        <li class="header__nav--item">
          <router-link :to="{ name: 'contact' }" class="nav__link"
            >contact</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['imagePath']
}
</script>

<style>
.header {
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  border-top: 8px solid var(--colorHeader);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 1000;
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
  color: var(--colorMain);
  text-decoration: none;
  font-size: 17px;
}

.header__nav a.router-link-exact-active {
  color: var(--colorFooter);
}

.logo {
  height: 30px;
}
</style>
