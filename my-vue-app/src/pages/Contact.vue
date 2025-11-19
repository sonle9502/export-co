<template>
  <section class="page contact">
    <h1>Contact Us</h1>
    <p>Feel free to reach out for inquiries or orders.</p>
    <div class="contact-info">
      <p>Email: <a href="mailto:info@exportco.com">info@exportco.com</a></p>
      <p>Phone: +84 123 456 789</p>
      <p>Address: 123 Export Street, Ho Chi Minh City, Vietnam</p>
    </div>
  </section>
</template>

<script>
export default {}
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
