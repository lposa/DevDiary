# Cross-browser compatible HTML/CSS markup

- Sometimes browsers don't support certain markups. We can use autoprefixer plugin to automatically add prefixes to those styling.

Link to autoprefixer: https://autoprefixer.github.io/

- Sometimes we can also use the @support rule. If browser supports a specific feature, then apply something.

```css

@supports not(backdrop-filter: blur()){
    h1 {
        background-color: hsl(0, 0%,100%,.8);
    }
}
```
Playwright is a useful library for testing across all browsers.


## Mobile Optimization

### Mobile First Approach

### Progressive Enchantment

### Graceful Degradation



## Extra content:

https://www.youtube.com/watch?v=adEwlFHLWd4&ab_channel=CodinginPublic
https://www.youtube.com/watch?v=9tEixRJ3GeI&ab_channel=KevinPowell