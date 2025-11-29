<template>
  <div class="product-detail page">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>

    <!-- Specs / Details -->
    <ul v-if="product.details" class="product-specs">
      <li v-for="(item, index) in product.details" :key="index">✅ {{ item }}</li>
    </ul>

    <!-- Video -->
    <div class="video-wrapper" v-if="product.videoId">
      <iframe
        :src="`https://www.youtube.com/embed/${product.videoId}`"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Back Button -->
    <button class="back-button" @click="$router.back()">← Back</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      product: {},
    };
  },
  created() {
    const products = [
      {
        id: 1,
        name: "Cá cơm mờm hấp",
        description: "High quality, exported worldwide.",
        details: [
          "Quality: fresh, clean, retains natural flavor",
          "Packaging: vacuum-sealed, convenient for export",
          "Origin: Ca Mau, Vietnam",
          "Storage: keep refrigerated / frozen",
          "Weight: 500g / box",
          "Shelf life: 6 months from production date",
          "Certification: HACCP, ISO (if available)",
          "Export markets: Japan, South Korea, EU, USA"
        ],
        videoId: "rNiCXC5hiF0",
      },
      {
        id: 2,
        name: "Product B",
        description: "Premium selection for international markets.",
        details: [
          "High quality",
          "Safe packaging",
          "Export markets: Japan, South Korea, EU"
        ],
        videoId: "GpJIEw6Cz5Y",
      },
    ];

    this.product = products.find(p => p.id == this.id) || {};
  }
};
</script>

<style scoped>
.page {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

h1 {
  color: #004080;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

/* Specs List */
.product-specs {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.product-specs li {
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 1.5;
}

/* Video */
.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  margin-bottom: 20px;
}

.video-wrapper iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Back Button */
.back-button {
  padding: 10px 20px;
  background-color: #004080;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.back-button:hover {
  background-color: #0059b3;
}
</style>
