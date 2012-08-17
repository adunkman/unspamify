(function ($) {

   describe('unspamify', function () {

      it("parses a textified email address ('test at example dot com') into a mailto: link", function () {
         var element = $("<a>test at example dot com</a>").unspamify(),
             text = element.text(), href = element.attr("href");

         expect(text).to.be("test@example.com");
         expect(href).to.be("mailto:test@example.com");
      });

      it("parses text before a colon as link text ('text: test at example dot com')", function () {
         var element = $("<a>text: test at example dot com</a>").unspamify(),
             text = element.text(), href = element.attr("href");

         expect(text).to.be("text");
         expect(href).to.be("mailto:test@example.com");
      });

      it("understands emails ending in '.edu' (or any other domain)", function () {
         var element = $("<a>test at example dot edu</a>").unspamify(),
             text = element.text(), href = element.attr("href");

         expect(text).to.be("test@example.edu");
         expect(href).to.be("mailto:test@example.edu");
      });

      it("understands emails with subdomains in the format 'test at sub.example dot com'", function () {
         var element = $("<a>test at sub.example dot com</a>").unspamify(),
             text = element.text(), href = element.attr("href");

         expect(text).to.be("test@sub.example.com");
         expect(href).to.be("mailto:test@sub.example.com");
      });

      it("understands emails with subdomains in the format 'test at sub dot example dot com'", function () {
         var element = $("<a>test at sub dot example dot com</a>").unspamify(),
             text = element.text(), href = element.attr("href");

         expect(text).to.be("test@sub.example.com");
         expect(href).to.be("mailto:test@sub.example.com");
      });

      it("understands emails with IP addresses ('test at 192.168.1.1')", function () {
         var element = $("<a>test at 192.168.1.1</a>").unspamify(),
             text = element.text(), href = element.attr("href");

         expect(text).to.be("test@192.168.1.1");
         expect(href).to.be("mailto:test@192.168.1.1");
      });

      it("understands emails with IP addresses ('test at 192 dot 168 dot 1 dot 1')", function () {
         var element = $("<a>test at 192 dot 168 dot 1 dot 1</a>").unspamify(),
             text = element.text(), href = element.attr("href");

         expect(text).to.be("test@192.168.1.1");
         expect(href).to.be("mailto:test@192.168.1.1");
      });

   });

})(jQuery);