# UMD Design System Drupal RND Project

This is a RND project for using the UMD Design System[^1] with
Drupal Single Directory Components[^2].

Find currently created SDCs under /components.

[^1]: <https://designsystem.umd.edu/>

[^2]: <https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/quickstart>

## Current Status

Most web components are implemented in some form, but many need fields defined,
and nothing has been wired into any templates except for demo purposes.

Nothing should be expected to work at this time.

## Usage

The intention is to use this as a base theme or in UI configuration.

When using these SDCs primarily in template code, first reate a new theme folder
and set umdds as a base theme.

E.g.,

```YAML
name: New Terp Theme
type: theme
description: Sub-theme of UMDDS
core_version_requirement: ^11
base theme: umdds
```

Templates can then employ SDCs when displaying content[^3]

Alternatively, SDCs can be used in the UI as part of field or layout
configuration, in which case you may barely need to touch templates.
In this case, you may not need a sub-theme.

So far, this theme has only been nominally tested with the UI Patterns[^4]
module and Layout Builder, but results are promising.

Note that if overriding individual SDCs, you will want to sub-theme even if only
using UI Patterns or similar. In this case, you can override individual SDCs
using the *replaces* syntax[^5]:

```YAML
replaces: 'sdc_theme_test:my-card'
```

[^3]: <https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/using-your-new-single-directory-component#s-using-your-component-in-twig-template>

[^4]: <https://www.drupal.org/project/ui_patterns>

[^5]: <https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/creating-a-single-directory-component#s-overriding-components-provided-by-other-modules-or-themes>