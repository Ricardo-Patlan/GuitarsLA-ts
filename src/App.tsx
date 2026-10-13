import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useCart } from "./hooks/useCart"

function App() {
    const { cart,
         data,
          addToCart,
           decreaseQuantity, 
           increaseQuantity,
            removeFromCart,
             clearCart,
              isEmpty,
               cartTotal } = useCart();
// inferencia: predecir tipos de datos que ya se conoce sin definirlo
// types: es el tipo de dato que se va a utilizar 
            //   const [isActivity, setisActivity] = useState<Number>(30);





    return (
        <>
            <Header
                cart={cart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            />




            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (

                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            addToCart={addToCart}


                        />



                    ))}

                </div>
            </main>

            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App