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
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = this.prev;
  }
}

class DoublyLinkedList {
  constructor() {
    //노드의 시작 부분
    this.head = null;
    this.tail = null;
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
      throw new Error('범위내로 노드를 생성해주세요');
    }

    const newNode = new Node(data);

    //index가 0인 경우 해당 노드를 시작 노드로 지정
    if (index === 0) {
      newNode.next = this.head;

      if (this.head != null) {
        //head존재시 새로운 노드를 헤드 앞단으로 연결
        this.head.prev = newNode;
      }
      this.head = newNode;
      //연결리스트 마지막 삽입
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    //index가 0 이상인 경우: 현재 head에 새로생성된 0이상의 노드를 다음 노드로 연결
    else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        //현재 생성된 노드까지 이동
        currentNode = currentNode.next;
      }
      //새로운 노드에 기존 노드에 다음 데이터 할당
      newNode.next = currentNode.next;
      //새로운 노드 앞단에 현재 노드 위치
      newNode.prev = currentNode;
      //기존 노드에 다음 데이터에 새로운 노드 할당
      currentNode.next = newNode;
      //새로 삽입한 다음 노드의 앞단을 새로운 노드로 설정
      newNode.next.prev = newNode;
    }

    //새로운 노드의 뒷단이 없을 경우 tail 수정
    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
  }
  clear() {
    this.head = null;
    this.count = 0;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error('제거할 수 없습니다.');
    }

    let currentNode = this.head;

    if (index === 0) {
      const deleteNode = this.head;

      //데이터가 1개일 경우
      if (this.head.next == null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.count--;
      return deleteNode;
    }
    //마지막 노드 삭제시
    else if (index == this.count - 1) {
      let deletedNode = this.tail;
      //마지막 노드가 될 노드의 뒷단을 null
      this.tail.prev.next = null;
      //tail 설정
      this.tail = this.tail.prev;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      const deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deleteNode;
    }
  }

  deleteLast() {
    this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error('범위 밖입니다.');
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export { Node, DoublyLinkedList };
