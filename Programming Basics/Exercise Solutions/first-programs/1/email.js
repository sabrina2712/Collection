// 1. Write a program that logs out an email
//    - When no name is defined use `Dear ladies and gentleman,` as salutation
const name = "Peter";
const content = "Fake content";
const signatureSelection = "Sig.1";

// ------------------ Don't touch -----------------------

const trimmedName = name.trim();
const salutation = trimmedName
  ? `Hi ${trimmedName},`
  : "Dear ladies and gentleman,";

//    - Use formal or informal ending dependant on a variable called `formal`
const formal = true;
let letterEnding = "";
if (formal) {
  letterEnding = "Sincerely yours,";
} else {
  letterEnding = "C u,";
}

//    - You should have 3 signatures to choose from

let signature = "";
switch (signatureSelection) {
  case "Sig.1":
    signature = `Oliver,
mintfort.com
    `;
    break;
  case "Sig.2":
    signature = `Oliver Weber
    oliver.weber@digitalcareerinstitute.org
    `;
    break;
  default:
    signature = "Oliver";
    break;
}

//    - Ideas for Content: Motivation Letter

const email = `
${salutation}
${content}
${letterEnding}

${signature}
`;

console.log(email);
