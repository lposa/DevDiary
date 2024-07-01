# How to get latest changes from UI Kit onto NextJS?

- There are 2 ways. One is described in this picture, although, this is only for you locally, and we shouldn't push this with our PR since our build will fail.
  https://arc.net/e/75FA6A10-2ED3-43B9-A5A3-DDB8B17E2D47

- The other way, is the valid way if you want these changes available globally for everyone. 
1. Go to UI Kit Repo, packages/rituals-ui and into ``package.json`` and find version at the top of the file. 
2. Copy this version, and now go to ``package.json`` in the NextJS Repo.
3. Find this line  ``"@rituals-packages/rituals-ui": "6.43.0",`` and update the version with your copied one.
4. Run ``npm run npm:install`` this will generate a new ``package.json`` and ``package.lock.json``
5. Push these with your PR. 
6. People can now pull the latest changes, and run the same npm command to retrieve the latest updates from UI Kit.
