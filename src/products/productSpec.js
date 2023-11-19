
// import React, { useEffect, useState } from "react"
// import { useParams } from 'react-router-dom'
// import axios from "axios"
// import "./indext.css"
// function ProductSpec() {
//     const [ProductDetails, setProductDetails] = useState([])
//     let Params = useParams();
//     useEffect(() => {
//         axios.get(`https://dummyjson.com/products/${Params.ProductID}`)
//             .then((res) => {
//                 setProductDetails(res.data)
//             })
//     }, [])
//     return (
//         <>
//             <h1 style={{ textAlign: 'center' }}>Product specification</h1>
//             <div id='product-spec-wrapper'>
//                 <img id="product-spec-image"
//                     src={ProductDetails.thumbnail} />
//                 {
//                     ProductDetails.images ?
//                 <div id="small-images-wrapper">
//                     {ProductDetails.images.map((smallImage,i)=>{
//                         return <div onClick={()=>{
//                             let ProductDetailsCopy={...ProductDetails}
//                             ProductDetailsCopy.thumbnail=smallImage
//                             setProductDetails(ProductDetailsCopy)
//                         }}
//                         className="small-image-wrapper">
//                             <img className="small-image-thumbnail"
//                             src={smallImage}/>
//                             </div>
//                     })}}
//                 </div>
                   
        

                
//                 <p> <b>Title :</b>{ProductDetails.title}</p>
//                 <p> <b>category :</b>{ProductDetails. category}</p>
//                 <p> <b>Description :</b>{ProductDetails.description}</p>
//                 <p> <b>Price :</b>{ProductDetails.price} $</p>
//                 <p> <b>Rating :</b>{ProductDetails.rating} /5</p>
//                 <p> <b>Stock Left :</b>{ProductDetails.stock}</p>
//                 <p> <b>DiscountPercentage :</b>{ProductDetails.discountPercentage}</p>
           
//            </div>
//         </>
//     )
// }
// export default ProductSpec


