## Features

- [Primeng](https://primeng.org/) and [Primeflex](https://primeflex.org/) used for layout and
  styling
- [DummyJson](https://dummyjson.com/) used for data prototyping
- Eslint and Prettier included for code formatting and linting
- [SourceMapExplorer](https://github.com/danvk/source-map-explorer) used for bundle size inspection
- [ConventionalCommits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#specification) used
  for formatting git commits
- [Class-validator](https://github.com/typestack/class-validator) package added for additional
  validation.
- angular/localize included
- [Font awesome icons](https://fontawesome.com/v4/icons/) package used as icons package

# Skeleton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version
18.1.0.

## Development server

Before running local server we need to install packages by running `npm install`. After that run
`ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The
application will automatically reload if you change any of the source files.

## Localization

Run `ng serve --configuration=de --open` or `npm run start:de"` for a dev server with german
translations. Translations file is located in locale/messages.xlf. After adding `i18n` directive to
an element, you must run `ng extract-i18n` in order to get that elements title to `messages.xlf`
file. After that, update `locale/messages.de.xlf` accordingly.

## Code scaffoldind

Run `ng generate component component-name` to generate a new component. You can also use
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Source map explore

Run `npm run analyze-sourcemap` to generate a source map report.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## About the application

Upon application start user will be greeted with login screen. Credentials for login are:

`emiliys` `emiliyspass`

User will be saved to localstorage, and will be redirected to Todo list component. Todo list will
show list of todos cards. User will have an option to add new todo by going to todos/add page, or to
logout by clicking on username/logout button.

Its a todo application wich showacase angular core features like components, services, routing,
guards, service injection...

## Prerequisites

- Visual studio Code Extensions: -- Prettier -- Eslint -- Angular Essentials -- Angular language
  service -- Angular snippets -- Code spell checker

- Tools -- Git -- Npm 9.6.4 (or greater) -- Node 20.0.0 -- Angular cli - npm i @angular/cli@18

1. Using https://primeflex.org/ class add cursor pointer style to span which shows currently logged
   user (User 1).
2. When logged in, User can see User 1 name at the top right corner. Inject auth service, and use it
   to get current user to show first name and last name instead.
3. When logged in, User can click on User 1 and then on Logout button which does nothing for now.
   Add action to menu item which will call auth service and logout function.
4. Open todo list page. Todo object has userId property which shows to which user todo belongs. Add
   custom class when todo userId is equal to user id to mark those todos.
5. Generate new component in modules/shared/card which will have Inputs text, isOwner, header. Pass
   those props from todo list component.
6. Generate new component in modules/todo/pages folder, which will allow user to create new Todo.
   Name it todo-add. Open todos/pages/todo.routes.ts and add “add” path and route to objects. Open
   pages/todo.routes.ts and use added properties to create new route. Go back to TodoAddComponent
   and create form for adding todos. Upon creation of one todo, user should be redirected to
   todos-list.
