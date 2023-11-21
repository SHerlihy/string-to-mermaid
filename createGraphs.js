import mermaid from './node_modules/mermaid/dist/mermaid.esm.mjs';
import {defString} from './defString.js';

const content = new String(defString)

mermaid.initialize({ 
    startOnLoad: false,
});

const createGraphDiv = async (graphString) => {
        const preTag = document.createElement('pre')
    
        const { svg } = await mermaid.render('graphDiv', graphString)
        preTag.innerHTML = svg

        document.body.append(preTag)
}

const patternGraphStart = /graph TD/g
const graphStarts = [...content.matchAll(patternGraphStart)]

const graphStrs = new Array()
let prevStartIdx = graphStarts[0].index
for (let i=1; i<graphStarts.length; i++) {
    const curStartIdx = graphStarts[i].index
    const graphStr = content.slice(prevStartIdx, curStartIdx)
    graphStrs.push(graphStr)

    prevStartIdx = curStartIdx
}
//may need to trim ending whitespace

const graphStr = content.slice(prevStartIdx, content.length)
graphStrs.push(graphStr)

for (let i=0; i<graphStrs.length; i++) {
    createGraphDiv(new String(graphStrs[i]))
}
