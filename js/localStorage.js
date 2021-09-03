let keyUsers = "users";
let keyId = "id";
let id = 0;
let users = {
	data: [],
};

async function getId() {
	id = parseInt(localStorage.getItem(keyId));
}

function updateId() {
	getId();
	id += 1;
	setId();
}

async function setId() {
	localStorage.setItem(keyId, toString(id));
}

async function getUsers() {
	users = JSON.parse(localStorage.getItem(key));
}

function setUsers() {
	localStorage.setItem(key, JSON.stringify(users));
}

function addUser(obj) {
	getUsers();
	users.data.push(obj);
	setUsers();
}
