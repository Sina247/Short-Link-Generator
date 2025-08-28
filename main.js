const shortenBtn = document.getElementById("shortenBtn");
const originalLink = document.getElementById("originalLink");
const result = document.getElementById("result");

function generateShortCode() {
  return Math.random().toString(36).substring(2, 8);
}

shortenBtn.addEventListener("click", () => {
  const link = originalLink.value.trim();

  if (!link) {
    result.textContent = "Please enter a valid URL!";
    return;
  }

  const shortCode = generateShortCode();
  const shortLink = `${window.location.origin}/s/${shortCode}`;
  result.innerHTML = `Your short link: <a href="${link}" target="_blank" class="underline text-blue-400">${shortLink}</a>`;
});