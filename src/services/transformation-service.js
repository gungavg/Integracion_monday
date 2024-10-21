const transformText = (value, type) => {
  switch (type) {
    case 'ENE':
      let ENE = "ENE " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(ENE);

    case 'FEB':
      let FEB = "FEB " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(FEB);

    case 'MAR':
      let MAR = "MAR " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(MAR);

    case 'ABR':
      let ABR = "ABR " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(ABR);

    case 'MAY':
      let MAY = "MAY " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(MAY);

    case 'JUN':
      let JUN = "JUN " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(JUN);

    case 'JUL':
      let JUL = "JUL " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(JUL);

    case 'AGO':
      let AGO = "AGO " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(AGO);

    case 'SEP':
      let SEP = "SEP " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(SEP);

    case 'OCT':
      let OCT = "OCT " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(OCT);

    case 'NOV':
      let NOV = "NOV " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(NOV);

    case 'DIC':
      let DIC = "DIC " + value.toString().replace(/['"]/g, "");
      return JSON.stringify(DIC);

    default:
      return JSON.stringify(value);
  }
};
module.exports = { transformText };
