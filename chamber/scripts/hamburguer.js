const button = document.querySelector("#menu")
const navigation = document.querySelector("nav")


button.addEventListener('click', () => {
    navigation.classList.toggle('open')
    button.classList.toggle('open')
})