export async function sendMessage(message) {
  const response = await fetch("https://api.yogeshramadoss.cloud/chat/invoke", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: message
    })
  });

  if (!response.ok) {
    throw new Error("Backend error");
  }

  const data = await response.json();
  return data.output;
}
