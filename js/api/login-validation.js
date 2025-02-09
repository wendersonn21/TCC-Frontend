const url = new URLSearchParams(window.location.search)
const username = url.get("username")
const password = url.get("password")
const email = url.get("email")

const apiRequest = async () => {
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1MDU3OTQsImV4cCI6MTcxMzE4NDE5NH0.lX_TJ9n2iUg7lL0UHsg2aVY9XJErj1yYZ6RBS41s2GA";

    if (username !== "" && password !== "" && email !== "") {
        try {
            const response = await fetch("https://tcc-u2qf.onrender.com/users/login", {
                method: "POST",
                body: JSON.stringify({
                    nickname: username,
                    password: password,
                    email: email
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authToken
                }
            });

            if (response.ok) {
                window.location.href = "../../html/main/home.html";
            } else {
                const data = await response.json();
                switch (true) {
                    case data.message === "Erro de validação":
                    case data.status === 400 && data.message === "dados do usuario incorretos":
                        if (
                            data.errors[0].constraints.matches &&
                            data.errors[0].constraints.matches.includes("a senha deve conter uma letra maiuscula, uma letra minuscula e um caractere especial")
                        ) {
                            window.location.href = "../../html/login/login.html?error&errorID=153032";
                        } else if (data.errors[0].constraints.isEmail && data.errors[0].constraints.isEmail.includes("Formato de email Invalido")) {
                            window.location.href = "../../html/login/login.html?error&errorID=153031";
                        } else if (
                            data.errors[0].constraints.matches &&
                            data.errors[0].constraints.matches.includes("Formato de email Invalido") &&
                            data.errors[0].constraints.matches.includes("a senha deve conter uma letra maiuscula, uma letra minuscula e um caractere especial")
                        ) {
                            window.location.href = "../../html/login/login.html?error&errorID=153030";
                        }
                        break;
                
                    case (data.status === 400 && data.message === "Internal Server Error"):
                        window.location.href = "../../html/errors/404-page.html";
                        break;
                
                    // na proxima vez que o docker for atualizado tem que mudar a data.message aqui de "Internal server error" para "Usuario não encontrado email ou nickname incorretos"
                    case (data.status === 500 && data.message === "Internal Server Error"):
                        window.location.href = "../../html/login/login.html?error&errorID=153034"
                        break;
                
                    default:
                        window.location.href = "../../html/login/login.html";
                        break;
                }
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            // Lidar com erro na requisição
        }
    }
}


// function hideQueryParams() {
//     const newURL = window.location.pathname; // Obtém apenas o caminho da URL
//     window.history.replaceState({}, document.title, newURL); // Atualiza a URL sem adicionar ao histórico
// }
// hideQueryParams();
apiRequest();