# React Virtual DOM

- React works with a Virtual DOM. It creates and compares the Virtual DOM Snapshots to find out which parts of the rendered UI need to be updated.

1. React creates Component Tree
2. Creates a Virtual Snapshot of the Target HTML Code
3. Then React compares that new snapshot to the old snapshot
4. If the app just started, there is no old snapshot, so React just updates the real DOM
5. When comparing old snapshot to the new snapshot, and sees that something changed, React goes ahead and updates the Real DOM with the new changes.
