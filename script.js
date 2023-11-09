window.addEventListener('DOMContentLoaded', () => {

   const cube = document.querySelector('.cube'),
      btn = document.querySelector('button'),
      activeBtn = document.querySelector('.active');
   let cubeAnimation;

   const btnAnimation = btn.animate([
      //{ 'background': '#fff' },
      //{ 'background': 'rgb(207, 22, 207)' },
      //{ 'background': '#932424' },
      //{ 'background': '#2a4a21' },
      //{ 'background': 'rgb(19, 19, 170)' },
      //{ 'background': 'rgb(70, 70, 125)' },
      //{ 'background': 'rgb(99, 59, 99)' },
      //{ 'background': 'rgb(42, 154, 192)' },
      //{ 'background': 'rgb(233, 159, 172)' },
      //{ 'background': 'rgb(232, 232, 13)' },
      //{ 'background': 'rgb(179, 173, 122)' },
      //{ 'background': 'rgb(103, 101, 101)' },

      { 'background': 'linear-gradient(to right, #0a3705, #286110, #4c8d17, #77bb19, #a8eb12)' },
      { 'background': 'linear-gradient(to right, #053718, #005343, #006f7b, #0088b6, #129ceb)' },
      { 'background': 'linear-gradient(to right, #110537, #321565, #5e1e93, #9120c0, #cc12eb)' },
      { 'background': 'linear-gradient(to right, #370532, #610445, #8f0052, #bd0057, #eb1255)' },
      { 'background': 'linear-gradient(to right, #37050a, #772c1a, #af6117, #d6a200, #e4eb12)' },
   ],
      {
         duration: 10000,
         iterations: Infinity
      });

   let activeBtnAnimation;

   activeBtn.addEventListener('click', () => {

      if (!activeBtnAnimation) {
         activeBtnAnimation = activeBtn.animate([
            { border: 'solid 3px #f1fc62' },
            { '-webkit-box-shadow': '0px 0px 31px 21px rgba(229, 243, 46, 0.31)' },
            { '- moz - box - shadow': '0px 0px 31px 21px rgba(229, 243, 46, 0.31)' },
            { 'box-shadow': '0px 0px 31px 21px rgba(229, 243, 46, 0.31)' }
         ],
            {
               duration: 1000,
               iterations: Infinity
            }
         );
      } else if (activeBtnAnimation.playState == 'paused') {
         activeBtnAnimation.play()
      } else {
         activeBtnAnimation.pause()
      }
   });


   btn.addEventListener('click', () => {

      if (!cubeAnimation) {
         cubeAnimation = cube.animate([
            { transform: 'rotate3d(1, 1, 1, 0deg)' },
            { transform: 'rotateY(0px)' },
            { transform: 'rotate3d(1, 1, 1, 360deg)' },
            { transform: 'rotateY(200px)' },
            { transform: 'rotate3d(1, 1, 1, 0deg)' },
            { transform: 'rotateY(0px)' },
            { transform: 'rotateY(-200px)' },
            { transform: 'rotateY(0px)' },

         ],
            {
               duration: 30000,
               iterations: Infinity
            });
      } else if (cubeAnimation.playState == 'paused') {
         cubeAnimation.play();
         btn.classList.add('active');
      } else {
         cubeAnimation.pause()
      }
   });
});