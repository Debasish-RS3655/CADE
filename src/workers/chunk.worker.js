// chunking worker to chunk a single base64 image into a large number of chunks
// Debashish Buragohain

export default () => {
    self.addEventListener('message', e => {
        if (!e) return;        
        const { image: inputString, noNodes: noDiv } = e.data;
        const strLength = inputString.length;
        const substrLength = Math.ceil(strLength / noDiv);
        const substrings = [];
        // this is a realtively long function that would otherwise hang the UI
        for (let i = 0; i < substrLength; i++) {
            const start = i * substrLength;
            const end = start + substrLength;
            const substring = inputString.substring(start, end);
            substrings.push(substring);
        }
        // finally send the divided chunks back to the frontend
        postMessage(substrings);
    })
}