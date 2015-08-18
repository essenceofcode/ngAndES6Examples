# Angular and ES6 Example

This projects contains code samples for my blog post [Transform your ES5 Controller into ES6 Awesome : 6 Easy Steps]().  The code shows a gradual transition from a typical ES5 Angular controller to an ES6 class in six steps.  

Each modification to the controller and template is demarcated by a separate folder under the [app/controllers folder](app/controllers).  The two samples (5 and 6) have both the ES6 version (.es6) and the transpiled ES5 version(.js) for your convenience (using Babel).  Feel free to transpile them yourself.  

Ex:

```
babel example-controller.es6 --out-file example-controller.js
```

You can try out the application by loading index.html.

> Tip:  Make sure to switch the folder reference in the index.html and app.js to try out the different versions.
  