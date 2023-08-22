
document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const postModal = document.getElementById("postModal");
    const closeModalBtn = postModal.querySelector(".close");
    const publishBtn = document.getElementById("publishBtn");
  
    openModalBtn.addEventListener("click", function () {
        postModal.style.display = "block";
    });
  
    closeModalBtn.addEventListener("click", function () {
        postModal.style.display = "none";
    });
  
    publishBtn.addEventListener("click", function () {
        const postTitle = document.getElementById("postTitle").value;
        if (postTitle) {
            // Aqui você pode fazer algo com o título da postagem, como enviar para um servidor ou exibir na página
            console.log("Título da postagem:", postTitle);
            postModal.style.display = "none";
        } else {
            alert("Por favor, insira um título para a postagem.");
        }
    });
  });