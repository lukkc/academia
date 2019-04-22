$('#formLogin').validate({
	rules: {
		email: {
			required: true,
			email: true
		},
		senha: {
			required: true
		}
	},
	messages: {
		
		email: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Com esse campo vazio não podemos fazer o login.<br>',

			email: '<span>Alerta:</span><br><br>'
				 + 'Tem algo errado no email digitado.<br>'
				 + 'Digite o <strong><u>email</u></strong> que você escolheu no cadastro'
		},

		senha: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Com esse campo vazio não podemos fazer o login.<br>'
					+ 'Digite a <strong><u>senha</u></strong> que você escolheu no cadastro'
		}
	}
});
