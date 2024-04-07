# CTA Refactor

- Link to confluence page: https://rituals.atlassian.net/wiki/spaces/RV3D/pages/4162453824/CTA+Buttons+Refactor
- Link to ticket: https://rituals.atlassian.net/browse/DL-37956


## Implementation process:

1. `ProductCard` - changed if ProductCard is being called in `ProductSlider` or `ProductGrid`, then we pass `isIconButton` to the `isIconButton` prop to the `CTAButton`.
2. 