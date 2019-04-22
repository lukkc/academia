$('#formFaleConosco').validate({
	rules: {
		nomeRemetente: 'required',
		emailRemetente: {
			required: true,
			email: true
		},
		assuntoMensagem: {
			required: true
		},
		dataNascimentoDia: {
			required: true,
			number: true,
			range: [1, 31]
		},
		mensagemRemetente: {
			required: true
		},

	},
	messages: {
		nomeRemetente: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>'
					+ 'Precisamos saber seu <strong><u>nome</u>'
					+ ' para lhe ajudar.',
		
		emailRemetente: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>'
					+ 'Precisamos saber seu <strong><u>E-mail</u></strong>,'
					+ '<br> assim podemos manter você informado.',
			email: '<span>Alerta:</span><br><br>'
				 + 'Tem algo errado no email digitado.<br>'
				 + 'Veja um exemplo: <strong><u>email@hotmail.com</u></strong>'
		},

		assuntoMensagem: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>'
					+ 'Nos dê uma pista sobre a mensagem que vai nos enviar.'
		},

		mensagemRemetente: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>'
					+ 'Sem mensagem não envia.',
		}
	}
});


$('#formFaleConosco input').each(function(index, el) {

	$(this).val().replace(/\s/, '');

	if($(this).val().length === 0){
		$(this).val('');
	} 
});

$('#formFaleConosco textarea').each(function(index, el) {
	$(this).text().replace(/^\s/, '');


 if($(this).text().length === 0){
		$(this).text('');
	}	
});


$('#formFaleConosco').on('input', 'input, textarea', function(){


	var $this = $(this);
	var valueTarget = $this.val();
	var isEmpty;

	valueTarget = valueTarget.replace(/\s/, '');
	isEmpty = valueTarget.length === 0;

	if( isEmpty ){

		$this.val('');
	} 

});