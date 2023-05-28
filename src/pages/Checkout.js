import { useSelector } from "react-redux"
import Header from "../components/Header"
import CheckoutProduct from "../components/CheckoutProduct"
import Image from "next/image"
import { selectItems, selectTotal } from "../slices/basketSlice"
import { useSession } from "next-auth/react"
import Currency from 'react-currency-formatter'
function checkout() {
  const items = useSelector(selectItems)
  const Total = useSelector(selectTotal)
  const {data:Login} = useSession();
  return (
    <div className="bg-gray-100 ">
        <Header/>
        <main className="lg:flex max-w-screen-2xl mx-auto ">
            {/* left */}
            <div className="flex-grow m-5 shadow-sm">
                   <Image 
                   src="https://links.papareact.com/ikj"
                   width={1219}
                   height={250}
                   />
                   <div className="flex flex-col space-y-10 a-5">
                    <h1 className="text-3xl  border-b pb-3 pt-3">{items.length===0?"Your Cart is Empty":"Your Shopping Cart"}</h1>
                   </div>
                   <div >
                    {items.map((item,i)=>(
                      <CheckoutProduct
                      key={i}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      description={item.description}
                      category={item.category}
                      image={item.image}
                      />
                    ))}
                   </div>
                   {/* right */}
                   <div className="flex flex-col bg-white p-10">
                    <h2 className="text-lg font-bold">Subtotal ({items.length}) items:
                    <span className="text-bold">
                      <Currency quantity={Total} currency="INR"/>
                    </span>
                    </h2> 
                    <button
                    disabled={!Login}
                      className= {`button mt-2 ${!Login && "bg:from-gray-400 to-gray-500 border-gray cursor-not-allowed"}`}
                    >{!Login ? "Sign In":"Proceed to Checkout"}</button>
                   </div>
            </div>
        </main>
    </div>
  )
}

export default checkout