export function getAPIBase() {
  let M;
  if (Boolean(process.env.REACT_APP_MGNL_IS_PREVIEW)) {
    M = process.env.REACT_APP_MGNL_BASE_AUTHOR;
  } else {
    M = process.env.REACT_APP_MGNL_BASE_PUBLIC;
  }
  let API_BASE = process.env.REACT_APP_MGNL_HOST + M;
  return API_BASE;
}

export function getLanguages() {
  return process.env.REACT_APP_MGNL_LANGUAGES.split(' ');
}

export function removeCurrentLanguage(string, currentLanguage) {
  return string.replace(new RegExp('/' + currentLanguage + '($|/)'), '/');
}

export function getCurrentLanguage() {
  const languages = getLanguages();

  for (let i = 0; i < languages.length; i++) {
    const language = languages[i];

    if (new RegExp('/' + language + '($|/)').test(window.location.pathname)) {
      return language;
    }
  }

  return languages[0];
}

export function changeLanguage(newLanguage) {
  const nodeName = process.env.REACT_APP_MGNL_APP_BASE;
  const languages = getLanguages();
  let pathname = window.location.pathname;
  const currentLanguage = getCurrentLanguage();
  pathname = removeCurrentLanguage(pathname, currentLanguage);

  if (languages[0] !== newLanguage) {
    if (pathname.indexOf(nodeName) > -1) {
      pathname = pathname.replace(new RegExp(nodeName), '/' + newLanguage + nodeName);
    } else {
      pathname = '/' + newLanguage + pathname;
    }
  }

  window.location.href = window.location.origin + pathname + window.location.search;
}

export function getRouterBasename() {
  const nodeName = process.env.REACT_APP_MGNL_APP_BASE;
  const languages = getLanguages();
  var pathname = window.location.pathname;

  if (pathname.indexOf(nodeName) > -1) {
    return pathname.replace(new RegExp(nodeName + '.*'), '') + nodeName;
  }

  const currentLanguage = getCurrentLanguage();

  return languages[0] === currentLanguage ? '/' : '/' + currentLanguage;
}

export function getVersion(path) {
  return new URLSearchParams(path).get('mgnlVersion');
}
