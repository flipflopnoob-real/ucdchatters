export type ChatMessage = {
	id: string;
	content: string;
	user: string;
	role: "user" | "assistant";
};

export type Message =
	| {
			type: "add";
			id: string;
			content: string;
			user: string;
			role: "user" | "assistant";
	  }
	| {
			type: "update";
			id: string;
			content: string;
			user: string;
			role: "user" | "assistant";
	  }
	| {
			type: "all";
			messages: ChatMessage[];
	  };

export const names = [
	"Anon1",
	"Anon2",
	"Anon3",
	"Anon4",
	"Anon5",
	"Anon6",
	"Anon7",
	"Anon8",
	"Anon9",
	"Anon10",
	"Anon11",
	"Anon12",
	"Anon13",
	"Anon14",
	"Anon15",
	"Anon16",
	"Anon17",
	"Anon18",
	"Anon19",
	"Anon20",
	"Anon21",
	"Anon22",
	"Anon23",
	"Anon24",
	"Anon25",
	"Anon26",
	"Anon27",
	"Anon28",
	"Anon29",
	"Anon30",
	"Anon31",
	"Anon32",
	"Anon33",
	"Anon34",
	"Anon35",
	"Anon36",
	"Anon37",
	"Anon38",
	"Anon39",
	"Anon40",
	"Anon41",
	"Anon42",
	"Anon43",
	"Anon44",
	"Anon45",
	"Anon46",
	"Anon47",
	"Anon48",
	"Anon49",
	"Anon50",
	"Anon51",
	"Anon52",
	"Anon53",
	"Anon54",
	"Anon55",
	"Anon56",
	"Anon57",
	"Anon58",
	"Anon59",
	"Anon60",
	"Anon61",
	"Anon62",
	"Anon63",
	"Anon64",
	"Anon65",
	"Anon66",
	"Anon67",
	"Anon68",
	"Anon69",
	"Anon70",
	"Anon71",
	"Anon72",
	"Anon73",
	"Anon74",
	"Anon75",
	"Anon76",
	"Anon77",
	"Anon78",
	"Anon79",
	"Anon80",
	"Anon81",
	"Anon82",
	"Anon83",
	"Anon84",
	"Anon85",
	"Anon86",
	"Anon87",
	"Anon88",
	"Anon89",
	"Anon90",
	"Anon91",
	"Anon92",
	"Anon93",
	"Anon94",
	"Anon95",
	"Anon96",
	"Anon97",
	"Anon98",
	"Anon99",
	"Anon100",
];
