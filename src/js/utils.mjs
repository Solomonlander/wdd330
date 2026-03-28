export function getParam(param) {

    const url =
        new URL(
            window.location
        );

    return url.searchParams.get(param);

}

export function loadHeaderFooter() {

    console.log("header footer");

}