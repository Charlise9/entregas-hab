<template>
  <div>
    <footer>
      <p id="main">HACK A MUSIC (c), 2020</p>
      <p>Carlos Barrientos Guillén</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterCustom"
};
</script>

<style scoped>
#main {
  font-weight: bold;
  background-color: rgb(25, 25, 25);
  color: white;
  padding: 0.5rem;
}

footer {
  font-style: italic;
  font-size: 1rem;
}
</style>