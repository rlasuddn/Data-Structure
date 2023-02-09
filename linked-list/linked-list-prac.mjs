/**
 * 연결리스트의 추상자료형
 * 모든 데이터 출력     printAll()
 * 모든 데이터 제거     clear()
 * 인덱스 삽입         inserAt(index,data)
 * 마지막 삽입         insertLast(data)
 * 인덱스 삭제         deleteAt(index)
 * 마지막 데이터 제거   deleteLast()
 * 인덱스 읽기          getNodeAt(index)
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    //노드의 시작 부분
    this.head = null;
    this.count = 0;
  }
  printAll() {
    let currentNode = this.head;
    let text = '[';
    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ', ';
      }
    }
    text += ']';
    console.log(text);
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error('범위를 넘어갔습니다.');
    }
    let newNode = new Node(data);

    if (index === 0) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      //같은 값 참조
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.count++;
  }
}
/**
 * let currentNode = this.head; => currentNode 와 this.head는 같은 노트들 참조 => Node(1,null)
 * currentNode = currentNode.next => currentNode에 currentNode.next값을 참조 => Node(2,null) , currentNode 와 this.head의 참조 값은 변경된다.
 * newNode.next = currentNode.next => 새로운 노드의 다음 연결할 노드를 currentNode의 다음 노드로 참조
 * currentNode.next = newNode; => current.next의 newNode를 연결
 */

export { Node, LinkedList };
