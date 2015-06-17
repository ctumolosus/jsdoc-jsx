A JSDoc plugin that automatically parses JSX source files with esprima before it is processed by JSDoc.

## Installation

The `jsdoc-jsx` plugin can be installed using NPM.

```bash
npm install jsdoc-jsx --save-dev
```

## Usage

To use plugin you should include the plugin module in the `plugins` array of [JSDoc's configuration file](http://usejsdoc.org/about-configuring-jsdoc.html).

```json
{
    "plugins": ["jsdoc-jsx"]
}
```

### Processing files with different extensions

By default, the plugin only processes files that have a `.jsx` extension. You could enable JSX processing for other file extensions by adding the following settings to your JSDoc configuration file:

```json
{
    "plugins": ["jsdoc-jsx"],
    "jsx": {
        "extensions": ["js", "jsx"]
    }
}
```
