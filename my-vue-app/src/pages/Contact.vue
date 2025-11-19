<template>
  <section class="page contact">
    <h1>{{ info.title }}</h1>
    <p>{{ info.description }}</p>
    <div class="contact-info">
      <p>Email: <a :href="`mailto:${info.email}`">{{ info.email }}</a></p>
      <p>Phone: {{ info.phone }}</p>
      <p>Address: {{ info.address }}</p>
    </div>
  </section>
</template>

<script>
import messages from '../locales'

export default {
  computed: {
    info() {
      return messages[this.$i18n.locale].contact
    }
  }
}
</script>

<style scoped>
.page {
  padding: 60px 20px;
  max-width: 700px;
  margin: auto;
  text-align: center;
}

.page h1 {
  color: #004080;
  margin-bottom: 20px;
}

.contact-info p {
  margin: 10px 0;
  font-size: 1.1rem;
}

.contact-info a {
  color: #004080;
  text-decoration: none;
  font-weight: bold;
}

.contact-info a:hover {
  color: #ffdd00;
}
</style>
