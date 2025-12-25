export default function Login (props) {

  const user = {
    username: "Franco",
    email: "franco@email.com",
  }

  const handleClick = () => {
    props.handleLogin(user)
  }

  return (
    <section>
      <h2>Login section</h2>
      <button onClick={handleClick}>Login</button>
    </section>
  )
}
