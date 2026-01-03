export const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; // Avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      console.log("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
    document.body.removeChild(textArea);
  }
};
