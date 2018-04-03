export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
export function validateMobile(mobile) {
  const mob = /^[+]*[0-9][+0-9]{11,14}$/;


  if (mob.test(mobile)) {
    return true;
  } else {
    return false;
  }
}
export function validateAlphaNumeric(textInput) {
  const re = /^[a-zA-Z0-9_-]*$/;
  return re.test(textInput);
}

export function validateAlphabets(textInput) {
  const re = /^[a-zA-Z]*$/;
  return re.test(textInput);
}
export function isNumeric(num) {
  return !isNaN(num);
}

export function validatePassword(inputValue) {
  let regExp = new RegExp(/\s/);
  return inputValue.length >= 6 && !regExp.test(inputValue);
}
export function validateField(validationObj, value) {
  if (validationObj && validationObj.validationType) {
    switch (validationObj.validationType) {
      case 'text': {
        let isValid = value && value.length ? true : false;
        if (validationObj.minLength) {
          isValid = value.length >= validationObj.minLength;
        }
        return isValid;
      }
      case 'numeric': {
        return isNumeric(value);
      }
      case 'alphanumeric': {
        if (validationObj.notMandatory) {
          if (value && value.length) {
            return validateAlphaNumeric(value);
          } else {
            return true;
          }
        } else {
          return validateAlphaNumeric(value);
        }
      }
      case 'alphabets': {
        if (validationObj.notMandatory) {
          if (value && value.length) {
            return validateAlphabets(value);
          } else {
            return true;
          }
        } else {
          return validateAlphabets(value);
        }
      }
      case 'email': {
        return validateEmail(value);
      }
      case 'mobile': {
        return validateMobile(value);
      }
      case 'password': {
        let isValid = value && value.length ? true : false;
        if (validationObj.minLength) {
          isValid = value.length >= validationObj.minLength;
        }
        return isValid;
      }
      case 'email/mobile': {
        if (isNumeric(value)) {
          return validateMobile(value);
        } else {
          return validateEmail(value);
        }
      }
    }
  }
  return false;
}

export function testSpaces(inputValue) {
  return inputValue.replace(/\s/, "").length;
}


export function windowWidth() {
  let docElemProp = window.document.documentElement.clientWidth,
    body = window.document.body;
  return window.document.compatMode === "CSS1Compat" && docElemProp || body && body.clientWidth || docElemProp;
}

export function queryStringtoArray(Key) {
  let url = window.location.href;
  let KeysValues = url.split(/[\?&]+/);
  for (let i = 0; i < KeysValues.length; i++) {
    let KeyValue = KeysValues[i].split("=");
    if (KeyValue[0] == Key) {
      return KeyValue[1];
    }
  }
}

export function dateToTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export function updateQueryStringParameter(uri, key, value) {
  let re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  let separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}

