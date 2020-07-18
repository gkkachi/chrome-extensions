function main () {
    const hostName = document.location.hostname;

    let ids = [];
    let classNames = [];
    let nodeToFullScreen = null;

    if (hostName === 'schoo.jp') {
        ids = ['room_sub_mod', 'roomHeader'];
        classNames = ['twinkle01', 'twinkle02', 'actionNavi'];
        nodeToFullScreen = document.getElementById('screen');
    } else {
        console.log(`Does not support this site: ${hostName}`);
    }

    const nodesToRemove = [
        ids.map(x => document.getElementById(x)),
        classNames.map(x => document.getElementsByClassName(x)[0]),
    ];

    nodesToRemove.flat().forEach(x => x.remove && x.remove());
    toFullScreen(nodeToFullScreen);
}

function toFullScreen(node) {
    node.style.width = '100vw';
    node.style.margin = '0px';
    node.style.padding = '0px';
}

main();
