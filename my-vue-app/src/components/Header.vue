<template>
  <header class="header">
    <div class="logo">🌏 ExportCo</div>
    <nav>
      <ul>
        <li><router-link to="/">{{ $t('header.home') }}</router-link></li>
        <li><router-link to="/about">{{ $t('header.about') }}</router-link></li>
        <li><router-link to="/products">{{ $t('header.products') }}</router-link></li>
        <li><router-link to="/contact">{{ $t('header.contact') }}</router-link></li>
      </ul>
    </nav>
    <div class="lang-switch">
      <button @click="changeLang('en')">EN</button>
      <button @click="changeLang('ja')">JP</button>
      <button @click="changeLang('vi')">VI</button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style src="../assets/css/header.css"></style>
