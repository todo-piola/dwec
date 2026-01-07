function TareasComponent () {
  const tareas = ["Debug", "Desplegar", "Testear"]

  return (
    /* Renderizo el listado de tareas */
    <>
    <ol>
      {tareas.map((tarea, index) => (
        <li key={index}>{tarea}</li>
      ))}
    </ol>
  </>
  )
}

export default TareasComponent
