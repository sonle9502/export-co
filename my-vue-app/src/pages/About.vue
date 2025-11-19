<template>
  <section class="page about">
    <h1>{{ about.title }}</h1>
    <p>{{ about.description }}</p>
    <ul>
      <li v-for="(item, index) in about.features" :key="index">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
import messages from '../locales'

export default {
  computed: {
    about() {
      // lấy array trực tiếp từ messages theo locale hiện tại
      return messages[this.$i18n.locale].about
    }
  }
}
</script>

<style scoped>
.page {
  padding: 60px 20px;
  max-width: 900px;
  margin: auto;
}

.page h1 {
  color: #004080;
  margin-bottom: 20px;
  text-align: center;
}

.page p {
  font-size: 1.1rem;
  margin-bottom: 20px;
  text-align: center;
}

.page ul {
  list-style: disc;
  padding-left: 20px;
}
</style>
