# UTM Query Strings 1.0.1
## Plugins for help your get query string from html static page.

### How to use

Step 1: Require file from CDN

```
<!-- you can get the plugin from the *CDN* -->

<script src="https://d2f45svx228c0u.cloudfront.net/query-strings.js"></script>
```

Step 2: Call the plugin
```

<a id="demo">Link with utm</a>

<script type="text/javascript">
  var qs = new QS();
  var path = qs.setUTM('https://example.com');
  var demo = document.getElementById("demo");
 demo.setAttribute("href", path);
</script>

```

*Configuration method*

```
setUTM( url )
url: String (Your url)
```