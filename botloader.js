(function() {
  const botContainer = document.createElement('div');
  botContainer.innerHTML = `
    <div style="position:fixed; bottom:20px; right:20px; z-index:9999;">
      <div id="chatbot-bubble" onclick="toggleChat()" 
           style="background-color:#ff4081; color:white; width:60px; height:60px; 
           border-radius:50%; display:flex; align-items:center; justify-content:center; 
           font-size:28px; cursor:pointer; box-shadow:0 4px 10px rgba(0,0,0,0.2);">
        💬
      </div>
      <div id="chatbot-text" 
           style="background-color:white; color:#333; font-weight:bold; padding:5px 10px; 
           border-radius:8px; position:absolute; bottom:70px; right:0; box-shadow:0px 2px 6px rgba(0,0,0,0.1);">
        Click here to ask your doubts
      </div>
      <iframe id="chatbot-frame" 
              src="https://anoopmathew2112.github.io/BougainvilleaHouse/" 
              style="position:fixed; bottom:90px; right:20px; width:380px; height:500px; 
              border:none; border-radius:12px; box-shadow:0px 4px 12px rgba(0,0,0,0.3); 
              display:none; z-index:9999;">
      </iframe>
    </div>
  `;
  document.body.appendChild(botContainer);

  window.toggleChat = function() {
    const frame = document.getElementById('chatbot-frame');
    frame.style.display = frame.style.display === 'none' ? 'block' : 'none';
  };
})();
