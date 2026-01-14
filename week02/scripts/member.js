const member = require("member");

const data = {
  familyName: "lime",
  movedIn: 2015,
  numberOfMembers: 5,
  isBishopVisted: true,
  familyMemberData: ["Python", "JavaScript"]
};

member.writeFileSync("data.json", JSON.stringify(data, null, 2));
