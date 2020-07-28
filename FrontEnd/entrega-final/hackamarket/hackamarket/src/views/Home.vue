<template>
  <div class="home">
    <vue-headful title="Hack A Market  | Home" />
    <h1>¡Bienvenido/a a Hack A Market!</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  background-image: url("https://i.imgur.com/LAnm786.gif");
  color: #e84a5f;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.home h1 {
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  position: relative;
  top: 200px;
  background: rgba(50, 50, 50, 0.5);
  border: 0.15rem solid #e84a5f;
  border-radius: 50px;
  margin: 0 1rem;
}

@media (min-width: 700px) {
  .home h1 {
    font-size: 2rem;
    top: 400px;
    margin: 0 6rem;
  }
}

@media (min-width: 1000px) {
  .home h1 {
    font-size: 2.5rem;
    top: 450px;
    margin: 0 20rem;
  }
}
</style>
