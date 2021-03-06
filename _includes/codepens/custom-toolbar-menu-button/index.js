tinymce.init({
  selector: 'textarea',
  height: 500,
  toolbar: 'mybutton',

  content_css: [
  '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
  '//www.tiny.cloud/css/codepen.min.css'],

  setup: function(editor) {

    /* example, adding a toolbar menu button */
    editor.ui.registry.addMenuButton('mybutton', {
      text: 'My button',
      fetch: (callback) => {
        const items = [
          {
            type: 'menuitem',
            text: 'Menu item 1',
            onAction: () => editor.insertContent('&nbsp;<em>You clicked menu item 1!</em>')
          },
          {
            type: 'nestedmenuitem',
            text: 'Menu item 2',
            icon: 'user',
            getSubmenuItems: () => {
              return [
                {
                  type: 'menuitem',
                  text: 'Sub menu item 1',
                  icon: 'unlock',
                  onAction: () => editor.insertContent('&nbsp;<em>You clicked Sub menu item 1!</em>')
                },
                {
                  type: 'menuitem',
                  text: 'Sub menu item 2',
                  icon: 'lock',
                  onAction: () => editor.insertContent('&nbsp;<em>You clicked Sub menu item 2!</em>')
                }
              ]
            }
          },
        ];
        callback(items);
      }
    });

  }
});