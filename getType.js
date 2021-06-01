export default function getType(date) {
    return Object.prototype.toString.call(date).slice(8, -1);
}
