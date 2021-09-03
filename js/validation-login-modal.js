$("#login-btn").click(function () {
	let usuario = $("#loginUsuario").val();
	let senha = $("#loginSenha").val();

	let count = 0;

	if (!usuario) {
		$("#loginUsuario").notify("O usuario deve ser preenchido", "error");
		count++;
	} else if (usuario.length < 6) {
		$("#loginUsuario").notify(
			"O usuario deve conter no minimo 6 digitos",
			"error"
		);
		count++;
	}

	if (!senha) {
		$("#loginSenha").notify("A senha deve ser preenchida", "error");
		count++;
	} else if (senha.length < 6) {
		$("#loginSenha").notify(
			"A senha deve ter no minimo 6 caracteres",
			"error"
		);
		count++;
	}

	//MODAL
	if (count === 0) {
		$("#modalUsuario").modal().find(".modal-title").text("VisaoCria ");

		$("#modalUsuario").modal().find(".modal-body input").text("VisaoCria ");

		$("#modalUsuario").modal("show");
	}
});
