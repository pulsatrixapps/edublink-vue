import Parallax from 'parallax-js';

const mouseMoveAnimation = () => {
    let animatiedItem = document.querySelectorAll( '.scene' );
    if( animatiedItem ) {
        animatiedItem.forEach( ( item, _ ) => {
            new Parallax( item );
        } ) 
    }
}

export default mouseMoveAnimation;