
let backgroundBlur = document.querySelector(".blur_background")
let openWindow = document.querySelector(".window_opcoes_perfil")


        //abre o menu de opções
        function classWindowOpen() {
            backgroundBlur.classList.add("turnOnBlur")
            openWindow.classList.add("window_opcoes_perfil_movement")
        }
        // fecha o menu de opções
        function closeOptionsWindow() {
            backgroundBlur.classList.remove("turnOnBlur")
            openWindow.classList.remove("window_opcoes_perfil_movement")
        }
        