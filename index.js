const d = document;
const htmlModal = d.getElementById("modal");

const showModal = () => {
    htmlModal.setAttribute("class", "modale opened");
}

const closeModal = () => {
    htmlModal.setAttribute("class", "modale");
}