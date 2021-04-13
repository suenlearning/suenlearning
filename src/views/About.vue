<template>
  <main class="main__about">
    <div class="about">
      <h2 class="about__title">About us</h2>
      <p class="about__text">
        Lorem ipsum addem mas tardem
      </p>
    </div>

    <figure class="infographic">
      <img
        src="@/assets/img/aboutus.png"
        alt="infographic"
        class="infographic__image"
      />
    </figure>
  </main>
</template>

<style scoped>
.main__about {
  margin-top: 30px;
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  width: 30vw;
}

.about__title {
  color: var(--colorTextHeader);
  /* 20px */
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: capitalize;
}

.about__text {
  font-size: 16px;
  line-height: 1.3;
  font-weight: 300;
}

.infographic {
  height: 60vh;
  max-height: 300px;
  margin-left: 3vw;
}

.infographic__image {
  height: 100%;
}
</style>
