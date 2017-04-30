
### Standardjs setup
* This is used to have same coding styles everywhere. This does not allow to use semicolon

1. run `npm install standard --save-dev` in terminal

2. run `standard`

3. Run `standard --fix` to auto-correct issues found by standard

4. `Standard` does not like any global variable. So, if want to use then specify it at the top of file.
    `/* global (your global variable name) */` ex: `/* global React ReactDOM */`


### EditorConfig 
* http://editorconfig.org/

* This is used so that everyones editor is configured to same style guidelines
 
Follow below procedure to install editorConfig plugin in sublime

1. Press `cmd+shift+p` in sublime-text

2. search for `install package` and click

3. search for `editorConfig` and click to install
