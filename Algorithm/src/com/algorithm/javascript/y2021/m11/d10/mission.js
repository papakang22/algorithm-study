const data1 = "[1,2,[3,4,[5,[6]]]]";
const data2 = "[1,2,[3],4,[5,6,[7,8]],9,[10]]";
const data3 = "[1,2,[3,4],5,6]]";
const data4 = "[1,[2,3],[5,6],[7,[8,9],[1,2";
class Node{
    constructor(type, child, value) {
        this._obj = {};
        this._obj.type = type;
        this._obj.child = child;
        if(value) this._obj.value = value;
    }
    getValue() {
        return this._obj;
    }
    setChild(data) {
        this._obj.child.push(data);
    }
}

class Stack{
    constructor() {
        this._arr = [];
    }
    push(val) {
        this._arr.push(val);
    }
    poll() {
        return this._arr.pop();
    }
    peek() {
        return this._arr.length > 0 ? this._arr[this._arr.length - 1] : null;
    }
    isEmpty() {
        return this._arr.length === 0;
    }
}

class Queue{
    constructor() {
        this._arr = [];
    }
    offer(val) {
        this._arr.push(val);
    }
    poll() {
        return this._arr.shift();
    }
    peek() {
        return this._arr.length > 0 ? this._arr[0] : null;
    }
    isEmpty() {
        return this._arr.length === 0;
    }
    size() {
        return this._arr.length;
    }
}
console.log(checkParenthesis(data1));
console.log(checkParenthesis(data2));
console.log(checkParenthesis(data3));
console.log(checkParenthesis(data4));

function checkParenthesis(s) {
    let arr;
    try{
        arr = JSON.parse(s);
    }catch(e){
        return '닫는 괄호가 일치하지 않습니다.';
    }

    const queue = new Queue();
    let level = 0;
    let numCnt = 0;
    queue.offer(arr);
    while(!queue.isEmpty()) {
        const len = queue.size();
        for(let i = 0; i < len; i++) {
            const item = queue.poll();
            for(let j = 0; j < item.length; j++) {
                if(typeof item[j] == 'object') {
                    queue.offer(item[j]);
                }else{
                    numCnt++;
                }
            }
        }
        level++;
    }

    return `배열의 중첩된 깊이 수준은 ${level}이며, 총 ${numCnt}개의 원소가 포함되어 있습니다`;
}
console.log(run(data1));
function run(s){
    let arr;
    try{
        arr = JSON.parse(s);
    }catch(e){
        return '닫는 괄호가 일치하지 않습니다.';
    }
    const node = new Node("root", []);
    node.setChild(recursive(arr, new Node("array", [])));

    console.log(JSON.stringify(node.getValue()));
    function recursive(item, node){
        for(let i = 0 ; i < item.length; i++) {
            if(typeof item[i] == 'object') {
                node.setChild(recursive(item[i], new Node("array", [])));
            }else{
                node.setChild(new Node("number", [], item[i]).getValue());
            }
        }
        return node.getValue();
    }
}