const state = JSON.parse(localStorage.getItem("smlEmpireDemo") || '{"balance":0,"lifetime":0,"referrals":0,"refEarn":0,"activity":[],"username":"","displayName":""}');

const money = n => "R" + Number(n).toFixed(2);
function save(){localStorage.setItem("smlEmpireDemo",JSON.stringify(state)); render();}
function render(){
  document.querySelectorAll("#balance,#walletBalance").forEach(e=>e.textContent=money(state.balance));
  document.getElementById("lifetime").textContent=money(state.lifetime);
  document.getElementById("refCount").textContent=state.referrals;
  document.getElementById("refCount2").textContent=state.referrals;
  document.getElementById("refEarn").textContent=money(state.refEarn);
  document.getElementById("level").textContent=state.lifetime>=100?"Builder":state.lifetime>=25?"Rising":"Starter";
  document.getElementById("username").value=state.username;
  document.getElementById("displayName").value=state.displayName;
  const activity=document.getElementById("activity");
  activity.innerHTML=state.activity.length?state.activity.slice().reverse().map(x=>`<div style="padding:10px 0;border-bottom:1px solid #263044"><strong>${x.name}</strong><span style="float:right">${money(x.amount)}</span><br><small style="color:#6f7c93">${x.date}</small></div>`).join(""):"No activity yet.";
}
function show(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
  document.querySelectorAll(".nav").forEach(n=>n.classList.toggle("active",n.dataset.page===page));
  document.getElementById("sidebar").classList.remove("open");
}
document.querySelectorAll(".nav").forEach(n=>n.onclick=()=>show(n.dataset.page));
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));
document.getElementById("menuBtn").onclick=()=>document.getElementById("sidebar").classList.toggle("open");

document.querySelectorAll(".earn-btn").forEach(btn=>btn.onclick=()=>{
  const amount=Number(btn.dataset.amount), name=btn.dataset.name;
  state.balance+=amount; state.lifetime+=amount;
  state.activity.push({name,amount,date:new Date().toLocaleString()});
  btn.textContent="Completed ✓"; btn.disabled=true;
  save();
});
document.getElementById("copyRef").onclick=async()=>{
  await navigator.clipboard?.writeText(document.getElementById("refCode").value);
  document.getElementById("copyRef").textContent="Copied ✓";
  setTimeout(()=>document.getElementById("copyRef").textContent="Copy",1200);
};
document.getElementById("withdraw").onclick=()=>alert("Withdrawals are disabled in this prototype. A production version needs verified identity, server-side wallet accounting, fraud controls and a compliant payment processor.");
document.getElementById("saveProfile").onclick=()=>{
  const u=document.getElementById("username").value.trim(), d=document.getElementById("displayName").value.trim();
  if(!/^[A-Za-z0-9_]{3,30}$/.test(u)){alert("Username must be 3–30 characters using letters, numbers or underscores only.");return}
  state.username=u; state.displayName=d; save();
  document.getElementById("saveMsg").textContent="Profile saved.";
};
render();
