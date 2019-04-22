var Modal = function(modal) {

	var $modal = $(modal);
	var $buttonShow = modal + '-show';
	var $buttonClose = '.js-modal-close';

	console.log($buttonClose)

	$modal.on('click', $buttonClose, closeModal );

	$('body').on('click', $buttonShow, showModal );

	function closeModal() {

		$modal.removeClass( 'is-show' );
		$modal.addClass( 'is-hidden' );

	};

	function showModal() {

		$modal.removeClass( 'is-hidden' );
		$modal.addClass( 'is-show' );
	}

	return {
		close: function() {
			closeModal();
		},
		show: function() {
			showModal();
		}
	}
};

Modal('.js-modal-assinatura');