---
layout: default
title: Localize TinyMCE
title_nav: Localization
description: Localize TinyMCE with global language capabilities.
keywords: internationalization localization languages
---

TinyMCE makes your project accessible to the world through its simple localization framework.

This section demonstrates how to change TinyMCE's user interface to the user's language preference. These settings change the language in the toolbar, menu items, buttons, and tooltips.


> Pro tip: Language settings can be controlled in these configuration options: [directionality]({{ site.baseurl }}/configure/localization/#directionality), [language]({{ site.baseurl }}/configure/localization/#language) and  [language_url]({{ site.baseurl }}/configure/localization/#language_url). There is also a [Directionality Plugin]({{ site.baseurl }}/plugins/directionality/) that adds a toolbar button to control `ltr-rtl` behavior.

### Step 1

Go to the [language download page](https://www.tinymce.com/download/language-packages/) to review a list of language packs available for TinyMCE.

Click the download link on the far right of the table for a single language. Check the box beside each language and then click the download button at the bottom of the table for multiple languages.

> Important! The TinyMCE community translation project provide the language packs on our language download page. 

### Step 2

Unpack the language `js` file(s) into the `path/to/tinymce/langs/` folder. 

> Important: The language settings will not work unless the language pack is placed in `langs/` directory. The [language_url]({{ site.baseurl }}/configure/localization/#language_url) configuration option is another method to enable additional language settings.

### Step 3

Set the language option in TinyMCE's configuration to the language code in the list on [this page]({{ site.baseurl }}/configure/localization/#language).

### Step 4

Load TinyMCE to confirm that the language is set correctly.


## A working example

The following code snippet sets TinyMCE's language to Chinese and the text directionality from right to left.

[Download the Chinese language](https://www.tinymce.com/download/language-packages/) pack to test this functionality. Install a *local instance* of TinyMCE from the [downloads page](https://www.tinymce.com/download/). Follow the [Self-hosted install instructions]({{ site.baseurl }}/general-configuration-guide/advanced-install/#sdkinstall).

```html
<!DOCTYPE html>
<html>
<head>
  <script src="js/tinymce.min.js"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: 'textarea',
    language: 'zh_CN',
    directionality: 'rtl'
  });
  </script>
</head>

<body>
  <form method="post">
    <textarea>你好，世界!</textarea>
  </form>
</body>
</html>
```

{% assign_page next_page = "/general-configuration-guide/system-requirements/index.html" %}
{% include next-step.html next=next_page %}
