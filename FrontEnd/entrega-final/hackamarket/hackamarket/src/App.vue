<template>
  <div id="app">
    <menucustom />
    <router-view />
    <footercustom />
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "App",
  components: {
    menucustom,
    footercustom,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
}

html {
  --font: Poppins, sans-serif;
}

#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0d0f;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #0a0d0f;
  text-decoration: none;
  margin: 0 0.5rem;
}

#nav a.router-link-exact-active {
  color: #e84a5f;
} */

input:hover {
  border: 2px solid #e84a5f;
  cursor: pointer;
}
input:focus {
  outline: none;
}
button:focus {
  outline: none;
}

button {
  margin: 1rem;
  background-color: #e84a5f;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  border-radius: 12px;
  transition: all 0.5s;
}
button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.cancel {
  background-color: #1b262c;
  color: whitesmoke;
}

input {
  margin: 0.1rem;
  border-radius: 12px;
  border: 2px solid #e84a5f;
  width: 300px;
  text-align: center;
}

img {
  padding-top: 1rem;
}
</style>
