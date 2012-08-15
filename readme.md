A jQuery plugin to convert "spam-concious" "links" to mailto: links.

This plugin reads the `.html()` of an element and adds a "href" attribute that is
a mailto link. Confused? Examples!

# Examples
You're all like...
```html
<a class="unspamify-me">display text here: email at domain dot com</a>
<a class="unspamify-me">email at domain dot com</a>
```

... and then you're all like...
```javascript
$("a.unspamify-me").unspamify();
```