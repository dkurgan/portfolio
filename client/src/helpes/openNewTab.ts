export const openNewTab = (link: string): void =>{
    const win = window.open(link, "_blank");
    if (win) win.focus();
}