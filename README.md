# selectize-arrow-hide
Plugin for Selectize that allows to filter results just before rendered.
It can be usefult f.e. when you want to remove some options without asking the server for new options.

## Usage
### Basic
Use the **plugins** option to turn on the plugin: 

```js
$("#element").selectize({
  plugins: ["static-filter"]
});
```

### Options

```js
$("#element").selectize({
  plugins: {
    "static-filter": {
        include: function(value) {
          //return true / false to indicate wheter include 
          //item or not. Value parameter is value of option 
          return true;
        }
     }
  }
});
```

### Installation

Use bower to install plugin:

```bash
bower install selectize-static-filter
```
