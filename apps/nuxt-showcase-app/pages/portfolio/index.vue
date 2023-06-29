<script setup lang="ts">
import { UserResponse } from '../../types'
useHead({
  title: "Portfolio SEO Title",
});

const { data: user } = await useFetch('https://randomuser.me/api/', {
  transform: (user: UserResponse) => user.results[0]
}) //By default, data fetching composables will perform their asynchronous function on both client and server environments. Set the server option to false to only perform the call on the client-side. Combined with the lazy option, this can be useful for data that are not needed on the first render (for example, non-SEO sensitive data).
</script>

<template>
  <div>
    <h1>Portfolio</h1>
    <article class="portfolio">
      <div class="section">
        <img class="image" :src=user.picture.large />
        <h2 class="title">
          I'm
          <span class="name">
            {{ `${user.name.first} ${user.name.last}!` }}
          </span>
        </h2>
      </div>
      <div class="section">
        <div>
          <p>
            <strong>Summary</strong>
          </p>
          <p>
            Highly skilled and motivated software engineer with a passion for
            problem-solving and creating innovative solutions. Proven track record
            of delivering high-quality software projects on time and within
            budget. Strong expertise in object-oriented programming, agile
            methodologies, and collaborative teamwork. Excellent communication
            skills and ability to work effectively in fast-paced environments.
          </p>
        </div>
        <div>
          <strong>Contact information</strong>
          <p class="title"><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Phone:</strong> {{ user.phone }}</p>
          <p><strong>Country:</strong> {{ user.location.country }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
<style lang="css" scoped>
.button {
  width: 50%;
}

.portfolio {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

.section {
  width: 50%;
}

.image {
  border-radius: 100px;
}

.title {
  margin-top: 20px;
}

.name {
  color: var(--primary)
}
</style>



