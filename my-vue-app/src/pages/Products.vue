<template>
  <section class="page products">
    <h1>Our Products</h1>

    <div
      v-for="(product, index) in products"
      :key="index"
      class="product-row"
    >
      <!-- TEXT -->
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>

      <!-- VIDEO -->
      <div class="video-wrapper">
        <iframe
          :src="`https://www.youtube.com/embed/${product.videoId}`"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Product A",
          description: "High quality, exported worldwide.",
          videoId: "rNiCXC5hiF0",
        },
        {
          name: "Product B",
          description: "Premium selection for international markets.",
          videoId: "GpJIEw6Cz5Y",
        },
        {
          name: "Product C",
          description: "Trusted by clients across Asia and Europe.",
          videoId: "GpJIEw6Cz5Y",
        },
        // Thêm sản phẩm khác nếu cần
      ],
    };
  },
};
</script>

<style scoped>
.page {
  padding: 60px 20px;
  max-width: 1200px;
  margin: auto;
}

.page h1 {
  text-align: center;
  color: #004080;
  margin-bottom: 60px;
}

/* PRODUCT ROW */
.product-row {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 60px;
  flex-wrap: nowrap; /* cùng 1 hàng trên desktop */
}

/* TEXT */
.product-info {
  flex: 0 0 35%;
  min-width: 250px;
}

.product-info h2 {
  color: #004080;
  margin-bottom: 10px;
}

.product-info p {
  font-size: 16px;
  line-height: 1.5;
}

/* VIDEO */
.video-wrapper {
  flex: 0 0 65%;
  min-width: 400px;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;  /* tỷ lệ video */
  max-height: 450px;     /* chiều cao tối đa → video thấp hơn */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.video-wrapper iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Responsive cho mobile */
@media (max-width: 768px) {
  .product-row {
    flex-direction: column;
  }
  .product-info,
  .video-wrapper {
    flex: 1 1 100%;
    min-width: auto;
  }
  .video-wrapper {
    max-height: none; /* mobile tự co dãn */
  }
}
</style>
