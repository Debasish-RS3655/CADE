// !!-- first doing these things using dedicated workers
// !!-- will then shift to shared workers

// calculates the hashes for every key for every chunk uploaded to gun
// Debashish Buragohain

// !!-- not required in the latest version
// const hashArray = [];
export default () => {
    self.addEventListener('message', async e => {
        // !!-- this will not be implemented in the latest version
        // if (!e) return;
        // else if (e.data.end) {
        //     // insertion sort applied to the hash array now
        //     for (let i = 1; i < hashArray.length; i++) {
        //         let temp = hashArray[i];
        //         let j = i - 1;
        //         while (j >= 0 && hashArray[j].index > temp.index) {
        //             // keep shifting
        //             hashArray[j + 1] = hashArray[j];
        //             j--;
        //         }
        //         hashArray[j + 1] = temp;
        //     }
        //     // finally send the sorted and indexed hash array back to the frontend
        //     postMessage(hashArray.map(el => el.hash));
        //     // reset the hash array for the next upload
        //     hashArray.length = 0;
        // }
        // else {
        //     // extract and hash it now
        //     // browser based code
        //     const { data, index } = e.data;
        //     const textBuffer = new TextEncoder().encode(data);
        //     const textDigest = await crypto.subtle.digest('SHA-256', textBuffer);
        //     const hashArray = Array.from(new Uint8Array(textDigest));
        //     const hashHex = hashArray.map(b => b.toString(16).padStart());
        //     // finally push it into the array now
        //     hashArray.push({
        //         index,
        //         hash: hashHex
        //     });
        // }

        // hash all the functions and return them once only
        if (!e) { return }
        // also need the worker number for the organized indexing of the hashes from multiple workers
        const { chunks, worker } = e.data;
        const hashedArray = [];
        for (let i = 0; i < chunks.length; i++) {
            const textBuffer = new TextEncoder().encode(chunks[i]);
            const hashBuffer = await crypto.subtle.digest('SHA-256', textBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            hashedArray[i] = hashHex;
        }
        postMessage({ hashedArray, worker });
    });
}