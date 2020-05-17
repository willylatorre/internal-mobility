# internal-mobility

Jamie's vacation is about to end. She works at an international company, so she can choose another office to work from but she doesn't know which one. 

This is a demo of the company's internal webapp where she needs to make the official requirement. This webapp also helps her choose which office to go to providing insightful data such as offices information, flights prices and weather.

You can see a live demo at [https://neyda-mobility.netlify.app/](https://neyda-mobility.netlify.app/)


## Tech

The main purprose here is to write good code, and of course learn. You'll find

- Code written in **vue.js** with all the usual good stuff.
- Usage of [vue-composition-api](https://vue-composition-api-rfc.netlify.app/). The reasoning of that pick is the following: a lot of times, using vuex to make a simple app seems a little bit of an overkill. vue-composition-api provides a clean and cost-free mechanism to reuse and share the logic between multiple components.
- Tests: Added a bunch of tests to cover the basics of the app. vue-composition-api is hard to test actually.


## Security

A little bit of attention to the security has been put in it. Of course, vue provides a bunch of features [out-of-the-box](https://vuejs.org/v2/guide/security.html):

- HTML content protection
- Attribute binding protection

Of course, some attention has been put into:

- Not injecting html/styles provided by the user
- URLs provided by thrid-parties have been sanitized
- Not rendering any `<script>`  element in Vue

Additionally, some **route-guards** have been added to prevent start the process in a step that is not the first one.

## Third-party libraries

This small app has integration with

- [AccuweatherAPI](https://developer.accuweather.com/apis): To integrate the API you need to rename `.env.template` to `.env`and provide your API token.
- [KiwiAPI](https://docs.kiwi.com/): to retrieve flights info
- [Element UI](https://github.com/ElemeFE/element): A vue.js UI toolkit to avoid spending hours creating my custom components
- [Date-fns](https://date-fns.org/): To manipulate dates in the lightest way possible

## Testing

For this purpose and time-limitations, only **views** and **core-parts** of the app have been tested. That includes

- Home & Offices view
- Weather mapper
- Flight mapper
- Composition-api


## Project setup
```
yarn install
```

Compiles and hot-reloads for development
```
yarn serve
```

Compiles and minifies for production
```
yarn build
```

Run your unit tests
```
yarn test:unit
```
