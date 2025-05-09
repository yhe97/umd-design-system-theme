# Development Manual

> [!NOTE]
> This is a proposed workflow, which is open for discussion 

To further development of the umd-design-system Drupal theme,
first fork the <https://github.com/umd-lib/umd-design-system-theme>
repository.

Clone this fork into your local environment.

For example:

```bash
cd web/themes/custom/
git clone origin https://github.com/[USER]/umd-design-system-theme.git
```

Test and make changes.

Once you are ready to submit these changes for possible inclusion
in the theme, create a new local branch.

For example, if making changes to the Nav Slider component:

```bash
git checkout -b nav-slider-fix
```

Then add and commit the files:

```bash
git add components/umd-element-nav-slider/*
git commit
```

For your commit message, note the reason for the change
as well as a link to the Github issue (if applicable).

Push the change to your fork:

```bash
git push origin nav-slider-fix
```

Now that the changes are in your repo, you can create
and submit a pull request by clicking the *Pull Request*
tab at your Github.com fork repo.

For the base repo, select *umd-lib/umd-design-system-theme*.

For the base branch, in general, you'll select *main*.

The head repo should be your fork, and for *compare*, select
your feature branch. In this case *nav-slider-fix*.

Click *Create Pull Request* once you are ready.

Make a note on the relevant issue if it exists. Otherwise, create
a new issue under the *Issues* tab and inform the community
of the fix and why so that it can be reviewed.
