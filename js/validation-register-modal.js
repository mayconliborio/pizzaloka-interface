$("#register-btn").click(function () {
	let usuario = $("#inputUsuario").val();
	let senha1 = $("#inputSenha1").val();
	let senha2 = $("#inputSenha2").val();
	let CEP = $("#inputCep").val();
	let endereco = $("#inputEndereco").val();
	let cidade = $("#inputCidade").val();
	let numero = $("#inputNumero").val();
	let complemento = $("inputComplemento").val();
	let count = 0;

	if (!usuario) {
		$("#inputUsuario").notify("O usuario deve ser preenchido", "error");
		count++;
	} else if (usuario.length < 6) {
		$("#inputUsuario").notify(
			"O usuario deve conter no minimo 6 digitos",
			"error"
		);
		count++;
	}

	if (!senha1) {
		$("#inputSenha1").notify("A senha deve ser preenchida", "error");
		count++;
	} else if (senha1.length < 6) {
		$("#inputSenha1").notify(
			"A senha deve ter no minimo 6 caracteres",
			"error"
		);
		count++;
	}

	if (senha1 !== senha2) {
		$("#inputSenha2").notify("As senhas não coincidem", "error");

		count++;
	}

	if (!CEP) {
		$("#inputCep").notify("CEP deve ser preenchido", "error");
		count++;
	}

	if (CEP) {
		$.ajax({
			url: "https://viacep.com.br/ws/" + CEP + "/json/unicode/",
			dataType: "json",
			success: function (resposta) {
				if (!!resposta.erro) {
					$("#inputCep").notify("CEP invalido", "error");
					count++;
				}
				console.log(resposta);
			},
			error: function () {
				$("#inputSenha2").notify("Cep Invalido", "error");
				count++;
			},
		});
	}

	//MODAL
	if (count === 0) {
		let obj = {
			id: id,
			usuario: usuario,
			senha: senha1,
			CEP: CEP,
			endereco: endereco,
			cidade: cidade,
			numero: numero,
			complemento: complemento,
		};
		$("#modalUsuario").modal().find(".modal-title").text("VisaoCria ");

		$("#modalUsuario").modal().find(".modal-body input").text("VisaoCria ");

		$("#modalUsuario").modal("show");
	}
});
