//!Example 1
import axios from "axios"
import { useEffect, useState } from "react"
const FetchData = () => {
  let [productsData,setProducts]=useState([])
  useEffect(() => {
    let api1 = async() => {
      let {data} = await axios.get("https://fakestoreapi.com/products")
      setProducts(data)
    }
    api1()
  }, [])
  return (
    <table border={1} rules="all" width="100%" cellPadding={20}>
     <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
        <th>Description</th>
        <th>Image</th>
        <th>Price</th>
      </tr>
     </thead>
     <tbody>
         {
          productsData.map((ele)=>{
            return <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td>{ele.category}</td>
              <td>{ele.description}</td>
              <td><img src={ele.image} alt={ele.title} height="250" width="250"/></td>
              <td>₹{ele.price}</td>
            </tr>
          })
         }
     </tbody>
    </table>
  )
}

export default FetchData

//!Example 2