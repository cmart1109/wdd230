const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".hamburguer")

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open')
    hamButton.classList.toggle('open')
})