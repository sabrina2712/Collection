# SASS 101

## File extension

We need to use the extension `.scss` to make sure the files get compiled by node-sass. The extension will indicate that the file is using sass and specifically the scss syntax.
Node-sass will look for such files in the speicifies input directory and compile them to css.

## Variables

```
$name-of-variable: <value>
````

Variable names start with a `$`.
Add the value, like you would do with a regular css rule:

```scss
$brand-color: #c0ffee;
```

Use variables to reuse values accross your site.
For example, colors and font sizing are good candidates.
Try to use reusable names, for example when naming colors, you can try to use their use as name rather than the color itself.
Instead of 

```scss
// don't do this
$red: red;
$green: green;
$blue: blue;
``` 

use

```scss
// much better!
$danger: red;
$success: green;
$info: blue;
```

Of course, some colors can remain named by their colors

```
$white: #fff;
```

What is the benefit? That if at a later pointw e decide we want a bit offwhite (for example #f4f4f4), we can change one variable in one place in our codebase and the change will take effect everywhere we have used this variable.

## Mixins

Mixins let us reuse code.
To define a mixin we use `@mixin` followed by the name of the mixin:

```scss
@mixin reset-list {
    margin: 0;
    padding: 0;
}
```

Then we can use this mixin by using `@include` followed by the name of the mixin, for example:

```scss
ul {
    @include reset-list;
}
```

which wil result in the following css:

```css
ul {
    margin: 0;
    padding: 0;
}
```

Mixins can also accept parameters:

```scss
@mixin font-size($size) {
    font-size: $size;
}
```

then you can use it:

```scss
h1 {
    @include font-size(61px);
}
```

which will result in the following css:

```css
h1 {
    font-size: 61px;
}
```

## Partials

To create a partial we need to prepend a `_` in front of the file name, for example: `_buttons.scss`.
This file is not considered a stand alone file, instead it needs to be included in another file.
We do this by using `@import` inside our main file, `index.scss` in this case:

```scss
@import "buttons";

body {
    // some styles here
}
```

After we import the file its contents will be added to the top of the compiled file.

Partials are useful so we keep out files small and focused on one task.
For example, we can have a file where we save all our keyframes animations, or a file that saves all headlines, or a file that saves all buttons types with their hover, focus and disabled styles.