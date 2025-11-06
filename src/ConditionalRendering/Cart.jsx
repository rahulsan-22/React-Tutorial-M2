//!Short-circuit AND
const Cart = ({items}) => {
  console.log(items)
  return (
    <div>
      <ul>
        {items.map((ele,ind)=>{
          return <li key={ind}>{ele}</li>
        })}
        {items.length>0 && <p>You have {items.length} items in the cart</p>}
      </ul>
    </div>
  )
}
export default Cart