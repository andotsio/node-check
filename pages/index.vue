<template>
  <div class="layout_container">
    <main class="layout_main">
      <TestHeader/>
      <TestSearch/>
      <TestInfo/>
    </main>
  </div>
</template>
<script setup>
useHead({
  title: 'BlockPI node check',
  viewport: 'width=device-width1',
  charset: 'utf-8',
  meta: [
    {name: 'description', content: 'To check your node connect status on BlockPI chain'},
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.png',
      type: 'image/x-icon',
    },
  ],
});
</script>
<style lang="less" scoped>
.layout_container {
  display: flex;
  min-height: 100vh;
  min-width: 1200px;
}

.layout_main {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
