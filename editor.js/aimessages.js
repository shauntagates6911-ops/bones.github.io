// === BONES AI CREDIT SYSTEM ===
const DAY = 86400000;
const u = localStorage.getItem("bones_current");

function initCredits(){
  const key = "bones_ai_"+u;
  const now = Date.now();
  let data = JSON.parse(localStorage.getItem(key) || "{}");

  if(!data.reset || now - data.reset > DAY){
    data = { reset: now, used: 0 };
    localStorage.setItem(key, JSON.stringify(data));
  }

  aiCredits.textContent = "Credits left: " + (30 - data.used);
}
initCredits();
