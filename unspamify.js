/**
 * Unspamify: Convert "spam-concious" links to mailto: links. This plugin
 * reads the .html() of an anchor element and adds a "href" attribute that is
 * a mailto link.
 *
 * Formats supported:
 *  - <a>display text here: email at domain dot com</a>
 *  - <a>email at domain dot com</a>
 *
 * Author: Andrew Dunkman
 */
(function($) {
   $.fn.unspamify = function() {
      return this.each(function () {
         var $this = $(this);

         var email;
         var display;

         var text = new String($this.html());
         var arr1 = text.split(':');

         if (typeof (arr1[1]) == 'undefined') {
            var arr2 = arr1[0].split(' ');
            var user = arr2[0];
            var domain = arr2[2];
            var ext = arr2[4];

            email = user + '@' + domain + '.' + ext;
            display = email;
         }
         else {
            var arr2 = arr1[1].split (' ');
            var user = arr2[1];
            var domain = arr2[3];
            var ext = arr2[5];

            email = user + '@' + domain + '.' + ext;
            display = arr1[0];
         }

         $this.attr("href", "mailto:" + email);
         $this.html(display);
      });
   };
})(jQuery);