<template>
  <div class="home">

    <!-- HERO với ảnh thay đổi -->
    <section class="hero">
      <transition name="fade" mode="out-in">
        <img :src="currentImage" :key="currentImage" class="hero-img" />
      </transition>
      <div class="hero-overlay">
        <h1>Premium Seafood Export</h1>
        <p>Fresh • Safe • Global Supply</p>
      </div>
    </section>

    <!-- SECTION 1: INTRO -->
    <section class="intro">
      <div class="intro-inner">
        <h2>Delivering Quality Seafood Worldwide</h2>
        <p>
          We supply carefully selected seafood products to international partners with
          strict quality control and reliable logistics.
        </p>
      </div>
    </section>

    <!-- SECTION 2: BLOCK (Ảnh trái, text phải) -->
    <section class="block">
      <img src="/about-factory.jpg" class="block-img" />
      <div class="block-text">
        <h3>Our Processing Facility</h3>
        <p>
          Equipped with modern technology and international certifications such as HACCP and ISO.
        </p>
      </div>
    </section>

    <!-- SECTION 3: USP -->
    <section class="usp">
      <div class="usp-item">
        <img src="/icon-quality.png" />
        <p>Quality Control</p>
      </div>
      <div class="usp-item">
        <img src="/icon-export.png" />
        <p>Global Network</p>
      </div>
      <div class="usp-item">
        <img src="/icon-cert.png" />
        <p>International Certifications</p>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Contact Us for Business Partnership</h2>
      <button @click="$router.push('/contact')">Contact</button>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/thuyen-ca.png',
        '/ca-com.png',
        '/than-duoc.jpg'
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  mounted() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // 5 giây đổi ảnh
  }
};
</script>

<style scoped>
/* Reset font giống OceanTrading */
* {
  font-family: "Noto Sans JP", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hero */
.hero {
  position: relative;
  height: 68vh;
  overflow: hidden;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 0 0 15px rgba(0,0,0,0.6);
}
.hero-overlay h1 {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
}
.hero-overlay p {
  margin-top: 10px;
  font-size: 1.3rem;
}

/* Transition fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Intro */
.intro {
  padding: 80px 20px;
  text-align: center;
}
.intro-inner {
  max-width: 900px;
  margin: auto;
}
.intro h2 {
  font-size: 2.2rem;
  color: #00396b;
  font-weight: 600;
}
.intro p {
  margin-top: 16px;
  font-size: 1.15rem;
  color: #444;
  line-height: 1.7;
}

/* Block */
.block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  padding: 80px 40px;
}
.block-img {
  width: 48%;
  border-radius: 6px;
}
.block-text {
  width: 44%;
}
.block-text h3 {
  font-size: 1.8rem;
  color: #00396b;
  margin-bottom: 15px;
}
.block-text p {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.7;
}

/* USP */
.usp {
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 80px 20px;
  background: #f5faff;
}
.usp-item {
  text-align: center;
}
.usp-item img {
  width: 60px;
  margin-bottom: 12px;
}
.usp-item p {
  color: #00396b;
  font-weight: 600;
}

/* CTA */
.cta {
  text-align: center;
  padding: 120px 20px;
  background: #00396b;
  color: white;
}
.cta button {
  margin-top: 20px;
  background: white;
  color: #00396b;
  border: none;
  padding: 12px 32px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
}
.cta button:hover {
  background: #e8f4ff;
}

/* Responsive */
@media (max-width: 768px) {
  .block-img, .block-text {
    width: 100%;
  }
  .usp {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
