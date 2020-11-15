# chopeable

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# Open browser to view our app
$ Customer Chopeable client: http://localhost:8080/app 
$ Admin Chopeable dashboard: http://localhost:8080/dashboard 
```

## Deployed Application
Our application has been deployed using Heroku
- Client URL: https://sleepy-temple-19309.herokuapp.com/app
- Admin Dashboard URL: https://sleepy-temple-19309.herokuapp.com/dashboard

## Our repo
	1. package.json (All required libraries are mentioned into this)
	2. pages/app.vue (Vue Root Component)
	3. assets	(All Media or Any other files here)
	4. component (All of our Components)
    5. layouts (Our layouts for both admin and customers UI)


## Other remarks
When run locally, keep in mind that the google login button will not appear, this is because the client ID has been set only to our deployed URL.

## BTL
    1. Git and Github for version control and better collaboration between the team (https://github.com/JavierWHJ/chopeable)
    2. Vue Bootstrap for UI designs
    3. Vuetify used for material design (calendar component)
    4. Figma for prototyping and ideation
    5. Email.js for sending of email
    6. Chart.js for visualization
    7. Konva.js (https://github.com/atlassian/react-beautiful-dnd) https://konvajs.org/docs/vue/Save-Load.html On the restaurant GUI, we will be creating a "drag-and-drop" functionality. This allows them to move the tables around. 

## APIs
Restaurant Location APIs
    - Zomato API to get restaurant information

Direction APIs
    - Google Map API to let diners filter restaurant based on their location

Notification and Message APIs
    - Gmail API
    - Novocall/callback widget

Payment APIs
    - Stripe API to let diners pay through the app 


## DataStore
Firebase storage 


