export default class midguardrpgItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 500,
      height: 450,
      classes: ["midguardrpg", "sheet", "item"],
    });
  }
  get template() {
    return `systems/midguardrpg/templates/sheets/${this.item.data.type}-sheet.html`;
  }
  getData() {
    const data = super.getData();

    data.config = CONFIG.midguardrpg;

    return data;
  }
}
