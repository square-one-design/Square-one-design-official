# Square One Design website

A four-page website (Home, About me, Services, Projects) that can be hosted for free on GitHub Pages.

## What's in this folder

| File or folder | What it is |
|---|---|
| `index.html` | **Home** page (Introduction) |
| `about.html` | **About me** page |
| `services.html` | **Services** page |
| `projects.html` | **Projects** page (photo gallery) |
| `css/style.css` | The design: colours, fonts, layout. Used by all four pages |
| `js/projects.js` | Makes the Projects gallery and the full-size photo viewer work |
| `favicon.svg` | The logo icon shown in the browser tab |
| `projects.json` | The list of project photos, with their titles and descriptions |
| `projects/` | The folder your project photos go in |

**Keep this layout exactly as it is.** The pages expect to find `css/style.css` and `js/projects.js` inside their folders, so upload the `css`, `js` and `projects` folders as folders, not just the files inside them.

---|---|
| `index.html` | The whole website: text, design, background drawings and logo |
| `favicon.svg` | The logo icon shown in the browser tab |
| `projects.json` | The list of project photos, with their titles and descriptions |
| `projects/` | The folder your project photos go in |

---

## 1. Put the site on GitHub (one-off, about 10 minutes)

1. Go to **github.com** and sign up for a free account, or sign in.
2. Click the **+** at the top right, then **New repository**.
3. Give it a name, for example `squareonedesign`, and choose **Public**. Leave everything else unticked, then click **Create repository**.
4. On the next screen, click the link **uploading an existing file**.
5. Unzip the folder you downloaded and open it. Select **everything** inside it: the four page files, the `css`, `js` and `projects` folders, and the other files. Drag it all onto the GitHub page in one go. Don't drag the outer folder itself.
   (If you created the repository with a README already, use **Add file** → **Upload files** instead.)
6. Check the list shows the `css`, `js` and `projects` folders as well as the page files, then click **Commit changes** at the bottom.

## 2. Switch the website on

1. In your repository, click **Settings** along the top, then **Pages** in the left-hand menu.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to **main** and the folder to **/ (root)**, then click **Save**.
4. Wait a minute or two, then refresh the page. A box at the top will show your web address, which looks like this:
   `https://YOUR-USERNAME.github.io/squareonedesign/`

That's your live website. Any change you commit is usually live within a minute or two.

> **Tip:** if you name the repository `YOUR-USERNAME.github.io`, the address is just `https://YOUR-USERNAME.github.io`.

---

## 3. Add project photos

**Get the photos ready.** Save them as JPGs about 2000 pixels across, ideally under 1 MB each. Use simple file names with no spaces, such as `rear-extension.jpg` or `loft-conversion-1.jpg`. File names are case-sensitive: `Photo.JPG` and `photo.jpg` count as different files.

**Upload them**

1. In your repository, click the **projects** folder.
2. Click **Add file** → **Upload files**, drag your photos in, then click **Commit changes**.

**Add them to the list**

1. Go back to the main folder and click **projects.json**.
2. Click the **pencil icon** (Edit) at the top right of the file.
3. Add an entry for each photo. For example, with two photos the file looks like this:

```json
{
  "projects": [
    {
      "file": "projects/rear-extension.jpg",
      "title": "Rear extension",
      "caption": "Single-storey kitchen extension with roof lights."
    },
    {
      "file": "projects/loft-conversion-1.jpg",
      "title": "Loft conversion",
      "caption": "Dormer loft conversion adding a bedroom and shower room."
    }
  ]
}
```

4. Click **Commit changes**. After a minute or two, refresh the Projects page and the photos will be there.

Watch the punctuation:
- Put a **comma between entries** (after the `}` of each entry except the last one).
- Don't put a comma after the last entry.
- Keep the speech marks `"` around every name and piece of text.
- `caption` is optional. If you don't want a description, delete that whole line, along with the comma at the end of the `title` line.
- Photos appear in the order you list them.

If the photos don't appear, there's probably a punctuation mistake. Paste the file into **jsonlint.com** and it will point to the problem line.

---

## 4. Changing words on the site

1. Click the page you want to change (for example **about.html** for the About me page), then the **pencil icon**.
2. Press **Ctrl+F** (or **Cmd+F** on a Mac) to find the sentence you want to change.
3. Edit the text between the tags, for example `<p>` … `</p>`. Leave the parts in `< >` alone.
4. Click **Commit changes**.

## 5. Using your own web address (optional)

If you buy a domain such as `squareonedesign.co.uk`:

1. Go to **Settings** → **Pages** → **Custom domain**, type your domain and click **Save**.
2. Your domain company will need some DNS records set up. Follow GitHub's guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
3. When it's working, tick **Enforce HTTPS**.

---

### Notes

- Opening the pages straight from your computer shows the site, but the project photos only load once it's on GitHub. That's normal.
- The logo, the header and the menu appear on every page. If you change them, change all four page files the same way.
- Free GitHub Pages needs a **public** repository, so anyone can see the website's files. Don't put anything private in them.
