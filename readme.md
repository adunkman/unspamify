A jQuery plugin to convert "spam-concious" "links" to mailto: links.

This plugin reads the `.text()` of an element and adds a "href" attribute that is a mailto link. Confused? Examples!

# Example
Your HTML is all like...
```html
<a class="unspamify-me">display text here: email at domain dot com</a>
<a class="unspamify-me">email at domain dot com</a>
```

Your JavaScript is all like...
```javascript
$(document).ready(function () {
   $("a.unspamify-me").unspamify();
});
```

And then your page is all like...
```html
<a class="unspamify-me" href="mailto:email@domain.com">display text here</a>
<a class="unspamify-me" href="mailto:email@domain.com">email@domain.com</a>
```

# Tests
[Run the tests](http://adunkman.github.com/unspamify/test/runner.html) for yourself.

# License
Copyright (c) 2011-2012 Andrew Dunkman. Released under MIT License.
