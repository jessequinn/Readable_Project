## Readable Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Several key node modules were installed. Namely, [material-ui](https://material-ui.com), for interface, [mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui), for icons, [redux-form](https://redux-form.com/7.4.2/), for easy form state, and [axios](https://github.com/axios/axios), for API access.

The general concept of the App is shown in the following figure.

![alt text](./concept.png)

## Installation and Running
Within the `frontend` directory run the following commands:
* `npm install` will install all node modules required for the project.
* `npm start` or `yarn start` will begin the Readable App.

To run the background server, run the following command in the `api-server` directory `node server.js`.

## Folder Structure

After creation, your project should look like this:

```
api-server/
frontend/
  public/
    css/
      custom.css
    favicon.ico
    index.html
    manifest.json
  src/
    actions/
      index.js
    components/
      app.js
      app.test.js
      comment_edit_modal_detail.js
      comment_new_modal_detail.js
      content_post_detail.js
      content_post_form.js
      content_post_list.js
      no_match.js
      post_edit_modal_detail.js
      post_edit_modal.js
      side_bar.js
    reducers/
      index.js
    styles
      index.js
    utils
      index.js
    index.js
    logo.svg
    registerServiceWorker.js
package.json
concept.png
readable_project.bmpr
README.md
```

## Sending Feedback

I am always open to [your feedback](http://jessequinn.info).
