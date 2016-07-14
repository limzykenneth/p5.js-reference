##Project is now maintained on [p5.js-website](https://github.com/processing/p5.js-website/tree/master/offline-reference) repository, please contribute there.

p5.js-reference
========

This repository holds the offline reference for p5.js, which will eventually be packaged with p5.js complete download on the official website.

This is still a work in progress so stay tuned.

In the mean time, most functionality is already implemented. To use the offline reference, clone this repo and open `index.html` in the `dist` folder directly. There is no need to run a server for this.

Feel free to open an [issue](https://github.com/limzykenneth/p5.js-reference/issues) or a [pull request](https://github.com/limzykenneth/p5.js-reference/pulls) (Please development steps below).

##Development

To setup for development you will need to have [nodejs](https://nodejs.org) and npm installed.

Install global dependencies

```
npm install -g gulp-cli
```

Run the build step

```
gulp
```

Most changes should occur in the `dist/offline-docs` folder. `dist/reference` is directly generated from the build step in the [p5.js repo](https://github.com/processing/p5.js) so changes will be overwritten.