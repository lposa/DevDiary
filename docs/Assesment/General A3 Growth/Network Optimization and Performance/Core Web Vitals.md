# Core Web Vitals

## LCP - Largest Contentful Paint 

- Determines how quickly the largest and the most important content on the site loads. Reports the render time of the largest image or text block visilbe withing the viewport relative to when the page first started loading.
- Sites should strive to have the LCP of 2.5s or less.

## FID - First Input Delay

- Determines how quickly a user can start interacting with the site (click, scroll, etc...)
- Measures the time from when a user first interacts with a page, to the time when the browser is actually able to begin processing event handlers in response to that interaction.
- Sites should strive to have a FID of 100 ms or less.

## CLS - Cumulative Layout Shift 

- Determines how much the layout is shifted and if it's stable or not. 
- A layout shift occurs any time a visible element changes its position from one rendered frame to the next. CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.
- Sites should strive to have a CLS score of 0.1 or less.

- Imagine you're reading an article online. The text starts at the top of the page, just below the header. You start reading the first sentence of the article - then suddenly, a banner ad loads above the header and pushes the entire content of the article down. As a result, you lose your place in the text.

