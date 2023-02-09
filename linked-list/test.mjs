import { Node, LinkedList } from './linked-list-prac.mjs';

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();
console.log('inserAt() 호출');

console.log('=========================1=========================');
list.insertAt(0, 0);
console.log('=========================2=========================');
list.insertAt(1, 1);
console.log('=========================3=========================');
list.insertAt(2, 2);
console.log('=========================4=========================');
list.insertAt(3, 3);
console.log('=========================5=========================');
list.insertAt(4, 4);
console.log('=========================6=========================');
list.insertAt(4, 5);
list.printAll();
