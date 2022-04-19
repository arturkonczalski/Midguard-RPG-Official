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

let myLabels = document.querySelectorAll(".lbl-toggle");

Array.from(myLabels).forEach((label) => {
  label.addEventListener("keydown", (e) => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    }
  });
});
