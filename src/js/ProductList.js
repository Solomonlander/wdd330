export default class ProductList {

    constructor(category, dataSource, element) {
        this.category = category;
        this.dataSource = dataSource;
        this.element = element;
    }

    async init() {

        const list =
            await this.dataSource.getData(
                this.category
            );

        this.render(list);
    }

    render(list) {

        this.element.innerHTML =
            list.map(product =>

                `<li>

        <a href="/src/product_details/index.html?id=${product.Id}">

          <h3>${product.Name}</h3>

          <img
          src="${product.Images.PrimaryMedium}"
          alt="${product.Name}"
          />

        </a>

      </li>`

            ).join("");

    }
}