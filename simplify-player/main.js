function main () {
    const hostName = document.location.hostname;

    let ids = [];
    let classNames = [];
    let nodesToFullWidth = [];

    if (hostName === 'schoo.jp') {
        ids = ['room_sub_mod', 'roomHeader', 'head_bar_mod', 'tools_mod', 'desk_mod'];
        classNames = ['twinkle01', 'twinkle02', 'actionNavi'];
        nodesToFullWidth = [document.getElementById('screen')];
    } else if (hostName === 'www.youtube.com') {
        ids = ['masthead-container', 'items', 'info', 'meta', 'ticket-shelf', 'merch-shelf', 'comments'];
        nodesToFullWidth = [
           document.getElementsByTagName('video')[0],
           document.getElementById('ytd-player'),
        ];
    } else {
        console.log(`Does not support this site: ${hostName}`);
    }

    const nodesToRemove = [
        ids.map(x => document.getElementById(x)),
        classNames.map(x => document.getElementsByClassName(x)).map(x => [...x]).flat()
    ];

    nodesToRemove.flat().filter(x => x).forEach(x => x.remove());
    nodesToFullWidth.map(toFullWidth);

    // Refresh
    window.dispatchEvent(new Event('resize'));
}

function toFullWidth(node) {
    node.style.position = 'fixed';
    node.style.top = '0px';
    node.style.left = '0px';
    node.style.width = '100vw';
    node.style.height = 'calc(min(100vw * 9 / 16, 100vh))';
    node.style.margin = '0px';
    node.style.padding = '0px';
}

setInterval(main, 1000);
