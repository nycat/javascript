# HTML5 history

HTML5 history helps you to change URL and webpage resources without refreshing webpage.

reference: https://juejin.im/post/5aebc4a26fb9a07acc11924d

## properties and methods for history object

<img src="./imgs/01.history.png" style="margin-top: 30px">

### methods

- back
- forward
- go

```javascript
let historyIndex = 10
hisotry.go(historyIndex)
```

### New methods added for history object in html5

- pushState

- replaceState

Both *replaceState* and *pushState* will change browser URL, but it do not load page.

A demo is [here](./index.html)

```javascript

```