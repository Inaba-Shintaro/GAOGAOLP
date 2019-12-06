$(function() {
  // 処理
  var navPos = jQuery("#mainNav").offset().top; // グローバルメニューの位置

  jQuery(window).on("scroll", function() {
    if (jQuery(this).scrollTop() > navPos) {
      jQuery("body").css("padding-top", 74); // グローバルメニューの高さ（縮んだ時の高さ）
      jQuery("#mainNav").addClass("m_fixed");
    } else {
      jQuery("body").css("padding-top", 0);
      jQuery("#mainNav").removeClass("m_fixed");
    }
  });
});
