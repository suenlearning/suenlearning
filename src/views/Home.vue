<template>
  <main class="main__view">
    <ul class="view__description">
      <li class="single-reason">
        <h2 class="description__title">Fast & easy</h2>
        <p class="description__paragraph">
          Prepare activities for your students in just a few minutes and in
          simple steps
        </p>
      </li>
      <li class="single-reason">
        <h2 class="description__title">Share with students</h2>
        <p class="description__paragraph">
          You can send a direct link to your students or download the activity
          as a pdf
        </p>
      </li>
      <li class="single-reason">
        <h2 class="description__title">Build your collection</h2>
        <p class="description__paragraph">
          Save created activities in the cloud to have easy access whenever
          needed
        </p>
      </li>
      <li class="single-reason">
        <h2 class="description__title">Browse our database</h2>
        <p class="description__paragraph">
          Don't reinvent the wheel - check and use what other teachers have
          created
        </p>
      </li>
      <li class="single-reason">
        <h2 class="description__title">Free to use</h2>
        <p class="description__paragraph">
          No hidden fees. No trial period. Free unlimited access.
        </p>
      </li>
    </ul>
    <figure class="view__image-container">
      <img
        src="@/assets/images/edu.png"
        alt="infographic"
        class="view__image"
      />
    </figure>
  </main>
</template>

<script></script>

<style scoped>
/* adjusting global styles */
.view__description {
  width: 40vw;
}

.description__title {
  text-transform: none;
}

/* overriding global styles */
.single-reason {
  margin: 1vw 0;
}
</style>
