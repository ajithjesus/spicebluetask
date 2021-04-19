const stringToDate1 = (string_date) => {
    try {
      var parts = string_date.split('-');
      if (parts[2] === "31") {
        parts[2] = "01";
      } else {
        //parts[2] = (parts[2] * 1) + 1;
        parts[2] = (parts[2] * 1);
      }
      var mydate = new Date(parts[0] + "/" + parts[1] + "/" + parts[2]);
      //mydate = mydate.toISOString().substr(0, 10);
      if (parts[0] === "0999" || parts[0] === "8999" || parts[0] === "1000" || parts[0] === "9000") {
        mydate = '';
      }
      if ((mydate.toString()) === "Invalid Date") {
        return '';
      }
      return mydate;
    }
    catch (err) {
      return '';
    }
  }

  export default{
    stringToDate1
  }