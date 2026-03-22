const baseURL =
    import.meta.env.VITE_SERVER_URL;


export default class ProductDetails {

    constructor(
        id,
        dataSource,
        element
    ) {

        this.id = id;
        this.dataSource = dataSource;
        this.element = element;

    }


    async init() {

        const product =
            await this.findProductById(
                this.id
            );

        this.render(product);

    }


    async findProductById(id) {

        const response =
            await fetch(
                `${baseURL}product/${id}`
            );

        const data =
            await response.json();

        return data.Result;

    }


    render(product) {

        this.element.innerHTML =

            `<h2>${product.Name}</h2>

      <img
      src="${product.Images.PrimaryLarge}"
      alt="${product.Name}"
      />

      <p>${product.DescriptionHtmlSimple}</p>`;

    }

}