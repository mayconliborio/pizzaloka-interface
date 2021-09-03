$("#inputCep").focusout(function () {
	$.ajax({
		url: "https://viacep.com.br/ws/" + $(this).val() + "/json/unicode/",
		dataType: "json",
		success: function (resposta) {
			if (!!resposta.erro) {
				$("#inputCep").notify("CEP invalido", "error");
			}

			$("#inputEndereco").val(resposta.logradouro);
			$("#inputCidade").val(resposta.localidade);
			$("#inputNumero").focus();
		},
		error: function () {
			$("#inputCep").notify("CEP invalido", "error");
		},
	});
});
