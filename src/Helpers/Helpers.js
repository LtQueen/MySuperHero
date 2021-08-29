export let replacingSpace = str => str.replace(/\s+/g, '-').toLowerCase();
export let formatTitle = str => str.replace(/-/g, ' ').toLowerCase();