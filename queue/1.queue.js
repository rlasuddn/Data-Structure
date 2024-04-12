/**
 * 큐는 First In First Out(FIFO)으로 먼저 들어간 데이터가 먼저 나오는 규칙이 있는 리스트이다.
 * EX) 마트에 줄을 선다. -> 먼저 줄을 선 손님이 먼저 계산을 한다.
 * 운영체제에서도 사용되며 운영체제가 들어온 작업을 순서대로 CPU에게 전달하고 CPU는 순서대로 처리한다
 * 이를 FIFO 스케줄링이라 한다.
 *
 * 연결리스트로 큐를 구현할때 데이터 삽입은 헤드로, 데이터 삭제는 마지막 노드순서로 한다.
 * 이때 헤드부터 순차적으로 이동하여 삭제함으로 O(n)의 성능이 나온다.
 * 그리하여 연결리스트에 tail변수를 만들고 head는 tail을 바라보고, tail은 head를 바라보게 하여 o(1)의 성능을 가지게 한다.
 * 하지만 마지막 데이터가 제거됨에따라 tail도 이전 노드를 가르켜야 하지만 단방향 연결리스트로 다시 헤드부터 이동하여 tail 값을 바꿔야 한다.
 * 이에 이중연결리스트를 사용하게 된다.
 *
 * 큐의 추상자료형
 * enqueue - 데이터 삽입
 * dequeue - 데이터 제거
 * front - tail(1순위 진입) 데이터 참조
 * isEmpty - 비었는지 확인
 */