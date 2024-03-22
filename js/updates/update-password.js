const form = document.querySelector("#form");


form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA1MDU3OTQsImV4cCI6MTcxMzE4NDE5NH0.lX_TJ9n2iUg7lL0UHsg2aVY9XJErj1yYZ6RBS41s2GA";
    const nickname = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const surname = document.querySelector("#surname").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmarSenha").value;

    if (nickname !== "" && email !== "" && surname !== "" && password !== "" && password === confirmPassword) {
        try {
            const response = await fetch("https://tcc-u2qf.onrender.com/users/update?type=password", {
                method: "PATCH",
                body: JSON.stringify({
                    nickname,
                    email,
                    surname,
                    password,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": authToken
                }
            });

            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.error("Erro na requisição:", error);
            // Lidar com erro na requisição
        }
    }
})