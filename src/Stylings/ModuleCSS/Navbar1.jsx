import Styles from "./Navbar1.module.css"
const Navbar1 = () => {
  return (
    <nav className={Styles.navbar}>
      <h2 className={Styles.title}>Navbar 1</h2>
      <aside className={Styles.links}>
       <a href="#">Home</a>
       <a href="#">About</a>
       <a href="#">Contact</a>
      </aside>
    </nav>
  )
}

export default Navbar1