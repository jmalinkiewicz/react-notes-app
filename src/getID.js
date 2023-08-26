let count = 0;

export default function getID() {
    const ID = count;
    count++;
    return ID; 
}