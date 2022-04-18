export const midguardrpg = {};

midguardrpg.weaponTypes = {
  none: "",
  light: "MIDGUARD.WeaponTypesLight",
  onehanded: "MIDGUARD.WeaponTypesOnehanded",
  throw: "MIDGUARD.WeaponTypesThrow",
  twohanded: "MIDGUARD.WeaponTypesTwohanded",
  lightthrow: "MIDGUARD.WeaponTypesLightThrow",
  onehandedthrow: "MIDGUARD.WeaponTypesOnehandedThrow",
};

async function loadHandleBarTemplates() {
  // register templates parts
  const templatePaths = [
    "systems/midguardrpg/templates/sheets/character/character-combat.hbs",
    "systems/midguardrpg/templates/sheets/character/character-parameters.hbs",
    "systems/midguardrpg/templates/sheets/character/character-atutImplTrait.hbs",
    "systems/midguardrpg/templates/sheets/character/character-entropic.hbs",
    "systems/midguardrpg/templates/sheets/character/character-equipment.hbs",
    "systems/midguardrpg/templates/sheets/character/character-notes.hbs",
    "systems/midguardrpg/templates/sheets/character/character-navigation.hbs",
    "systems/midguardrpg/templates/sheets/character/character-header.hbs",
    "systems/midguardrpg/templates/sheets/npc/npc-combat.hbs",
    "systems/midguardrpg/templates/sheets/npc/npc-parameters.hbs",
    "systems/midguardrpg/templates/sheets/npc/npc-atutImplTrait.hbs",
    "systems/midguardrpg/templates/sheets/npc/npc-entropic.hbs",
    "systems/midguardrpg/templates/sheets/npc/npc-equipment.hbs",
    "systems/midguardrpg/templates/sheets/npc/npc-notes.hbs",
    "systems/midguardrpg/templates/sheets/npc/npc-navigation.hbs",
    "systems/midguardrpg/templates/sheets/npc/npc-header.hbs",
  ];
  return loadTemplates(templatePaths);
}

Hooks.once("init", function () {
  loadHandleBarTemplates();
});
