 $(function(){
 var swiper = new Swiper('.slide', {
    speed: 1000,// 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
    loop: true,//슬라이드 무한반복
    effect: "cards",
    grabCursor: true,
    });
});