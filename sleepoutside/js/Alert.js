export default class Alert {
    constructor(url) {
        this.url = url;
    }

    async getAlerts() {
        try {
            const res = await fetch(this.url);
            return await res.json();
        } catch (error) {
            console.error("Error loading alerts:", error);
            return [];
        }
    }

    async init() {
        const alerts = await this.getAlerts();

        // stop if no alerts
        if (!alerts || alerts.length === 0) return;

        const section = document.createElement("section");
        section.classList.add("alert-list");

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
        if (main) {
            main.prepend(section);
        }
    }
}