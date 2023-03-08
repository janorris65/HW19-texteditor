const butInstall = document.getElementById('buttonInstall');
console.log("butinstall",butInstall)
// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
 });

butInstall.addEventListener('click', async () => {  
    const promptEvent = window.deferredPrompt;
    console.log("hello")
    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);});

window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});
