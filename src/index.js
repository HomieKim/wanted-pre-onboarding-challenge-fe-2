//@ts-check
/**
 * @author HomieKie <ghals0708@gmail.com>
 */
/* Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
} */

/**
 * TODO ITEM
 * @typedef {Object} Todo
 * @property {number} id - todo item id
 * @property {string} contents - 내용
 * @property {boolean} isComplete -완료 여부
 * @property {string} cartegory - 카테고리
 * @property {string[]=} tags - 태그들
 */


/*
CREATE 요구사항
- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.
*/
/**
 * @function addTodo - 할 일을 추가하는 함수
 * @param {Object} addTodoParams
 * @param {string} addTodoParams.content - 추가할 내용
 * @param {string} addTodoParams.category - 카테고리
 * @param {string[]|undefined} addTodoParams.tags - 태그들
 */
function addTodo({content, category, tags}) {}

/*
READ 요구사항
- 모든 할 일을 조회 가능
- ID 기반으로 특정할 일 조회 가능
*/
/**
 * @function readTodoAll - 모든 할 일을 조회
 * @return {Todo[]}
 */
function readTodoAll() { return []}
/**
 * @function readTodoById - 특정 id로 todo 조회
 * @param {number} id - todo Id
 * @return {Todo[]}
 */
function readTodoById(id) { return []}
/*
UPDATE 요구사항
- ID 빼고 전부 수정 가능
- 특정 할일의 tag를 수정 가능
*/
/**
 * @function updateTodo - todo 수정하는 함수
 * @param {'contents' | 'tags' | 'category'} updateType - contents, tags, cartegory 수정 가능
 * @param {Object} updateParams - update 함수의 파라미터
 * @param {number} updateParams.id - 수정할 todo의 id 
 * @param {string=} updateParams.contents - 수정할 todo의 내용
 * @param {number=} updateParams.targetTagIdx - 수정할 tag의 인덱스
 * @param {string=} updateParams.tagContents - 수정할 tag 내용
 * @param {string=} updateParams.category - 수정할 카테고리
 */
function updateTodo(updateType, {id, contents, targetTagIdx, tagContents, category}) {}

/*
DELETE 요구사항
- 특정 ID의 TODO 삭제 가능
- 모든 TODO 삭제 가능
- 특정 ID의 TAG 삭제 가능
- 모든 TAG 삭제 가능
*/
/**
 * @function deleteTodoAll
 */
function deleteTodoAll() {}
/**
 * @function deleteTodoById
 * @param {number} id - 삭제할 tag 의 id
 */
function deleteTodoById(id) {}
/**
 * @function deleteTagAll
 */
function deleteTagAll() {}
/**
 * @function deleteTagById
 * @param {number} id - 삭제할 tag 의 id
 */
function deleteTagById(id) {}