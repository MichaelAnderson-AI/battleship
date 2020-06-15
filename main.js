(function (w, d) {
  // Global State
  const state = {
    playerName: localStorage.getItem('playerName') || '',
  };

  // Strings
  const strings = {};

  d.addEventListener('DOMContentLoaded', () => {
    // UI References
    const tabTriggers = d.querySelectorAll('.tab-trigger');
    const secondaryButtons = d.querySelectorAll('.secondary-btn');

    // Init function
    (function init() {
      // Register UI Event Listeners
      tabTriggers.forEach((tabTrigger) => {
        tabTrigger.addEventListener('click', (e) => {
          const allTabs = d.querySelectorAll('.tab');
          allTabs.forEach((tab) => tab.classList.add('hidden'));
          d.querySelector(`#${e.target.dataset.targets}`).classList.remove(
            'hidden',
          );
        });
      });

      secondaryButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          const elementId = e.target.closest('button').id;

          switch (elementId) {
            case 'refresh-games-btn':
              e.preventDefault();
              console.log('Refresh Games-List Btn Pressed!');
              break;
            case 'toggle-music-btn':
              console.log('Toggle Music Btn Pressed!');
              break;
            case 'toggle-sound-btn':
              console.log('Toggle Sound Btn Pressed!');
              break;
            case 'toggle-fullscreen-btn':
              toggleFullScreen(d.body);
              break;
            case 'show-credits-btn':
              console.log('Show Credits Btn Pressed!');
              break;
            case 'show-rules-btn':
              console.log('Show Rules Btn Pressed!');
              break;
          }
        });
      });
    })();
  });

  // Toggle Fullscreen
  function toggleFullScreen(elem) {
    if (
      (d.fullScreenElement !== undefined && d.fullScreenElement === null) ||
      (d.msFullscreenElement !== undefined && d.msFullscreenElement === null) ||
      (d.mozFullScreen !== undefined && !d.mozFullScreen) ||
      (d.webkitIsFullScreen !== undefined && !d.webkitIsFullScreen)
    ) {
      if (elem.requestFullScreen) {
        elem.requestFullScreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (d.cancelFullScreen) {
        d.cancelFullScreen();
      } else if (d.mozCancelFullScreen) {
        d.mozCancelFullScreen();
      } else if (d.webkitCancelFullScreen) {
        d.webkitCancelFullScreen();
      } else if (d.msExitFullscreen) {
        d.msExitFullscreen();
      }
    }
  }
})(window, window.document);
