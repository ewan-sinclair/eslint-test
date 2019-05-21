# eslint-test

```
## Setup ##
npm install`
Create a *.js file in `src/` and fill it with some code
npx eslint src/myfile.js
```

This will produce output telling you which parts have violated which rules. You can always just google `eslint whatever-rule-name-it-puked-on` for more context on any violations.
Rules can be disabled in `.eslintrc.yml`. This config is airbnb-standard, with a few rules turned off.

You'll see `lint-good.js` and `lint-bad.js` in `src/`. These are the same file before and after changes are made to please the linter.
The bad one is ignored in .eslintignore, but you can run the linter against it thus:
```
npx eslint --no-ignore src/lint-bad.js
```
