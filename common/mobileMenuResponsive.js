const mobileMenuResponsive = () => {
    let getSiblings = function (e) {
        let siblings = []; 
        if( ! e.parentNode ) {
            return siblings;
        }
        let sibling  = e.parentNode.firstChild;
        while ( sibling ) {
            if ( sibling.nodeType === 1 && sibling !== e ) {
                siblings.push( sibling );
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    };

    const subMenuToggle = document.querySelectorAll( '.submenu-toggle' );
    subMenuToggle.forEach( function( btn ) {
        btn.addEventListener( 'click', function() {
            if( ! this.classList.contains( 'active' ) ) {
                this.classList.add( 'active' )
                this.nextElementSibling.classList.add( 'active' )
                this.closest( 'li' ).classList.add( 'active' )
                getSiblings(this.closest( 'li' )).forEach( function( item ) {
                    item.classList.remove( 'active' )
                    item.querySelectorAll( 'li, .submenu-toggle, .submenu-wrapper' ).forEach( function( child ) {
                        child.classList.remove( 'active' )
                    })
                } )
            } else {
                this.closest( 'li' ).classList.remove( 'active' )
                this.closest( 'li' ).querySelectorAll( 'li, .submenu-toggle, .submenu-wrapper' ).forEach( function( child ) {
                    child.classList.remove( 'active' )
                })
            }
        } )
    } )
}

export default mobileMenuResponsive;