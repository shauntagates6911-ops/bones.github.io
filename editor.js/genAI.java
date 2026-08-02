async function genAI(){
  const key = "bones_ai_"+u;
  let data = JSON.parse(localStorage.getItem(key));

  if(data.used >= 30){
    aiMsg.textContent = "Out of credits today!";
    return;
  }

  const prompt = aiPrompt.value.trim();
  if(!prompt){
    aiMsg.textContent = "Enter a prompt!";
    return;
  }

  aiMsg.textContent = "Generating...";

  // === FAKE AI RESPONSE (replace with real API later) ===
  const result = "Generated project: " + prompt;

  // Display result
  aiMsg.textContent = result;

  // Use credit
  data.used++;
  localStorage.setItem(key, JSON.stringify(data));
  aiCredits.textContent = "Credits left: " + (30 - data.used);
}
