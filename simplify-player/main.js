function main () {
    const hostName = document.location.hostname;

    let ids = [];
    let classNames = [];
    let nodeToFullWidth = null;

    if (hostName === 'schoo.jp') {
        ids = ['room_sub_mod', 'roomHeader', 'head_bar_mod', 'tools_mod', 'desk_mod'];
        classNames = ['twinkle01', 'twinkle02', 'actionNavi'];
        nodeToFullWidth = document.getElementById('screen') || document.getElementById('roomInner');
    } else {
        console.log(`Does not support this site: ${hostName}`);
    }

    const nodesToRemove = [
        ids.map(x => document.getElementById(x)),
        classNames.map(x => document.getElementsByClassName(x)).map(x => x.lengh > 0 ? x[0] : null)
    ];

    nodesToRemove.flat().filter(x => x && x.remove).forEach(x => x.remove());
    nodeToFullWidth && toFullWidth(nodeToFullWidth);
}

function toFullWidth(node) {
    node.style.width = '100vw';
    node.style.margin = '0px';
    node.style.padding = '0px';
}

main();
