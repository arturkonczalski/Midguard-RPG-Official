# Midguard RPG Official

Official FoundryVTT system for Midguard RPG

Version 1.1

- Bug fixes.
- Added Energy Protection fields in Character Sheet.

Version 1.0 contains

- Simple Character and NPC sheet that is making the game playable.
- Custom rolls not created yet. For double d20 and double d10 with Odin/Norn separation, please add following macros to your game:<br />
  D20s<br />
  <code>
  const roll = await new Roll("1d20[Odin] + 1d20[Norn]").evaluate();
  await roll.toMessage();
  const message = `<b style="color:#0068b1">K20 Odin: ${roll.dice[0].results[0].result}</b> <br /> <b style="color:#FF0000">K20 Norn: ${roll.dice[1].results[0].result}</b>`;
  ChatMessage.create({content: message});
  </code><br />
  D10s<br />
  <code>
  const roll = await new Roll("1d10[Odin] + 1d10[Norn]").evaluate();
  await roll.toMessage();
  const message = `<b style="color:#0068b1">K10 Odin: ${roll.dice[0].results[0].result}</b> <br /> <b style="color:#FF0000">K10 Norn: ${roll.dice[1].results[0].result}</b>`;
  ChatMessage.create({content: message});
  </code>

- Planned for future:

1. Compendium - creating a database with all necessary details, that would improve gaming experience
2. Automation - being able to add Implants, Atuts, Traits and Equipment from Compendium
3. Upgrading system - this would mean, upgrading NPC/Character sheets, items, etc.
