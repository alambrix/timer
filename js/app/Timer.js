import $ from 'jquery';

class Timer {
  constructor() {

  }

  padNum(n){
    return (n < 10) ? ("0" + n) : n;
  }

  init(){
    //Localize this
    const _this = this;

    // Set the date we're counting down to
    const countDownDate = new Date("April 24, 2020 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {

      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("days").innerHTML = `${_this.padNum(days)}`;
      document.getElementById("hours").innerHTML = `${_this.padNum(hours)}`;
      document.getElementById("minutes").innerHTML = `${_this.padNum(minutes)}`;
      document.getElementById("seconds").innerHTML = `${_this.padNum(seconds)}`;

      // If the count down is over, write some text
      if (distance < 0) {
          clearInterval(x);
          $('#timer').addClass('hidden');
          $('#ear').addClass('hidden');
          $('#reveal').removeClass('hidden');
      }
    }, 1000);

    setTimeout(function(){
      $('#master').removeClass('hidden').addClass('animate');
    }, 1000);

    setTimeout(function(){
      $('#master').addClass('animateIn');
    }, 1200);
  }

}
export { Timer as default };
