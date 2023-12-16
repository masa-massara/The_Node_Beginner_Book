function route(handle, pathname) {
  console.log(pathname + "に対するルーティングを行います");
  if (typeof handle[pathname] === "function") {
    handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
  }
}

exports.route = route;
