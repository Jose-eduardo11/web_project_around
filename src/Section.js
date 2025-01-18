export class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.containerSelector = document.querySelector(containerSelector);
  }
  addItem(element) {
    this.containerSelector.append(element);
  }
  prependItem(element) {
    this.containerSelector.prepend(element);
  }
  renderItems() {
    this.items.forEach((item) => {
      const element = this.renderer(item);
      this.addItem(element);
    });
  }
}
