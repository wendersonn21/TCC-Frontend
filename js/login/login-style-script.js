const title = document.querySelector(".title");

const renderTitle = () => {
    const titleArray = ["C", "o", "d", "e", "S", "a", "v", "v", "y"];
    let index = 0;

    // Limpar o conteúdo atual
    title.textContent = "";

    // Configurar um intervalo para adicionar cada caractere
    const intervalId = setInterval(() => {
        if (index < titleArray.length) {
            title.textContent += titleArray[index];
            index++;
        } else {
            // Cancelar o intervalo quando todos os caracteres foram adicionados
            clearInterval(intervalId);
        }
    }, 300);
}

renderTitle();
