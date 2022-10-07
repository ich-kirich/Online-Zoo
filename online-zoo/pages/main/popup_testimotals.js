let comments = document.querySelectorAll('.comment')
const Shadow = document.querySelector('.comment-shadow')
flag = true
if(pageWidth <= 840){
    let close = document.createElement("div");
    close.classList.toggle('close')
    close.style.width = '14px'
    close.style.height = '14px'
    close.style.backgroundImage = 'url(../../assets/svg/close.svg)'
    close.style.backgroundRepeat = 'no-repeat'
    close.style.backgroundPosition = 'center center'
    close.style.backgroundSize = '14px 14px'
    close.style.position = 'absolute'
    close.style.zIndex = '1100'
    close.style.top = '1%'
    close.style.right = '1%'
    comments.forEach((comment) => { // Перебираем все кнопки
        comment.onclick = (e) => { // Для каждой вешаем обработчик событий на клик
            comment.appendChild(close)
            e.preventDefault();
            comment.classList.remove('comment')
            comment.classList.add('show-comment')
            Shadow.classList.add('active')
            document.body.style.overflow = "hidden"
        };

        document.addEventListener('click', function(e) {
            if(e.target === Shadow || e.target === close) {
                document.body.style.overflow = "auto"
                Shadow.classList.remove('active')
                comment.classList.remove('show-comment')
                comment.classList.add('comment')
                close.remove();
            }
        });
    });
}
