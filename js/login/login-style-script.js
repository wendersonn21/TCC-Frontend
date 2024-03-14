const title = document.querySelector(".title");
const titlePage = document.title;
const renderTitle = () => {
    const titleArray = ["C", "o", "d", "e", "S", "a", "v", "v", "i", "y"];
    let index = 0;

    // Clear the current content
    title.textContent = "";

    // Set an interval to add each character
    const intervalId = setInterval(() => {
        if (index < titleArray.length) {
            
            if (index === 8) {
                title.textContent += titleArray[index];
                setTimeout(() => {
                    // Remove the last character after adding the ninth character
                    title.textContent = title.textContent.slice(0, -1);

                }, 250)
            } else {
                title.textContent += titleArray[index];
            }
            index++;
        } else {
            // Cancel the interval when all characters have been added
            clearInterval(intervalId);
        }
    }, 300);
}

function hideQueryParams() {
    const newURL = window.location.pathname; // Obtém apenas o caminho da URL
    window.history.replaceState({}, document.title, newURL); // Atualiza a URL sem adicionar ao histórico
}

window.addEventListener("blur", () => {
    document.title = "Esperamos que volte 😥"
})

window.addEventListener("focus", () => {
    document.title = titlePage
})


hideQueryParams();
renderTitle();
