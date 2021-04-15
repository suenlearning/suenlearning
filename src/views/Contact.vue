<template>
  <main class="main__contact">
    <div class="contact">
      <h2 class="contact__title">Contact us</h2>
      <p class="contact__text">
        suen.learning@gmail.com
      </p>
    </div>

    <figure class="infographic">
      <img
        src="@/assets/images/contact.png"
        alt="infographic"
        class="infographic__image"
      />
    </figure>
  </main>
</template>

<style scoped>
.main__contact {
  margin-top: 30px;
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact {
  width: 30vw;
}

.contact__title {
  color: var(--colorTextHeader);
  /* 20px */
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: capitalize;
}

.contact__text {
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
