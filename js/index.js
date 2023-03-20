(function(){
    const scrollBtn = document.querySelectorAll(".js-scroll");
    const header = document.getElementById("ham-btn");
    for(let i = 0;i < scrollBtn.length; i++){
        scrollBtn[i].addEventListener("click",function(){
            if(header.checked){
                header.checked = false;
            }
            const target = this.dataset.target;
            const scrollContent = document.getElementById(target);
            scrollContent.scrollIntoView({
                behavior : 'smooth'
            });
        })
    }
}());
(function(){
    const $carousel = document.getElementById("js-carousel");
    const $contents = document.getElementById("js-contents");
    const $arrowBtn = $carousel.getElementsByTagName("span");
    let $contentFirst = $contents.firstElementChild;
    let $contentLast = $contents.lastElementChild;
    const $image = document.getElementById("js-image");
    const style = window.getComputedStyle($image);
    const num = style.marginLeft.replace(/[^0-9]/g,""); //文字列から数字を取り出す
    const $imageWidth = $image.clientWidth + (num * 2);
    const prevAnime = $contents.animate([{marginLeft: - $imageWidth + "px"}],{duration: 300,easing: "ease-in-out"});
    const nextAnime = $contents.animate([{marginLeft: $imageWidth + "px"}],{duration: 300,easing: "ease-in-out"});

    for(let i= 0; i < $arrowBtn.length; i++){
        $arrowBtn[i].addEventListener("click",function(){
            if(this.classList.contains("arrow-prev")){
                prevAnime.play();
                // アニメーションが終わったら実行する
                prevAnime.onfinish = () => {
                    $contents.style.marginLeft = 0;
                    $contents.appendChild($contentFirst);
                    $contentFirst = $contents.firstElementChild;
                }
            }else{
                nextAnime.play();
                nextAnime.onfinish = () =>{
                    $contents.style.marginLeft= 0;
                    $contents.prepend($contentLast);
                    $contentLast = $contents.lastElementChild;
                }
            }
        })
    }
}());