export class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this.items.forEach((item) => {
      const element = this.renderer(item);
      this.addItem(element);
    });
  }
  addItem(element) {
    this.containerSelector.append(element);
  }
}
