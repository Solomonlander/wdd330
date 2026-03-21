export default class Alert {
    constructor(url) {
        this.url = url;
    }

    async getAlerts() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }

    async init() {
        const alerts = await this.getAlerts();

        if (alerts.length > 0) {
            const section = document.createElement("section");

            alerts.forEach(alert => {
                const p = document.createElement("p");
                p.textContent = alert.message;
                p.style.backgroundColor = alert.background;
                p.style.color = alert.color;
                p.style.padding = "10px";
                p.style.margin = "0";

                section.appendChild(p);
            });

            const main = document.querySelector("main");
            main.prepend(section);
        }
    }
}