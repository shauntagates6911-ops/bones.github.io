// BONES Auth — tiny, MIT-safe, original
function signup(){
  const u = user.value.trim(), p = pass.value.trim();
  if(!u || !p){msg.textContent="Missing fields";return;}
  if(localStorage.getItem("bones_"+u)){msg.textContent="User exists";return;}
  localStorage.setItem("bones_"+u, p);
  msg.textContent="Account created!";
}

function signin(){
  const u = user.value.trim(), p = pass.value.trim();
  const saved = localStorage.getItem("bones_"+u);
  if(!saved){msg.textContent="No such user";return;}
  if(saved !== p){msg.textContent="Wrong password";return;}
  msg.textContent="Signed in!";
  location.href="index.html"; // redirect to BONES editor/home
}
