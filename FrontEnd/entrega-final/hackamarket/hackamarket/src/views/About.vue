<template>
  <div class="about">
    <vue-headful title="Hack A Market | About" />

    <h1>INFORMACIÓN SOBRE EL PROYECTO</h1>
    <section>
      <img
        src="https://media0.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif?cid=ecf05e47n5ykzujxmgscbhch9vhwyxt6pb2h4avf3f6wtuzy&rid=giphy.gif"
        title="Jeloooooooooouuu!!!!"
        alt="Saludo gracioso"
      />
      <p>
        Ola hamijos!!! Mi nombre es
        <b>Carlos Barrientos Guillén</b> y esta es la segunda entrega del módulo FrontEnd del bootcamp de Hack A Boss. Si quieres saber más sobre mi, puesdes consultar mi LinkedIn (
        <a
          href="https://www.linkedin.com/in/carlosbarrgui/"
          target="_blank"
        >click aquí</a>) y mi GitHub (
        <a href="https://github.com/Charlise9" target="_blank">click aquí</a>).
      </p>
      <p>El proyecto consiste en una página para "comprar o reservar" videojuegos. He creado mi propia api, con las funciones correspondientes a ver a los clientes, dar de alta, editar y borrar un cliente, y lo mismo para los productos.</p>

      <p>Las herramientas que he usado son:</p>
      <ol>
        <li>
          <b>Vue</b>: para ensamblar todo el proyecto
        </li>
        <li>
          <b>Axios</b>: para gestionar las apis
        </li>
        <li>
          <b>Vue-headful</b>: para gestionar los títulos de las páginas
        </li>
        <li>
          <b>Sweetalert</b>: para las alertas chidas que te saltan en pantalla al reservar o comprar un juego
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding-top: 5rem;
}

section {
  margin: 1rem 2rem;
}

section img {
  width: 75%;
}

section p {
  padding-top: 1rem;
}

section ol li {
  list-style: none;
  padding-top: 0.5rem;
}

section a {
  text-decoration: none;
  color: #e84a5f;
}

@media (min-width: 1000px) {
  .about {
    font-size: 1.5rem;
  }
}
</style>
