document.addEventListener("DOMContentLoaded", () => {
  const passwordOverlay = document.getElementById("password-overlay");
  const passwordInput = document.getElementById("password-input");
  const passwordButton = document.getElementById("password-button");
  const passwordError = document.getElementById("password-error");

  // Bloquear o scroll do corpo enquanto a senha não for digitada
  document.body.classList.add("locked");

  function checkPassword() {
    const enteredPassword = passwordInput.value.toLowerCase().trim();
    const correctPassword = "viviane";

    if (enteredPassword === correctPassword) {
      // Senha correta: remover o overlay e liberar o scroll
      passwordOverlay.style.opacity = "0";
      passwordOverlay.style.visibility = "hidden";
      document.body.classList.remove("locked");
      
      // Pequeno feedback visual de sucesso (opcional)
      console.log("Acesso permitido!");
    } else {
      // Senha incorreta: mostrar mensagem de erro
      passwordError.style.display = "block";
      passwordInput.value = "";
      passwordInput.focus();
      
      // Tremer o container para indicar erro
      const container = document.querySelector(".password-container");
      container.style.animation = "shake 0.5s";
      setTimeout(() => {
        container.style.animation = "";
      }, 500);
    }
  }

  // Evento de clique no botão
  passwordButton.addEventListener("click", checkPassword);

  // Evento de pressionar "Enter" no teclado
  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  });
});

// Adicionar animação de "shake" ao CSS dinamicamente
const style = document.createElement('style');
style.innerHTML = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);
