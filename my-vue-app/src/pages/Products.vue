<template>
  <section class="page products">
    <h1>Our Products</h1>
    <div class="product-grid">
      <div class="product-card">
        <h2>Product A</h2>
        <p>High quality, exported worldwide.</p>
      </div>
      <div class="product-card">
        <h2>Product B</h2>
        <p>Premium selection for international markets.</p>
      </div>
      <div class="product-card">
        <h2>Product C</h2>
        <p>Trusted by clients across Asia and Europe.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.page {
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;
}

.page h1 {
  text-align: center;
  color: #004080;
  margin-bottom: 40px;
}

.product-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  flex: 0 0 280px;
  background: #f5f5f5;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card h2 {
  color: #004080;
  margin-bottom: 10px;
}
</style>
