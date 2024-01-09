# CSS Methodologies

## BEM

Link: https://getbem.com/

Block Element Modifier

BEM is a methodology that helps you to create reusable components and code sharing in front‑end development

The reason I choose BEM over other methodologies comes down to this: it is less confusing than the other methods (i.e. SMACSS) but still provides us the good architecture we want (i.e. OOCSS) and with a recognizable terminology. - Mark McDonnell, Maintainable CSS with BEM

```html 
<div class="card card--light">
    <img class="card__image" src="some/image" alt="img"/>
    <h2 class="card__title">Title</h2>
    <p class="card__body">Paragraph</p>
</div>

<div class="card card--dark">
    <img class="card__image" src="some/image" alt="img"/>
    <h2 class="card__title">Title</h2>
    <p class="card__body">Paragraph</p>
</div>
```

1. -- means a modifier to a block
2. __ means a block element

The block class gives shared styles to elements. This way we don't repeat ourselves and we also change styles only 1 place. Imagine having 5 different block classes that are essentially the same, and we want to change padding on them, we would have to go through all of them.

## OOCSS 

Separating container and content with CSS “objects”



## SMACSS 

Style-guide to write your CSS with five categories for CSS rules
1. Base - basic default values for our pages (margins, colors, etc...)
2. Layout - divide the page into sections, hold one or more modules together
3. Module - reusable parts that are repeated in some form on the page. Widgets, menus and form styling. Avoid using IDs, stick to classes.
4. State - augments and overrides all other styles. Example: a message may be in a success or error state.
5. Theme - all the other additional decorative visual elements that make your wep page unique. Main colors, shapes, borders, shadows, branding.

## SUITCSS

Structured class names and meaningful hyphens

## Atomic

Breaking down styles into atomic, or indivisible, pieces


Extra content: <br/>
BEM: https://www.youtube.com/watch?v=SLjHSVwXYq4&ab_channel=KevinPowell <br/>
SMACSS: https://www.youtube.com/watch?v=DHph0kuNf-s&ab_channel=HiCoders