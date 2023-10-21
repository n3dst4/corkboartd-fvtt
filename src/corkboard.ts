export const foo = 1;

Hooks.on("ready", () => {
  ui.notifications?.info("Hello world!");
});
