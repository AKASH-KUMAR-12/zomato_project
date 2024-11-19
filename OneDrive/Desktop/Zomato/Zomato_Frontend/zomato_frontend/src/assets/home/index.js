// import react from 'react'
import Star from '../../images/star.png'

export default function home(){

    return(
        <div className="homeContainer">
            <div className="topBar">
                <div>
                <img src={Star} alt="Star"/>
                <p>Get 5% Off your first order, <span>Promo: ORDER5</span></p>
                </div>
                
            </div>

        </div>
    )
}
