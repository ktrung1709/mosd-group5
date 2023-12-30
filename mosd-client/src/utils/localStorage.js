export function setItemWithExpiration(key, value, expirationMinutes) {
    const now = new Date();
    const item = {
        value: value,
        expiration: now.getTime() + expirationMinutes * 60 * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

export function getItemWithExpiration(key) {
    const item = JSON.parse(localStorage.getItem(key));
    if (!item) {
        return null;
    }
    const now = new Date();
    if (now.getTime() > item.expiration) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

