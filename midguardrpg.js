import { midguardrpg } from "./module/config.js";
import midguardrpgItemSheet from "./module/sheets/midguardrpgItemSheet.js";
import midguardrpgCharacterSheet from "./module/sheets/midguardrpgCharacterSheet.js";

/* Handlebars Custom */
Handlebars.registerHelper("timesFivePlusTen", function (value1) {
  let sum = value1 * 5 + 10;
  return sum;
});
Handlebars.registerHelper("timesFive", function (value1) {
  let sum = value1 * 5;
  return sum;
});
Handlebars.registerHelper("sum", function () {
  let sum = 0;
  for (let argument in arguments) {
    if (Number.isInteger(arguments[argument])) sum = sum + arguments[argument];
  }
  return sum;
});

/* Hooks */
Hooks.once("init", function () {
  console.log("midguardrpg | Inicjalizacja Midguard RPG");

  CONFIG.midguardrpg = midguardrpg;
  CONFIG.defaultFontFamily = "MyriadPro";

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("midguardrpg", midguardrpgItemSheet, {
    makeDefault: true,
  });

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("midguardrpg", midguardrpgCharacterSheet, {
    makeDefault: true,
  });
});
