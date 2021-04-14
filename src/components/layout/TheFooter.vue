<template>
  <footer class="footer">
    <div>
      <p>
        ©
        <a
          href="https://github.com/marcjnn"
          class="nav__link"
          title="visit my github"
          >marcjnn</a
        >
        2021
      </p>
    </div>
    <nav>
      <ul class="footer__nav">
        <li class="footer__nav--item">
          <router-link :to="{ name: 'home' }" class="nav__link"
            >home</router-link
          >
        </li>
        <li class="footer__nav--item">
          <router-link :to="{ name: 'generators' }" class="nav__link"
            >workspace</router-link
          >
        </li>
        <li class="footer__nav--item">
          <router-link :to="{ name: 'about' }" class="nav__link"
            >about</router-link
          >
        </li>
        <li class="footer__nav--item">
          <router-link :to="{ name: 'contact' }" class="nav__link"
            >contact</router-link
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: var(--colorFooter);
  position: relative;
  color: white;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  padding: 1vw;
  margin-top: -10px;
}

.footer .patreon {
  margin: 2vw 0;
}

.footer__nav {
  display: flex;
  flex-direction: column;
}

.footer .nav__link {
  font-size: 14px;
  color: white;
}

.footer .patreon .nav__link {
  padding-left: 4px;
}
</style>
