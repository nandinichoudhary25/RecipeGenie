window.watsonAssistantChatOptions = {
  integrationID: "c460322b-d5ce-4898-8319-f4ece75cdefa", // The ID of this integration.
  region: "au-syd", // The region your integration is hosted in.
  serviceInstanceID: "c7916a36-26aa-4af5-8bb0-47ea86ad31df", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});