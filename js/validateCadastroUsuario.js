$('#formCadastroUsuario').validate({
	rules: {
		nomeCompleto: 'required',
		email: {
			required: true,
			email: true
		},
		senha: {
			required: true,
			rangelength: [4, 4]
		},
		confirmarSenha: {
			required: true,
			equalTo: '#senha'
		},
		cpf: {
			required: true,
			number: true,
			minlength: 11,
			maxlength: 11

		},
		dataNascimentoDia: {
			required: true,
			number: true,
			range: [1, 31]
		},
		dataNascimentoMes: {
			required: true
		},
		dataNascimentoAno: {
			required: true,
			number: true,
			rangelength: [4, 4]
		},
		telefoneDDD: {
			required: true,
			number: true,
			rangelength: [2, 2]
		},
		telefoneNum: {
			required: true,
			number: true,
			rangelength: [7, 9]
		},
		cep: {
			required: true,
			number: true
		},
		rua: 'required',
		numero: {
			required: true,
			number: true
		},
		cidade: 'required',
		bairro: 'required',
		estado: 'required',
		nomeTitular: 'required',
		cartoes: 'required',
		numeroCartao: {
			required: true,
			number: true
		},
		expiracaoMes: {
			required: true
		},
		expiracaoAno: {
			required: true,
			number: true,
			rangelength: [4, 4]
		},
		termoAdesao:'required'

	},
	messages: {
		nomeCompleto: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>'
					+ 'Precisamos saber seu <strong><u>nome</u>'
					+ '</strong> e <strong><u>sobrenome</u></strong>'
					+ ' para lhe ajudar.',
		
		email: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>'
					+ 'Precisamos saber seu <strong><u>E-mail</u></strong>,'
					+ '<br> assim podemos manter você informado.',
			email: '<span>Alerta:</span><br><br>'
				 + 'Tem algo errado no email digitado.<br>'
				 + 'Veja um exemplo: <strong><u>email@hotmail.com</u></strong>'
		},

		senha: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>',

			rangelength: '<span>Alerta:</span><br><br>'
					   + 'A <strong><u>senha</u></strong> precisa ter no minimo 4 digitos<br>'
					   + 'e no maximo 4 digitos.'		
		},

		confirmarSenha: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>',
			equalTo: '<span>Alerta:</span><br><br>'
					+ 'As senhas não estão iguais.<br>',
		},

		cpf: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.<br>'
					+ 'Seu <strong><u>CPF</u></strong> lhe identifica de forma unica.',
			number: '<span>Alerta:</span><br><br>'
				  + 'Digite apenas os números do seu <strong><u>CPF</u></strong>.<br>'
				  + 'Não se preocupe com os <strong><u>pontos</u></strong>' 
				  + ' e os <strong><u>traços</u></strong>.',
			minlength: '<span>Alerta:</span><br><br>'
				  	 + 'Você colocou <strong><u>poucos</u></strong> digitos.<br>'
				  	 + 'Seu <strong><u>CPF</u></strong> precisa ter'
				  	 + ' <strong><u>11 digitos</u></strong>.',
			maxlength: '<span>Alerta:</span><br><br>'
				  	 + 'Você colocou <strong><u>muitos</u></strong> digitos.<br>'
				  	 + 'Seu <strong><u>CPF</u></strong> precisa ter'
				  	 + ' <strong><u>11 digitos</u></strong>.'
		},

		dataNascimentoDia: {
			required: '<span>Alerta:</span><br><br>'
					+ 'O campo <strong><u>dia</u></strong> não pode ficar vazio.<br>'
					+ 'O <strong><u>dia</u></strong> do seu nascimento é importante pra gente.',
			number: '<span>Alerta:</span><br><br>'
					+ 'Digite apenas números no campo <strong><u>dia</u></strong>.<br>',
			range: '<span>Alerta:</span><br><br>'
					+ 'Esse <strong><u>dia</u></strong> não existe.<br>'
					+ 'Mas não se preocupe, a gente espera você ajeitar.'
		},

		dataNascimentoMes: {
			required: '<span>Alerta:</span><br><br>'
					+ 'O campo <strong><u>mês</u></strong> não pode ficar vazio.<br>'
					+ 'O <strong><u>dia</u></strong> sem o <strong><u>mês</u></strong> não faz muito sentido.'
		},

		dataNascimentoAno: {
			required: '<span>Alerta:</span><br><br>'
					+ 'O campo <strong><u>ano</u></strong> não pode ficar vazio.<br>'
					+ 'Nos informe o <strong><u>ano</u></strong> e podemos comemorar com você.',
			number: '<span>Alerta:</span><br><br>'
					+ 'Digite apenas números no campo <strong><u>ano</u></strong>.',
			rangelength: '<span>Alerta:</span><br><br>'
					   + 'Digite o <strong><u>ano</u></strong> com o formato completo.<br>'
					   + 'Veja um exemplo: <strong><u>2000</u></strong>.',
		},

		telefoneDDD: {
			required: '<span>Alerta:</span><br><br>'
					+ 'O campo <strong><u>DDD</u></strong> não pode ficar vazio.<br>'
					+ 'O <strong><u>DDD</u></strong> possibilita ligarmos pra você corretamente.',
			number: '<span>Alerta:</span><br><br>'
					+ 'Digite apenas números no campo <strong><u>DDD</u></strong>.',
			rangelength: '<span>Alerta:</span><br><br>'
					   + 'O <strong><u>DDD</u></strong> possui 2 números.<br>'
					   + 'Veja um exemplo: <strong><u>21</u></strong>.',
		},

		telefoneNum: {
			required: '<span>Alerta:</span><br><br>'
					+ 'O campo <strong><u>telefone</u></strong> não pode ficar vazio.',
			number: '<span>Alerta:</span><br><br>'
					+ 'Digite apenas números no campo <strong><u>telefone</u></strong>.<br>'
					+ 'Não se preocupe com os <strong><u>traços</u></strong>.', 
			rangelength: '<span>Alerta:</span><br><br>'
					   + 'O <strong><u>telefone</u></strong> possui entre 7 e 9 números.<br>'
					   + 'Veja um exemplo: <strong><u>988888888</u></strong>.',
		},

		cep: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.',
			number: '<span>Alerta:</span><br><br>'
					+ 'Digite apenas números.<br>'
					+ 'Não se preocupe com os <strong><u>traços</u></strong>.'
		},

		rua: '<span>Alerta:</span><br><br>'
		   + 'Esse campo não pode ficar vazio.',

		numero: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.',
			number: '<span>Alerta:</span><br><br>'
					+ 'Digite apenas números.'
		},

		cidade: '<span>Alerta:</span><br><br>'
			  + 'Esse campo não pode ficar vazio.',

		bairro: '<span>Alerta:</span><br><br>'
			  + 'Esse campo não pode ficar vazio.',

		estado: '<span>Alerta:</span><br><br>'
			  + 'Esse campo não pode ficar vazio.',

		nomeTitular: '<span>Alerta:</span><br><br>'
			  + 'Esse campo não pode ficar vazio.',

		cartoes: '<span>Alerta:</span><br><br>'
			  + 'Esse campo não pode ficar vazio.',

		numeroCartao: {
			required: '<span>Alerta:</span><br><br>'
					+ 'Esse campo não pode ficar vazio.',
			number: '<span>Alerta:</span><br><br>'
					+ 'Digite apenas números.'
		},
		expiracaoMes: {
			required: '<span>Alerta:</span><br><br>'
					+ 'O campo <strong><u>mês</u></strong> não pode ficar vazio.'
		},

		expiracaoAno: {
			required: '<span>Alerta:</span><br><br>'
					+ 'O campo <strong><u>ano</u></strong> não pode ficar vazio.',
			number: '<span>Alerta:</span><br><br>'
					+ 'Digite apenas números no campo <strong><u>ano</u></strong>.',
			rangelength: '<span>Alerta:</span><br><br>'
					   + 'Digite o <strong><u>ano</u></strong> com o formato completo.<br>'
					   + 'Veja um exemplo: <strong><u>2010</u></strong>.',
		},

		termoAdesao: '<span>Alerta:</span><br><br>'
				   + 'Marque o campo de termo de assinatura'
	}
});



