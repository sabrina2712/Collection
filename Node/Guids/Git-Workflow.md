# Git Team Workflow

> Most of those rules are just there to prevent merge conflicts as much as possible.

## Rules

### 1. Never push on protected team branches

> Never push on `master` or `develop` branches.

Those branches are there to combine the work of the team into a product. You never want to push there or we will have constant merge conflicts and unrelated history errors.

### 2. Create feature branches from protected branches

> Use `master` or `develop` to create feature branches

As these branches represent the current product state we can rely on these changes to be "true", all changes on feature branches might end up in the final product **or not**.

## How to create a Pull Request

### 1. Checkout master or develop

```shell
git checkout master
```

### 2. Pull new changes

```shell
git pull
```

### 3. Create your feature branch

Make sure to follow the nameing schema for feature branches
e.g.: `<username>/<feature_id>`

```shell
git checkout -b oliverwebr/1
```

### 4. Solve issue

Work on your issue, use git add and commit as you are used to.
And don't drink and drive!

### 5. Prepare pull request

To be able to see the changes we need to push them (upload to remote repository).

```shell
git push
```

### 6. Open Pull Request on Github

- Open the repository on github
- Select Pull requests tab
- click new pull request
- select base branch: develop || master
- select feature branch: `<username>/<feature_id>` (from 3.)
- click Create pull request
- give it a title like the branch name `<username>/<feature_id>`
- add a description if needed
- add your teacher as reviewer
- click create pull request

### 7. But what if:

#### Pull request has conflicts

WIP

#### Review requested changes

WIP
