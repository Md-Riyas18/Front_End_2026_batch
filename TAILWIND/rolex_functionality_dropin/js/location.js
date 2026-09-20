(function () {
  const stores = [
    {name:"C T Pundole & Sons",city:"Pune",address:"67 M.G. Road",country:"India",status:"Currently closed",hours:"10:00am - 9:00pm",phone:"+91 7350003250",lat:18.5204,lng:73.8567},
    {name:"Cooke & Kelvey",city:"New Delhi",address:"3 Scindia House, Janpath",country:"India",status:"Currently closed",hours:"10:00am - 7:00pm",phone:"+91 8882737391",lat:28.6139,lng:77.2090},
    {name:"Dia Precious Jewellery",city:"Mumbai",address:"Apollo Bunder, The Heritage Wing, The Taj Mahal Palace & Tower Hotel",country:"India",status:"Currently closed",hours:"11:00am - 7:00pm",phone:"+91 9004925432",lat:18.9220,lng:72.8347}
  ];
  function render(list) {
    const host=document.getElementById("store-list"); host.innerHTML="";
    list.forEach((s,i)=>{
      const el=document.createElement("article");
      el.className="px-5 py-6 border-b border-[#e5e5e5]";
      el.innerHTML=`<span class="inline-block text-[10px] text-[#087f4c] bg-[#edf7f2] px-2 py-1 mb-3">Rolex Retailer</span><h2 class="text-[18px] font-bold uppercase leading-tight">${s.name}<br>${s.city}</h2><p class="text-[13px] text-[#666] mt-3 leading-[1.35]">${s.address}<br>${s.city}<br>${s.country}</p><p class="text-[12px] mt-3"><strong>${s.status}</strong> ${s.hours}</p><div class="flex gap-2 mt-4"><a href="tel:${s.phone.replace(/\s/g,'')}" class="flex-1 rounded-full bg-[#f2f2f2] px-3 py-3 text-[11px] text-center">${s.phone}</a><button class="flex-1 rounded-full bg-[#f2f2f2] text-[11px] directions" data-i="${i}">Directions</button><button class="flex-1 rounded-full bg-[#f2f2f2] text-[11px] details" data-i="${i}">Details</button></div>`;
      el.querySelector(".directions").onclick=()=>{ document.getElementById("map-search").value=`${s.city}, India`; highlight(s); };
      el.querySelector(".details").onclick=()=>alert(`${s.name}\n${s.address}\n${s.city}, ${s.country}\n${s.phone}`);
      host.appendChild(el);
    });
    markers(list);
  }
  function markers(list) {
    const map=document.getElementById("map-area");
    map.querySelectorAll(".store-marker").forEach(x=>x.remove());
    const positions=[[35,49],[53,44],[62,57]];
    list.forEach((s,i)=>{
      const m=document.createElement("button"); m.className="store-marker absolute w-8 h-8 rounded-full bg-white border-2 border-[#087f4c] text-[#087f4c] shadow-lg flex items-center justify-center font-bold"; m.style.left=positions[i%positions.length][0]+"%";m.style.top=positions[i%positions.length][1]+"%";m.textContent="♛";m.title=s.name;m.onclick=()=>highlight(s);map.appendChild(m);
    });
  }
  function highlight(s){ window.ROLEX_TOAST?.("Store selected", `${s.name}, ${s.city}`); }
  document.addEventListener("DOMContentLoaded",()=>{
    const input=document.getElementById("map-search"); if(!input)return;
    render(stores);
    input.addEventListener("input",()=>{
      const q=input.value.toLowerCase().trim();
      render(stores.filter(s=>`${s.name} ${s.city} ${s.address}`.toLowerCase().includes(q)));
    });
  });
})();
