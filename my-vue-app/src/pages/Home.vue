<template>
  <section class="page home">
    <div class="hero">
      <h1>Welcome to ExportCo</h1>
      <p>Your trusted partner for quality exports worldwide.</p>
      <button @click="$router.push('/contact')">Contact Us</button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.page {
  padding: 60px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #004080;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #333;
}

.hero button {
  background-color: #ffdd00;
  color: #004080;
  border: none;
  padding: 12px 25px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

.hero button:hover {
  background-color: #ffc107;
}
</style>
