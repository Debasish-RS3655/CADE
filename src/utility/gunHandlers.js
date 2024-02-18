// utility functions for converting the gun callbacks into a promise
// Debashish Buragohain

const onceHandler = (node) => new Promise((resolve, reject) => {
    node.once(data => {
        node.off();     // remove the once hander after receiving in once
        resolve(data);
    });
});
const putHandler = (node, data) => new Promise((resolve, reject) => {
    node.put(data, (ack) => {
        if (ack.err) reject(ack.err);
        else resolve(ack.ok);
    })
});

export { onceHandler, putHandler };