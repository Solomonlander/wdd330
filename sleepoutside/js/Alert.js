export default class Alert {
    constructor(url) {
        this.url = url;
    }

    async getAlerts() {
        const res = await fetch(this.url);
        return await res.json();
    }

    async init() {
        const alerts = await this.getAlerts();

        const section = document.createElement("section");

        alerts.forEach(alert => {
            const p = document.createElement("p");
            p.textContent = alert.message;
            p.style.background = alert.background;
            p.style.color = alert.color;
            section.appendChild(p);
        });

        document.querySelector("main").prepend(section);
    }
}