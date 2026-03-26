import"./style-g6bqpMGj.js";import{n as e,r as t,t as n}from"./utils-A5kby6nY.js";var r=class{constructor(e,t,n){this.category=e,this.dataSource=t,this.element=n}async init(){let e=await this.dataSource.getData(this.category);this.render(e)}render(e){this.element.innerHTML=e.map(e=>`<li>

          <a href="../product_details/index.html?id=${e.Id}">

            <h3>${e.Name}</h3>

            <img
              src="${e.Images.PrimaryMedium}"
              alt="${e.Name}"
            />

          </a>

        </li>`).join(``)}};e();var i=n(`category`),a=document.querySelector(`.title`);a.textContent=`Top Products: `+i,new r(i,new t,document.querySelector(`.product-list`)).init();