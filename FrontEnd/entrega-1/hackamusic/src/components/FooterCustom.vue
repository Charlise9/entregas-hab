<template>
  <div>
    <footer>
      <p id="main">HACK A MUSIC (c), 2020</p>
      <p id="notmain">Carlos Barrientos Guillén</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterCustom"
};
</script>

<style scoped>
footer {
  font-style: italic;
  font-size: 1rem;
  padding-top: 2rem;
}

#main {
  font-weight: bold;
  background-color: rgb(50, 50, 50);
  color: yellowgreen;
  padding: 0.5rem;
}

#notmain {
  background-color: white;
}
</style>