$('#formCadastroUsuario').on('click', 'button', function(){

	if(!$('#formCadastroUsuario').valid()){
	
		var errorDia = $('#dataNascimentoDia-error');
		var errorMes = $('#dataNascimentoMes-error');
		var errorAno = $('#dataNascimentoAno-error');
		var inputAno = $('input[name="dataNascimentoAno"]');
		var inputTelefone = $('input[name="telefoneNum"]').parent();
		var inputExpiracaoAno = $('input[name="expiracaoAno"]');
		var inputTermoAdesao = $('input[name="termoAdesao"]').parent().parent();
		var errorTermoAdesao = $('#termoAdesao-error');
		var errorTelefoneDDD = $('#telefoneDDD-error');
		var errorTelefoneNum = $('#telefoneNum-error');
		var errorExpiracaoMes = $('#expiracaoMes-error');
		var errorExpiracaoAno = $('#expiracaoAno-error');

		inputAno.after(errorAno);
		inputAno.after(errorMes);
		inputAno.after(errorDia);
		
		inputTelefone.after(errorTelefoneNum);
		inputTelefone.after(errorTelefoneDDD);

		inputExpiracaoAno.after(errorExpiracaoMes);
		inputExpiracaoAno.after(errorExpiracaoAno);

		console.log(errorTermoAdesao)
		inputTermoAdesao.append(errorTermoAdesao)

	}
})
.on('input', 'input, textarea', function(){

	var $this = $(this);
	var valueTarget = $this.val();
	var isEmpty;

	valueTarget = valueTarget.replace(/\s/, '');
	isEmpty = valueTarget.length === 0;

	if( isEmpty ){

		$this.val('');
	} 

});