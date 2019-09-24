const name = "Paul Winter";
const company = "Super Mega Evil Corp";
const title = "CCO";
const email = "oliver@mondough.io";
const www = "mondough.io";
const companyStyle = "color: red; font-size: 64px;";

// ---------- Don't touch --------------
const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>${name}</title>
    <style>
      html {
        box-sizing: border-box;
      }

      *,
      *:after,
      *::before {
        box-sizing: inherit;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        color: rgba(0, 0, 0, 0.637);
      }
      .wrap {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .card {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 20px;
        min-width: 400px;
        min-height: 220px;
        -webkit-box-shadow: 0px 0px 35px 8px rgba(0, 0, 0, 0.11);
        -moz-box-shadow: 0px 0px 35px 8px rgba(0, 0, 0, 0.11);
        box-shadow: 0px 0px 35px 8px rgba(0, 0, 0, 0.11);
      }

      .company {
        align-self: flex-end;
        font-size: 25px;
        padding-bottom: 40px;
        ${companyStyle}
      }

      .name {
        color: black;
        font-size: 20px;
      }

      .title {
        font-size: 14px;
        padding-bottom: 30px;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="card">
        <div class="company">${company}</div>
        <div class="name">${name}</div>
        <div class="title">${title}</div>
        <div class="email">${email}</div>
        <div class="web">${www}</div>
      </div>
    </div>
  </body>
</html>
`;

console.log(template);
