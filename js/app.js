function detectColorScheme() {
  var theme = "light";

  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      var theme = "dark";
      setTheme('dark');
    }
    if (localStorage.getItem("theme") == "aqua") {
      var theme = "aqua";
      setTheme('aqua');
    }
    if (localStorage.getItem("theme") == "light") {
      var theme = "light";
      setTheme('light');
    }
  }
}

function setTheme(theme) {
  if(theme != localStorage.getItem("theme")) {
    
  }
  if (theme == 'dark') {
    $('link[rel~="stylesheet"][title~="theme-dark"]').prop('disabled', false);
    $('link[rel~="stylesheet"][title~="theme-aqua"]').prop('disabled', true);
    localStorage.setItem('theme', 'dark');
  } else if (theme == 'aqua') {
    $('link[rel~="stylesheet"][title~="theme-aqua"]').prop('disabled', false);
    $('link[rel~="stylesheet"][title~="theme-dark"]').prop('disabled', true);
    localStorage.setItem('theme', 'aqua');
  } else {
    localStorage.setItem('theme', 'light');
    $('link[rel~="stylesheet"][title~="theme-aqua"]').prop('disabled', true);
    $('link[rel~="stylesheet"][title~="theme-dark"]').prop('disabled', true);
  }
}

detectColorScheme();