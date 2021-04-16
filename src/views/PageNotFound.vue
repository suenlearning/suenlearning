<template>
  <main class="main__view">
    <div class="view__description">
      <h2 class="description__title">Did you know?</h2>
      <p class="description__paragraph">
        The HTTP 404, 404 Not Found, 404, 404 Error, Page Not Found, File Not
        Found, or Server Not Found error message is a HTTP standard response
        code to indicate that the server could not find what was requested.
      </p>
      <p class="description__paragraph">
        The website will typically generate a "404 Not Found" content when a
        user attempts to follow a broken or dead link; hence the 404 error is
        one of the most recognizable errors encountered on the World Wide Web.
      </p>
      <small class="notfound__source"
        >source
        <a
          href="https://en.wikipedia.org/wiki/HTTP_404"
          class="notfound__source-link"
          title="see on Wikipedia"
          target="_blank"
          >Wikipedia</a
        ></small
      >
      <div class="buttons">
        <p class="description__paragraph">
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

    <figure class="view__image-container">
      <img
        src="@/assets/images/pagenotfound.png"
        alt="Page not found"
        class="view__image"
      />
    </figure>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
/* adjusting global styles */
.description__paragraph {
  margin-top: 12px;
}

.buttons {
  padding: 0;
  flex-wrap: wrap;
}

.buttons .description__paragraph {
  width: 100%;
  margin-top: 0;
  margin-bottom: 12px;
}

/* component specific */
.notfound__source {
  font-size: 14px;
  line-height: 1.3;
  font-weight: 300;
  display: block;
  text-align: right;
  margin-top: 6px;
}

.notfound__source-link {
  font-size: 14px;
  line-height: 1.3;
  font-weight: 300;
  color: var(--colorTextHeader);
  text-decoration: none;
}
</style>
