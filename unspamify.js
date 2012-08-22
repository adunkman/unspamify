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
 * License: MIT
 */
(function ($) {
   var trim = function (input) { return input.replace(/^\s+|\s+$/g, ""); };

   $.fn.unspamify = function () {
      return this.each(function () {
         var $this = $(this),
             text = $this.text(),
             parts, email, label;

         if (text.indexOf(":") > 0) {
            parts = text.split(":");
            label = parts[0];
            text = parts[1];
         }

         parts = text.split(" at ");
         email = parts[0] + "@" + parts[1].replace(/ dot /g, ".");
         label = label || email;

         $this.attr("href", "mailto:" + trim(email));
         $this.text(trim(label));
      });
   };
})(jQuery);