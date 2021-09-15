# hanime.tv
[![NPM Version](https://img.shields.io/npm/v/hanime.tv.svg?maxAge=3600)](https://www.npmjs.com/package/hanime.tv)
[![NPM Downloads](https://img.shields.io/npm/dt/hanime.tv.svg?maxAge=3600)](https://www.npmjs.com/package/hanime.tv)

## Table Of Contents
- [Installing](#installing)
- [Useful Links](#links)
- [Example Usage](#example)
- [Disclaimer](#disclaimer)

### Links
- [Documentation](https://rubenennj.github.io/hanime.tv)
- [GitHub Repository](https://github.com/Rubenennj/hanime.tv)

### Installing
Use `npm i hanime.tv`.

### Example
Downloading a video
```js
const { download } = require("hanime.tv")

download("url")
    .then(console.log)
```
Performing a search.
```js
const { search } = require("hanime.tv")

search("itadaki")
    .then(v => v.videos)
```
Getting a specific video info.
```js
const { getVideoInfo } = require("hanime.tv")

getVideoInfo(1315)
    .then(console.log)
```

### Disclaimer
This package is still under development.