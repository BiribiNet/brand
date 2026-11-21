const status = document.querySelector("#copy-status");
let statusTimer;

document.querySelectorAll("[data-copy], [data-copy-from]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy ??
      document.getElementById(button.dataset.copyFrom).textContent.trim();

    clearTimeout(statusTimer);
    try {
      await navigator.clipboard.writeText(value);
      status.textContent = `Copied ${button.dataset.copy && value.startsWith("#") ? value : "to clipboard"}.`;
    } catch {
      status.textContent = "Clipboard unavailable. Select the value to copy it manually.";
    }
    statusTimer = setTimeout(() => { status.textContent = ""; }, 3500);
  });
});
