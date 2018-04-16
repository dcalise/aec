(function () {

  var pages = document.querySelectorAll('.page-container');
  var currentPage = 0;

  pages[0].style.opacity = '1';


  $(document).on('mousewheel', function(e) {
    console.log(e.deltaFactor);
    if (e.deltaY < -5) {
      
      return;
    } else if (e.deltaY > 5) {
      // console.log('next page');
      return;
    }
  });

  $('.next-page').on('click', function(){
    currentPage += 1;
    changePage(currentPage);
    console.log(currentPage);
  });

  function changePage(targetPage) {
    if (currentPage < $(pages).length) {
      console.log('twice');
      $(pages).css('opacity', '0').eq(currentPage).css('opacity', '1');
    }
  }

})();