### Test

## Design decision
* No routing
Did not seem like it was necessary for this test. Made a setContentPage for showing series view.

* Handle backend loading/error
Just to show different states of a service request.

* Webpack
Most of it copied from a previous setup I have done.

* Karma/jasmine
I chose it because that is what I have worked with most.

* Other
I set up a structure that could be scalable. A bit too many files for this small test perhaps...
Did not go through unnecessary  

## Included
* react
* redux
* eslint
* hot-reload in dev

## How to use
```git clone``` this project into a local directory

```
cd <cloned folder>
npm install
```

### Available commands:
```
npm install (install deps and build)
npm run build (build for production)
npm run lint (lint code)
npm start (start dev server)
npm test (run unit tests continuously)
npm run test:ci (runs unit tests once - for Jenkins)
```
