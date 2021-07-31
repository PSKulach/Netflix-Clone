export function seedDatabase(firebase) {
	function getUUID() {


		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
			const piece = (Math.random() * 16) | 0;
			const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
			return elem.toString(16);
		});
	}

	/* Pokoje
    ========================================= */
	firebase.firestore().collection("pokoje").add({
		id: getUUID(),
		number: "1",
		floor: "1",
		size: "1/2",
		balcony: "yes",
		description:
        "Pokój nr 1, jedynka lub dwójka z balkonem.",
		slug: "pokoje-podhale",
	});
	firebase.firestore().collection("pokoje").add({
		id: getUUID(),
		number: "2",
		floor: "1",
		size: "2",
		balcony: "yes",
		description:
        "Pokój nr 2, dwójka z balkonem.",
		slug: "pokoje-podhale",
	});
	firebase.firestore().collection("pokoje").add({
		id: getUUID(),
		number: "3",
		floor: "1",
		size: "4", 
		balcony: "no",
		description:
        "Pokój nr 3, czwórka.",
		slug: "pokoje-podhale",
	});
	firebase.firestore().collection("pokoje").add({
		id: getUUID(),
		number: "4",
		floor: "2",
		size: "2",
		balcony: "yes",
		description:
        "Pokój nr 4, dwójka z balkonem.",
		slug: "pokoje-podhale",
	});
	firebase.firestore().collection("pokoje").add({
		id: getUUID(),
		number: "5",
		floor: "2",
		size: "2",
		balcony: "yes",
		description:
        "Pokój nr 5, dwójka z balkonem.",
		slug: "pokoje-podhale",
	});
	firebase.firestore().collection("pokoje").add({
		id: getUUID(),
		number: "6",
		floor: "2",
		size: "2",
		balcony: "yes",
		description:
        "Pokój nr 6, dwójka z balkonem.",
		slug: "pokoje-podhale",
	});
	firebase.firestore().collection("pokoje").add({
		id: getUUID(),
		number: "7",
		floor: "2",
		size: "2",
		balcony: "yes",
		description:
        "Pokój nr 7, dwójka z balkonem.",
		slug: "pokoje-podhale",
	});
	firebase.firestore().collection("pokoje").add({
		id: getUUID(),
		number: "8",
		floor: "1",
		size: "1/2",
		balcony: "no",
		description:
        "Pokój nr 8, jedynka lub dwójka.",
		slug: "pokoje-podhale",
	});
}
