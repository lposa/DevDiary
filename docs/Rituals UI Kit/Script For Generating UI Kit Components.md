```typescript jsx
const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please specify the component name");
  process.exit(1);
}

const targetDirectory = path.join(
  __dirname,
  "packages",
  "rituals-ui",
  "src",
  "modules",
  componentName,
);

const styleFilePath = path.join(
  targetDirectory,
  `${componentName}.module.scss`,
);
const componentFilePath = path.join(targetDirectory, `${componentName}.tsx`);

fs.mkdirSync(targetDirectory, { recursive: true });

fs.writeFileSync(styleFilePath, `// Styles for ${componentName}\n`);

// Create the TSX file
const componentContent = `import React from 'react';
import styles from './${componentName}.module.scss';

const ${componentName} = () => {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
      {/* Component logic goes here */}
    </div>
  );
};

export default ${componentName};
`;

fs.writeFileSync(componentFilePath, componentContent);

console.log(`Component ${componentName} created successfully.`);

```
