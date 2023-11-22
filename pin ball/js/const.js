var GAME_PLAYER = chrome.runtime.getURL("game-pinball.html");

function open_popup_game() {
    var width = 600;
    var height = 900;
    if (chrome.windows && chrome.windows.create)
        chrome.windows.create({
            width: width,
            height: height,
            url: GAME_PLAYER,
            type: "popup"
        });
    else
        window.open(GAME_PLAYER, 'targetWindow',
            'toolbar=no,location=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=' + width + ',height=' + height)
}