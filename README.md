# angular-sliding-tags
[![Build Status](https://travis-ci.org/qqnc/angular-sliding-tags.svg?branch=master)]

Source from: [sliding tags](https://codepen.io/Thibaut/pen/eCIkr) (Thanks to [Thibaut](https://codepen.io/Thibaut/)).  Learn its style and implement it with a input in angular way

![](https://s3-us-west-1.amazonaws.com/nate-public/sliding-tags-screenshot.jpg)

## Installation

You can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angular-sliding-tags
```

Then add a `<script>` and `<link>` to your `index.html`:

```html
<link rel="stylesheet" href="/node_modules/angular-sliding-tags/dist/css/sliding-tags.css">
<script src="/node_modules/angular-sliding-tags/dist/js/sliding-tags-input.js"></script>
```

### bower

```shell
bower install angular-sliding-tags
```

Then add a `<script>` and `<link>` to your `index.html`:

```html
<link rel="stylesheet" href="/bower_components/angular-sliding-tags/dist/css/sliding-tags.css">
<script src="/bower_components/angular-sliding-tags/dist/js/sliding-tags-input.js"></script>
```

## Usage

Declare your model with attributes `name` and `count` in your controller.  For example:

```javascript
$scope.tags = [  
    {name: 'example', count: 0}  
]  
```

Then add a `<sliding-tags-input ng-model='tags'></sliding-tags-input>` to your `<body>` with `nd-model`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History


## Credits


## License
