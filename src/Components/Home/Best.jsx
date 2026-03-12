import "./Best.css"
import { Heart, Eye, Star } from 'lucide-react'
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useSearch } from "../../Context"
import { useWishlist } from "../../Wishlist/WishlistContext"
import { useCart } from "../../CartContext/CartContext"
import { products } from "../../Data/productsData"

const Best = () => {
  const { t } = useTranslation()
  const { searchQuery } = useSearch()
  const { addToWishlist, wishlist } = useWishlist()
  const { addToCart } = useCart()

  const bestSellingProducts = products.filter(p => p.type === "best")

  const filteredProducts = bestSellingProducts.filter((p) =>
    t(p.name).toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <div className='best'>
      <div className='best-top' data-aos="flip-left">
        <div className='best-left'>
          <div className='title-row'>
            <span className='red-bar'></span>
            <b>{t('this_month')}</b>
          </div>
          <h2>{t('best_selling_title')}</h2>
        </div>
        <button className='view-all-btn'>{t('view_all')}</button>
      </div>

      <div className='products-grid'>
        {filteredProducts.map(product => {
          const isLiked = wishlist.some(item => item.id === product.id)

          return (
            <div key={product.id} className='product-card' data-aos="fade-up">
              <div className='card-img'>
                <div className='card-actions'>
                  <button onClick={() => addToWishlist(product)} className="action-btn">
                    <Heart 
                      size={18} 
                      fill={isLiked ? "#DB4444" : "none"} 
                      color={isLiked ? "#DB4444" : "black"} 
                    />
                  </button>
                  <Link to={`/product/${product.id}`} className="view-link">
                    <button className="action-btn"><Eye size={18} color="black" /></button>
                  </Link>
                </div>
                <img src={product.img} alt={t(product.name)} />
                <button 
                  className='add-to-cart' 
                  onClick={() => addToCart(product)}
                >
                  {t('add_to_cart')}
                </button>
              </div>

              <div className='card-info'>
                <p>{t(product.name)}</p>
                <div className='price'>
                  <span className='new-price'>${product.price}</span>
                  {product.oldPrice && <span className='old-price'>${product.oldPrice}</span>}
                </div>
                <div className='rating'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14}
                      fill={i < product.rating ? '#FFAD33' : 'none'}
                      color={i < product.rating ? '#FFAD33' : '#ccc'}
                    />
                  ))}
                  <span>({product.reviews})</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Best