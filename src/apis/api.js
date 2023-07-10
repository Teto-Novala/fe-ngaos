export const IMG_PLACEHOLDER = (size) => `https://dummyimage.com/${size}`;

export const LOGIN_URL = "https://ngaos-be.up.railway.app/api/ngaos/login";

export const WHO_AM_AI_URL = "https://ngaos-be.up.railway.app/api/ngaos/whoami";

export const PRODUCT_URL = (action, id = "") => {
    if (action.toLowerCase() === "add" || action.toLowerCase() === "getall") {
        return "https://ngaos-be.up.railway.app/api/ngaos/product";
    }

    if (
        action.toLowerCase() === "update" ||
        action.toLowerCase() === "getbyid" ||
        action.toLowerCase() === "delete"
    ) {
        return `https://ngaos-be.up.railway.app/api/ngaos/product/${id}`;
    }

    return "https://ngaos-be.up.railway.app/api/ngaos/product";
};
