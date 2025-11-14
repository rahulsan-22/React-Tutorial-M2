import Styles from "./Navbar2.module.css"
console.log(Styles)
const Navbar2 = () => {
  return (
    <nav className={Styles.navbar}>
      <h2 className={Styles.title}>Navbar 2</h2>
      <aside className={Styles.links}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </aside>
    </nav>
  )
}

export default Navbar2