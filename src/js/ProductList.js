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

          srcset="
          ${product.Images.PrimarySmall} 400w,
          ${product.Images.PrimaryMedium} 800w,
          ${product.Images.PrimaryLarge} 1200w
          "

          sizes="
          (max-width:600px) 400px,
          (max-width:900px) 800px,
          1200px
          "

          alt="${product.Name}"
          >

        </a>

      </li>`

            ).join("");

    }
}