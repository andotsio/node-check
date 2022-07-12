<template>
  <div class="layout_container">
    <main class="layout_main">
      <TestHeader/>
      <div class="layout_body">
        <TestSearch/>
        <TestInfo/>
      </div>
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

.layout_body {
  max-width: 1640px;
  margin: 30px 140px 100px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(224, 223, 223, 1);
  border-radius: 12px;
}
</style>
