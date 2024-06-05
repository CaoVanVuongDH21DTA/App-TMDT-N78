function toggleAnswer(panelId) {
    const panel = document.getElementById(panelId);
    const button = document.querySelector(`button[aria-controls="${panelId}"]`);
    const isHidden = panel.hasAttribute('hidden');
    const icon = document.querySelector(`button[aria-controls="${panelId}"] .minus-svgrepo-com.svg`);
    if (isHidden) {
        panel.removeAttribute('hidden');
        button.setAttribute('aria-expanded', 'true');
    } else {
        panel.setAttribute('hidden', '');
        button.setAttribute('aria-expanded', 'false');
        document.getElementById("icon-path").setAttribute("d", "M6.91667 1.41667C6.91667 0.910406 6.50626 0.5 6 0.5C5.49374 0.5 5.08333 0.910406 5.08333 1.41667V5.08333H1.41667C0.910406 5.08333 0.5 5.49374 0.5 6C0.5 6.50626 0.910406 6.91667 1.41667 6.91667H5.08333V10.5833C5.08333 11.0896 5.49374 11.5 6 11.5C6.50626 11.5 6.91667 11.0896 6.91667 10.5833V6.91667H10.5833C11.0896 6.91667 11.5 6.50626 11.5 6C11.5 5.49374 11.0896 5.08333 10.5833 5.08333H6.91667V1.41667Z");
    }
}