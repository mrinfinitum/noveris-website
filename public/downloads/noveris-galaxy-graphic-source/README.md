# NOVERIS Galaxy Graphic Source

This bundle contains the complete standalone React/CSS implementation of the NOVERIS galaxy graphic and the exact rendered background artwork used by the marketing site.

## Files

- `NoverisGalaxyGraphic.tsx` - interactive React component and destination data
- `noveris-galaxy-graphic.css` - image treatment, star fields, auroras, routes, labels, and responsive rules
- `noveris-galaxy-map.png` - exact 1915 x 821 rendered galaxy artwork

## Install

Copy all three source files into your React project, preserve the CSS import, and make sure the PNG resolves from the component's `imageSrc` property.

```tsx
import { NoverisGalaxyGraphic } from "./NoverisGalaxyGraphic";

export default function GalaxyScreen() {
  return <NoverisGalaxyGraphic imageSrc="/media/noveris-galaxy-map.png" />;
}
```

No additional libraries are required. The bitmap supplies the detailed spiral galaxy. React and CSS supply the crop, edge mask, atlas grid, star layers, bloom, routes, nodes, labels, and interactive destinations.

For a production game, retain this visual treatment as an art layer and replace the percentage-based destination data with canonical coordinates projected from the game simulation.

