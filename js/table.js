$( 'table.js-table' ).each(function() {
    var currentPage = 0;
    var quantPerPage = 10;
    var $table = $( this );
    
    $table.bind( 'repaginate', function() {
    	var startPage = currentPage * quantPerPage;
    	var endPage = ( currentPage + 1 ) * quantPerPage;
      
        $table
        	.find( 'tbody tr' )
        	.addClass( 'is-hidden' )
        	.removeClass( 'js-visible' )
        	.slice( startPage , endPage )
        	.removeClass( 'is-hidden' )
        	.addClass( 'js-visible' );
    });
    
    $table.trigger( 'repaginate' );
    var quantRows = $table.find( 'tbody tr' ).length;
    var quantPages = Math.ceil( quantRows / quantPerPage );
    var $page;
    var forCounter;
    var $button;
    var $pageCounter;
    
    $page = $( '<div></div>' )
    				.addClass( 'js-page' )
    				.addClass( 'o-table-paging__control' )
    				.addClass( 'e-flexP-center__center' );
                  
    $button = $( '<button></button>' )
    				.addClass( 'js-page-number' )
    				.addClass( 'o-table-paging__button' )
    				.bind( 'click', clearInputSearch );

    $pageCounter = $( '<span></span>' )
    					.text( '1 / ' + quantPages )
						.addClass( 'o-table-page_counter' )
						.addClass( 'js-page-counter' );
						
    
    
    for ( forCounter = 0 ; forCounter < quantPages; forCounter++ ) {
    

		$button
        	.clone(true)
        	.text( forCounter + 1 )
            .bind( 'click', { newPage: forCounter },
            		function(event) {
                
            			currentPage = event.data[ 'newPage' ];
            			$table.trigger( 'repaginate' );
                    
            			$( this )
                    		.addClass( 'active' )
                        	.siblings()
                        	.removeClass( 'active' );
                        
                        $pageCounter
                        	.text( ( currentPage + 1 ) +' / '+ quantPages );

        				}
        	)
        	.appendTo( $page )
            .addClass( 'js-clickable' );

		if(forCounter > 1){
			$button.addClass( 'is-hidden' );
		}
    };


    if(quantPages > 3){

    	var $indicatesMorePages;
    	var $indicatesMorePagesRight;
    	var $indicatesMorePagesLeft;
    	var $firstPageButton;
    	var $lastPageButton;

    	$button =  $button
						.clone()
						.removeClass(' is-hidden ')
						.removeClass( 'js-page-number' );

		$indicatesMorePages = $button
								.clone()
								.addClass( 'is-unClickable')
								.text( '...' );

		$indicatesMorePagesRight = $indicatesMorePages
										.clone()							
										.addClass( 'js-morePageRight' );

		$indicatesMorePagesLeft = $indicatesMorePages
										.clone()							
										.addClass( 'js-morePageLeft' )
										.addClass( 'is-hidden' );

		$firstPageButton = $button
								.clone()
								.text( '' )
								.append( '<img src="../img/left-arrows.png">' )
								.bind( 'click', goFirstPage );
								

		$lastPageButton = $button
								.clone()
								.text( '' )
								.append( '<img src="../img/right-arrows.png">' )
								.bind( 'click', goLastPage );


		function goFirstPage() {

			var $firstClickable;
			var $indicatesMorePagesLeft;
			var $indicatesMorePagesRight;
			var $pageCounter;
			

			$firstClickable = $( '.js-clickable' ).first();
			$indicatesMorePagesLeft = $( '.js-morePageLeft' );
			$indicatesMorePagesRight = $( '.js-morePageRight' );
			$pageCounter = $( '.js-page-counter' );

			$firstClickable
		    	.click()
		    	.removeClass( 'is-hidden' )
		    	.nextAll( '.js-clickable' )
		    	.addClass( 'is-hidden' )
		    	.siblings()
		    	.removeClass( 'active' );

		    $firstClickable
	        	.addClass( 'active' )
	        	.next()
	        	.removeClass( 'is-hidden' )
	        	.next()
	        	.removeClass( 'is-hidden' );

	        $indicatesMorePagesLeft
	        	.addClass( 'is-hidden' );

            $indicatesMorePagesRight
            	.removeClass( 'is-hidden' );

        	$pageCounter
        		.text( '1 / '+ quantPages );

		}

		function goLastPage() {

			var $lastClickable;
			var $indicatesMorePagesLeft;
			var $indicatesMorePagesRight;
			var $pageCounter;
			

			$lastClickable = $( '.js-clickable' ).last();
			$indicatesMorePagesLeft = $( '.js-morePageLeft' );
			$indicatesMorePagesRight = $( '.js-morePageRight' );
			$pageCounter = $( '.js-page-counter' );

			$lastClickable
		    	.click()
		    	.removeClass('is-hidden')
		    	.prevAll('.js-clickable')
		    	.addClass('is-hidden')
		    	.siblings()
		    	.removeClass('active');

		    $lastClickable
	        	.addClass( 'active' )
	        	.prev()
	        	.removeClass( 'is-hidden' )
	        	.prev()
	        	.removeClass( 'is-hidden' );

	        $indicatesMorePagesLeft
	        	.removeClass( 'is-hidden' );

            $indicatesMorePagesRight
            	.addClass( 'is-hidden' );

        	$pageCounter
        		.text( quantPages +' / '+ quantPages );

		}

		function nextPage(){

			var $this;
			var $nextIsHidden;
			var $nextIsMorePageRight;
			var $indicatesMorePagesLeft;
			var $indicatesMorePagesRight;
			var $firstClickableVisible;

			$this = $( this )

			$indicatesMorePagesLeft = $( '.js-morePageLeft' );

			$indicatesMorePagesRight = $( '.js-morePageRight' );
			
			$nextIsHidden = $this
								.next()
								.hasClass( 'is-hidden' );

			$nextIsMorePageRight = $this
									.next()
									.hasClass( 'js-morePageRight' );

			$firstClickableVisible = $( '.js-clickable:not(.is-hidden):first' )						

			if($nextIsHidden && !$nextIsMorePageRight) {

				$indicatesMorePagesLeft
					.removeClass( 'is-hidden' );

				$this
					.next()
					.removeClass( 'is-hidden' );

				$firstClickableVisible
					.addClass( 'is-hidden' );

			} else {
				$indicatesMorePagesRight
					.addClass('is-hidden');
			}

		}

		function prevPage(){

			var $this;
			var $prevIsHidden;
			var $prevIsMorePageLeft;
			var $indicatesMorePagesLeft;
			var $indicatesMorePagesRight;
			var $lastClickableVisible;

			$this = $( this )

			$indicatesMorePagesLeft = $( '.js-morePageLeft' );

			$indicatesMorePagesRight = $( '.js-morePageRight' );
			
			$prevIsHidden = $this
								.prev()
								.hasClass( 'is-hidden' );

			$prevIsMorePageLeft = $this
									.prev()
									.hasClass( 'js-morePageLeft' );

			$lastClickableVisible = $( '.js-clickable:not(.is-hidden):last' )						

			if( $prevIsHidden && !$prevIsMorePageLeft ) {

				$indicatesMorePagesRight
					.removeClass( 'is-hidden' );

				$this
					.prev()
					.removeClass( 'is-hidden' );

				$lastClickableVisible
					.addClass( 'is-hidden' );

			} else {
				$indicatesMorePagesLeft
					.addClass('is-hidden');
			}

		}
		
    	$page
    		.append( $indicatesMorePagesRight )
    		.prepend( $indicatesMorePagesLeft )
    		.append( $lastPageButton )
    		.prepend( $firstPageButton )
    		.on( 'click', '.js-clickable:not(.is-hidden):first', prevPage )
    		.on( 'click', '.js-clickable:not(.is-hidden):last', nextPage );
    }

    function clearInputSearch(){

    	var $inputSearch;

    	 $inputSearch = $( '.js-table-input__search' );

    	 $inputSearch
    	 	.val( '' );
    	 					 
    }

    $page
    	.insertAfter($table)
    	.find('.js-page-number:first')
    	.addClass('active');

    $pageCounter
    	.insertAfter($page)
      
});	
	



function pesquisar() {

	var filterDate;
	var trs;
	var $tds; 

	filterDate = $(".js-table-input__search")
					.val()
					.toUpperCase();

	filterDate = filterDate
					.replace(/\s/g, '');
	
	
	$trs = $(".js-table tbody > tr.js-visible");

	$tds = $trs.find('.js-search-date');

	if(filterDate !== ''){

		var $this; 
		var $tdValue;

  		$trs
  			.addClass('is-hidden');

  		$tds.each(function () {

			var $this;
			var matchFilter;

			$this = $(this);

			$tdValue = $this
						.text()
						.toUpperCase();

			matchFilter = $tdValue
							.indexOf(filterDate);
			
			if( matchFilter > -1 ){

				$this
					.parent()
					.removeClass( 'is-hidden' );
			}

  		});
  	}
}

$(".js-table-input__search").on('input', pesquisar);
