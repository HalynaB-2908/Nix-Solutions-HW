/*let json = { gah: "gghbjks.jgk" };
JSON.stringify(json);
console.log(json);
let r = JSON.parse('{"gah": "nhuihgoiurseh"}');
console.log(r);
*/

///////const { LineElement } = require("chart.js");

//const { Chart } = require("chart.js");

//console.log([1, 2, 3, 4, 5].reduce((a, b) => (a || 0) + b));

//let list = [1, 2, 3, 4, 5];

//console.log(list.reduce((total, i) => total + i * 2));

//3 persons
/*
let a = {
  name: "John",
  surname: "Stivens",
  age: 16,
};

let b = {
  name: "Jake",
  surname: "Johns",
  fathername: "Putinich",
};

let c = {
  name: "Sayo",
  surname: "Hint",
  sex: "man",
};

let persons = {
  a: a,
  b: b,
  c: c,
};
*/
/*
for (var i in persons) {
  console.log(persons[i].name, persons[i].surname);
}
*/

// loop of loop of values
/*
let ab = document.querySelector("#a");

let bb = document.querySelector("#b");

let cb = document.querySelector("#c");

let for_html = [];

for (let key in persons) {
  for (let i in persons[key]) {
    for_html.push(persons[key][i]);
  }
}

console.log(for_html);

document.write(`<table>`);

document.write(`<tr>`);

for (i = 1; i < 9; i += 3) {
  console.log(for_html[i]);
  //ab.insertAdjacentHTML(
  //"beforeend",
  // `
  //<td>${for_html[i]}</td>

  //`

  document.write(`<th>${for_html[i]}</th> `);

  //);
}

document.write(`</tr>`);
document.write(`<tr>`);

for (i = 1; i < 9; i += 3) {
  console.log(for_html[i]);
  document.write(`<td>${for_html[i]}</td> `);
}

document.write(`</tr>`);
document.write(`<tr>`);

for (i = 2; i < 9; i += 3) {
  console.log(for_html[i]);
  document.write(`<td>${for_html[i]}</td> `);
}

document.write(`</tr>`);

document.write(`</table`);

/*
for (var key in persons) {
  var t = 1;
  for (var i in persons[key]) {
    console.log(persons[key][i]);
    if (t == 1 || t == 4 || t == 7) {
      
    }

    if (t == 2 || t == 5 || t == 6) {
      bb.innerHTML += `<td>${persons[key][i]}</td>`;
    }

    if (t == 3 || t == 5 || t == 8) {
      cb.innerHTML += `<td>${persons[key][i]}</td>`;

  }
  vart += 1;
}
*/

//fullName
/*
for (let i in persons) {
  console.log(`${persons[i].name} ${persons[i].surname}`);
}
*/

//serialize
//console.log(JSON.stringify(persons));

//deserialize
//console.log(JSON.stringify(persons.b));

//HTML th optional
/*
let keysA = Object.keys(a);
let keysB = Object.keys(b);
let keysC = Object.keys(c);

let keys = [keysA, keysB, keysC];

console.log(keys);

document.write(`<table>`);

document.write(`<tr>`);
for (i in keys[0]) {
  document.write(`<th>${keys[0][i]}</th>`);
}

for (i in keys[1]) {
  document.write(`<th>${keys[1][i]}</th>`);
}

for (i in keys[2]) {
  document.write(`<th>${keys[2][i]}</th>`);
}

document.write(`</tr>`);

document.write(`<tr>`);

for (i in a) {
  document.write(`<th>${a[i]}</th>`);
}

for (i in b) {
  document.write(`<th>${b[i]}</th>`);
}

for (i in c) {
  document.write(`<th>${c[i]}</th>`);
}

document.write(`</tr>`);

document.write(`</table>`);
*/

//BLUE BELT
/*let someTree = {
  tagName: "table", //html tag
  subTags:
    //вложенные тэги
    {
      tagName: "tr",
      subTags: {
        a: {
          tagName: "td",
          text: "some text",
        },
        b: {
          tagName: "td",
          text: "some text 2",
        },
      },
    },

  attrs: {
    border: 1,
  },
};

//console.log(`${someTree.tagName}`);

document.write(`<${someTree.tagName} border = ${someTree.attrs.border}>`);

document.write(`<${someTree.subTags.tagName}>`);

document.write(`<${someTree.subTags.subTags.a.tagName}>`);
document.write(`${someTree.subTags.subTags.a.text}`);
document.write(`</${someTree.subTags.subTags.a.tagName}>`);

document.write(`<${someTree.subTags.subTags.b.tagName}>`);
document.write(`${someTree.subTags.subTags.b.text}`);
document.write(`</${someTree.subTags.subTags.b.tagName}>`);

document.write(`</${someTree.subTags.tagName}>`);

document.write(`</${someTree.tagName}>`);
*/

//destruct string
/*
let arr = [1, "abc"];

let nmb = arr[0];

let s1 = arr[1][0];
let s2 = arr[1][1];
let s3 = arr[1][2];

console.log(nmb, s1, s2, s3);
*/

//destruct2
/*let a = {
  name: "Ivan",
  surname: "Petrov",
  children: { a: { name: "Maria" }, b: { name: "Nikolay" } },
};

let [name1, name2] = [a.children.a.name, a.children.b.name];

console.log([name1, name2]);
*/

//destruct3
/*
let c = [1, 2];

let [a, b, l] = [c[0], c[1], c.length];

console.log(a, b, l);
*/

//Dark Belt

let input = prompt("Please type 0 or 1");
let l = [];

let li = [];

let a = null;

for (i = 1; i < 9; i++) {
  input = prompt("Please type 0 or 1");

  if ((l.length = 4)) {
    if (li.includes(l)) {
      a = li.indexOf(l);
      console.log(li[a][i]);
      console.log("It's prog ..");
    }

    li.push(l);
    l.length = 0;
  } else {
    console.log(Math.round(Math.random()));
    console.log("It's prog ..");
  }

  l.push(input);

  console.log(l);
  console.log("it's user");
}
