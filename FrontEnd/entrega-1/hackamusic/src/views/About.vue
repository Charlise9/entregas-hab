<template>
  <div class="about">
    <vue-headful title="Hack A Music | About" />

    <h1>INFORMACIÓN SOBRE EL PROYECTO</h1>
    <section>
      <img
        src="https://media0.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif?cid=ecf05e47n5ykzujxmgscbhch9vhwyxt6pb2h4avf3f6wtuzy&rid=giphy.gif"
        title="Jeloooooooooouuu!!!!"
        alt="Saludo gracioso"
      />
      <p>Ola hamijos!!! Mi nombre es Carlos Barrientos Guillén y esta es la primera entrega del módulo FrontEnd del bootcamp de Hack A Boss</p>
      <p>
        El proyecto consiste en una página para escuchar música. He utilizado las apis de
        <a
          href="https://www.last.fm/home"
          target="_blank"
        >last.fm</a> para seleccionar el Top Tags, el Top Astists y el Top Tracks.
      </p>
      <p>Las herramientas que he usado son:</p>
      <ol>
        <li>Vue: para ensamblar todo el proyecto</li>
        <li>Axios: para gestionar las apis</li>
        <li>Vue-headful: para gestionar los títulos de las páginas</li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding-top: 3.5rem;
  color: yellowgreen;
}

.about p {
  display: flexbox;
  flex-direction: column;
  text-align: left;
  margin: 1rem 6.5rem;
}

.about ol {
  padding-top: 1rem;
  display: flexbox;
  flex-direction: column;
  list-style: none;
}

.about ol li {
  text-align: left;
}

img {
  max-width: 75%;
  margin: 2rem;
}
</style>
