// 산술 연산자 (Arithmetic Operator)

import random from './getRandom';

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5); //나머지의 값

// 할당 연산자 (Assignment Operator)

let a = 2; // '=' 할당 연산자 const의 경우 재할당 불가 재할당이 가능한 것은 let
//a = a + 1;
a += 1; // "+=" 역시 할당 연산자 a += 1 은 a = a + 1 과 같음 +기호에 산술 연산자 기호 넣기 가능.

console.log(a);

//비교 연산자 (Comparison Operator)

const b = 13;
const c = 13;

console.log(b === c); // === 일치 연산자 값이 일치한다면 true

function isEqual(x, y) {
    return x === y; //return -> 값을 반환 해줌.
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2')); // 숫자 데이터와 문자 데이터는 일치하지 않음. 
console.log(b !== c); // !== -> 서로가 다른 것인지 확인해주는 것 다르면 true.
console.log(b >= c); // =기호를 꺾쇠 가로보다 뒤에 위치해야함. 

//논리 연산자 (Logical Operator)

const d = 1 === 1;
const e = 'AB' === 'AB';
const f = true;

console.log(d);
console.log(e);
console.log(f);

console.log('&&: ', d && f); //&& And(그리고) 연산자 전부 다 true인 경우에만 true가 나옴. false가 하나라도 있으면 false.

console.log('||: ', d || e); //|| Or(또는) 연산자 모든 값 중 True 값이 하나라도 있다면 true.

console.log('!: ', !d); // ! Not(부정) 연산자 데이터의 반대 값이 나타남 ex) true -> false, false -> true.

//삼항 연산자 (ternary Operator)

const g = 1 < 2;

if (g) {
    console.log('참');
}else{
    console.log('거짓')
}

console.log(g ? '참' : '거짓'); // ? 기준으로 앞의 갚이 true라면 : 의 앞의 값, false라면 : 의 뒤의 값

//조건문 (Switch statement)

const h = random();

switch (h) {
    case 0: 
        console.log('h is 0')
        break
    case 2:
        console.log('h is 2')
        break
    case 4:
        console.log('h is 4')
        break //전부 출력될 수도 있으니 break 필수!
    default: // if 조건문의 else 역할 마지막이므로 break도 적용할 필요 없음.
        console.log('rest...')
}

//조건문 (If statement)

if (h === 0) {
    console.log('h is 0')
} else if (h === 2) {
    console.log('h is 2') //else if 는 또 넣어줄 수 있음. (중간조건) 1개 - if, 2개 - if, else, 여러개 - if, else if, else
} else {   
    console.log('rest...')
}

//if문이 더 많이 사용되지만 상황에 따라서 Switch문이 더 직관적일 수 있음.

//반복문 (For statement)
//for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
    const li = document.createElement('li')
    li.textContent = `list-${i + 1}`//보관처리를 함 `와 '는 다름 구별할 것.
    //li.addEventListener('click', function() { console.log(li.textContent)}) 활성화시 리스트 클릭하면 콘솔에 뜸.
    if ((i + 1) % 2 === 0) {
        li.addEventListener('click', function() {
            console.log(li.textContent)
        }) // i가 짝수일때만 콘솔에 나옴.
    }
    ulEl.appendChild(li)
}// for문의 경우 i로 만드는 것을 권장함. 

//변수 유효범위 (Variable Scope)
// var, let, const

function scope(){
    if (true) {
        const j = 123
        console.log(j)//블럭 밖에 존재하면 오류가 나고 const위에 위치하면 정의가 되지않아 undefined가 뜸.
    }//유효범위는 해당하는 변수가 자기가 포함된 블럭에서만 동작한다는 의미 const와 let의 경우 블록레벨의 유효범위를 가짐
} //최신의 JS키워드 안에서는 var의 사용은 안하는게 좋음.
scope()
//var의 경우에는 블록레벨의 유효범위가 아니라 함수레벨의 유효범위를 가짐.
//따라서 var는 우리가 의도치 않았던 곳에서 동작할 수도 있어서 메모리 누수로 이어질 수 있는 가능성이 있음.
//결과적으로 let과 const를 사용하여 메모리 누수를 막는 것이 최신 JS 성향임.

//형 변환 (Type conversion)

const k = 1
const l = '1'

console.log(k == l) //== 동등 연산자 형 변환이 일어남. 되도록 안 사용하는 것이 좋음. 다른 데이터가 같은 데이터로 인식될 수 있음.

//Truthy(참 같은 값)
//true, {}, [], 1, 2, 'false', -12, '3.14' ...

//Falsy(거짓 같은 값)
//false, '', null, undefined, 0, -0, NaN  //* null은 의도적으로 비어진 곳, undefined는 의도적이지 않게 비어진 곳
//Truthy값은 많아 외우기 불가능 Falsy는 몇 가지 없기때문에 알아두면 좋음.

if (true) {
    console.log(123)
}