export default class midguardrpgCharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 1100,
      height: 800,
      classes: ["midguardrpg", "sheet", "character"],
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "parameters",
        },
      ],
    });
  }
  get template() {
    return `systems/midguardrpg/templates/sheets/${this.actor.data.type}-sheet.hbs`;
  }

  getData() {
    const data = super.getData();
    data.config = CONFIG.midguardrpg;
    return data;
  }
}
