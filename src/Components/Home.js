import React from 'react'
import "./Home.css"
import Product from './Product'

const backgroundImage = process.env.PUBLIC_URL + '/images/imageGWB.jpg'
const leanBook = process.env.PUBLIC_URL + '/images/lean_book.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={backgroundImage}
                 alt="" />

                 <div className="home__row">
                     <Product id="123321341" title='The lean startup' price=
                     {29.99} image={leanBook}
                     rating={5} />
                     <Product id="49538094" 
                     title="Kenwood kMix Stand Mixer for Baking,
                      Stylish Kitchen Mixer with K-beater,
                      Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} rating={4} 
                      image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
                       />
                 </div>
                     
                 <div className="home__row">
                     <Product
                        id="4903850" 
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAK._AC_SX466_.jpg"
                    />
                     <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071)CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                 </div>

                 <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved
                        LED Gaming Monitor - SUPER Ultra Wide Dual
                        WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                 </div>
            </div>
        </div>
    )
}

export default Home
