# (Base) UMD Libraries Design System Base Drupal Theme

Base theme implementing the UMD Design System[^1] using Drupal's
Single Directory Components (SDC)[^2].

Find currently created SDCs under /components.

[^1]: <https://designsystem.umd.edu/>
[^2]: <https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/quickstart>

## Current Status

Most (but not all) components are implemented and ready to use, but development
continues. Not every component is tested, so if you encounter issues
consider fixing it and submitting a fix as a pull request or in an Issue comment
so that everyone can benefit from the fix.

We hope that this will become a widely used base theme around the UMD campus
with different organizations extending it as needed.

## Installation

To install, you can either:

* Clone this repository (main branch) into your themes directory (preferred method if you intend to develop or submit pull requests)
* Install using composer (preferred if you plan to subtheme off this theme)

```bash
composer require umd-lib/umd-design-system-theme
```

See: https://packagist.org/packages/umd-lib/umd-design-system-theme

## Usage

This theme can be used as a base theme or in UI configuration.

To create a new subtheme based on this theme, first create a new theme folder
and set umdds as the *base theme*.

E.g.,

```YAML
name: New Terp Theme
type: theme
description: Sub-theme of UMDDS
core_version_requirement: ^11
base theme: umdds
```

Sub-theme templates can then employ SDCs when displaying content[^3]

For example, to hardcode a hero component, use the {{ include() }} or {% embed %} tag:

```twig
{{ include('umdds:umd-element-hero', {
    variant: 'minimal',
    theme: 'light',
    hero_image: 'https://www.lib.umd.edu/sites/default/files/styles/optimized/public/2022-02/McKeldin%20Library%201920x550.jpg',
    hero_image_alt: 'McKeldin Library',
    eyebrow: 'Sports News',
    hero_title: 'Maryland Wins'
    }, with_context = false)
}}
```

Or with field content, such as in a node.html.twig:

```twig
{{ include('umdds:umd-element-hero', {
    variant: 'minimal',
    theme: 'light',
    hero_image: {{ file_url(content.field_hero_image[0]['#media'].field_media_image.entity.uri.value | image_style('optimized')) }},
    hero_image_alt: {{ content.field_hero_image[0]['#media'].field_media_image.alt }},
    eyebrow: {{ content.field_eyebrow|field_value }},
    hero_title: {{ node.title.value }}
    }, with_context = false)
}}
```

Note that if overriding individual SDCs, you will want to sub-theme even if only
using UI Patterns or similar. In this case, you can override individual SDCs
using the _replaces_ syntax[^5]:

```YAML
replaces: 'sdc_theme_test:my-card'
```

However the intention is that these components be used to site build in the UI
using the UI Patterns[^4] module alongside Layout Builder or field configuration.

See the [libraries/main](https://github.com/umd-lib/umd-design-system-theme/tree/libraries/main)
branch for examples of how to override SDCs.

## Upgrading Theme to Latest Design System

Because the theme comes with JS and precompiled CSS, this procedure should only be
necessary when upgrading the theme for a Design System upgrade.

### Design System / Tailwind CSS

To pull the node modules, run the following:

```bash
npm install
```

To recompile the UMDDS CSS, run the following command:

```bash
npx tailwindcss --input css/base/ui.css --output css/design-system/compiled.css
```

Which will evaluate src/index.css configuration and pipe the complied file
to css/design-system/compiled.css.

Also copy node_modules/@universityofmaryland/web-components-library/dist/index.js
to js/design-system/index.js

[^3]: <https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/using-your-new-single-directory-component#s-using-your-component-in-twig-template>
[^4]: <https://www.drupal.org/project/ui_patterns>
[^5]: <https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components/creating-a-single-directory-component#s-overriding-components-provided-by-other-modules-or-themes>
