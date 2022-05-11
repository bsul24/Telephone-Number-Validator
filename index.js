function telephoneCheck(str) {
    let valid = /[0-9()-\s]/
    for (let i = 0; i < str.length; i++) {
      if (!(valid.test(str[i]))) {
        return false;
      }
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if ((/[0-9]/).test(str[i])) {
        count++;
      }
    }
    if (count < 10 || count > 11) {
      return false;
    }
    if (count == 11) {
      if (str[0] != "1") {
        return false;
      }
    }
    let checker10 = /^(\(\d\d\d\)|\d\d\d)(\s*|\-)\d\d\d(\s*|\-)\d\d\d\d/;
    let checker11 = /1(\s*|\-*)(\(\d\d\d\)|\d\d\d)(\s*|\-)\d\d\d(\s*|\-)\d\d\d\d/
    if (count == 10) {
      if (checker10.test(str)) {
        return true;
      } else {
        return false;
      }
    } else {
      if (checker11.test(str)) {
        return true;
      } else {
        return false;
      }
    }
  }