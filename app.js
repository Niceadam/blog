var app = document.getElementById("app")

var Post = {
  view: function(vnode) {
    const block = m("md-block", { src: `posts/${vnode.attrs.src}.md` })
    return m("div", [
      m("button", { onclick: () => m.route.set("/") }, "< Go back",),
      block
    ])
  }
}

var Home = {
  view: function() {
    const list = m("ul", [
      m("li", m(m.route.Link, { href: "/post/hacking-actic" }, "Pen Testing: Actic")),
      m("li", m(m.route.Link, { href: "/post/keyboard-remap" }, "Keyboard Remapping")),
    ])

    return m("div.home", [
      m("h1", "Niceadam"),
      list,
    ])
  }
}

m.route(app, "/", {
  "/": Home,
  "/post/:src": Post,
})
