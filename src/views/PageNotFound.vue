<template>
  <main class="main__notfound">
    <div class="notfound">
      <h2 class="notfound__title">Did you know?</h2>
      <p class="notfound__text">
        The HTTP 404, 404 Not Found, 404, 404 Error, Page Not Found, File Not
        Found, or Server Not Found error message is a HTTP standard response
        code to indicate that the server could not find what was requested.
      </p>
      <p class="notfound__text">
        The website will typically generate a "404 Not Found" content when a
        user attempts to follow a broken or dead link; hence the 404 error is
        one of the most recognizable errors encountered on the World Wide Web.
      </p>
      <small class="notfound__text--small"
        >source
        <a
          href="https://en.wikipedia.org/wiki/HTTP_404"
          class="notfound__link"
          title="see on Wikipedia"
          target="_blank"
          >Wikipedia</a
        ></small
      >
      <div class="buttons">
        <p class="notfound__text">
          Go to...
        </p>
        <BaseButton tag="router" icon="home" classModifier="link"
          >Homepage</BaseButton
        >
        <BaseButton
          tag="router"
          to="generators"
          icon="cogs"
          classModifier="link"
          >Workspace</BaseButton
        >
      </div>
    </div>

    <figure class="infographic">
      <img
        src="@/assets/images/pagenotfound.png"
        alt="Page not found"
        class="infographic__image"
      />
    </figure>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
.main__notfound {
  margin-top: 30px;
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.notfound {
  width: 30vw;
}

.notfound__title {
  color: var(--colorTextHeader);
  /* 20px */
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: capitalize;
}

.notfound__text {
  font-size: 16px;
  line-height: 1.3;
  font-weight: 300;
  margin-top: 12px;
}

.notfound__text--small {
  font-size: 14px;
  line-height: 1.3;
  font-weight: 300;
  display: block;
  text-align: right;
  margin-top: 6px;
}

.notfound__link {
  font-size: 14px;
  line-height: 1.3;
  font-weight: 300;
  color: var(--colorTextHeader);
  text-decoration: none;
}

.infographic {
  height: 60vh;
  max-height: 300px;
  margin-left: 3vw;
}

.infographic__image {
  height: 100%;
}

.buttons {
  padding: 0;
  flex-wrap: wrap;
}

.buttons .notfound__text {
  width: 100%;
  margin-top: 0;
  margin-bottom: 12px;
}
</style>
