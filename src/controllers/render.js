const data = [
  {
    title: "Random Password Genrater",
    dec: "this is dec",
    slug: "random-password-genrate",
  },
  {
    title: "Letter Counter",
    dec: "this is dec",
    slug: "letter-counter",
  },
];

class Render {
  homePage(req, res) {
    res.render("pages/index", { title: "Tech Fans", data });
  }

  toolPage(req, res) {
    const slug = req.params.slug;
    const findTitle = data.find((item) => item.slug === slug);

    res.render(`pages/tools/tool/${slug}`, {
      title: `Tech Fans : ${findTitle.title}`,
    });
  }

  aboutPage(req, res) {
    const title = "About us";

    res.render(`pages/about`, {
      title: `Tech Fans : ${title}`,
    });
  }

  contactPage(req, res) {
    const title = "Contact us";

    res.render(`pages/contact`, {
      title: `Tech Fans : ${title}`,
    });
  }
}

module.exports = new Render();
