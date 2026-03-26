import"./style-g6bqpMGj.js";import{r as e,t}from"./utils-A5kby6nY.js";var n=`https://wdd330-backend.onrender.com/`;new class{constructor(e,t,n){this.id=e,this.dataSource=t,this.element=n}async init(){let e=await this.findProductById(this.id);this.render(e)}async findProductById(e){return(await(await fetch(`${n}product/${e}`)).json()).Result}render(e){this.element.innerHTML=`<h2>${e.Name}</h2>

      <img
      src="${e.Images.PrimaryLarge}"
      alt="${e.Name}"
      />

      <p>${e.DescriptionHtmlSimple}</p>`}}(t(`id`),new e,document.querySelector(`.product-detail`)).init();