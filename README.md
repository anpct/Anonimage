# Anonimage

Anonimage is a mobile friendly web app that uses machine learning to assess the quality of anonymously shared images.

### Concept

A user first makes an account in the web app, after making an account the user is able to upload images to the web app. Once an image is uploaded the BRISQUE score of the image is automatically calculated, this image is not yet available to be viewed by other users. Other users can view the images only on approval by the admin. On logging in the admin is given a set of images to approve or reject. If the admin approves the image, then the image is available to be viewed by every user in the explore tab.

### Tech

Anonimage uses a number of open source projects to work properly:

* ReactJs for the frontend
* Django for the backend
* BRISQUE for image quality assessment
* Redux for state management

### Installation

```sh
$ virtualenv app
$ cd app
$ pip install -r requirements.txt
$ cd frontend
$ npm init
$ cd..
$ python manage.py runserver
```

### Dependencies

| Dependencies | Versions |
| ------ |  ------ | 
| python | 3.x|
| django | 3.x|
| ReactJS    | 16.13.1|

Other requirements can be found in the requirements.txt and packages.json file

#### Execution
For frontend(ReactJS):
```sh
$ npm run dev
```
For Django:
```sh
$ python manage.py runserver
```
### Screenshots

###### Execution
![Execution](https://i.ibb.co/X3zd4V9/execution.png)

###### Login
![Login](https://i.ibb.co/yX6DP9L/login.png)

###### Register
![Register](https://i.ibb.co/XLXvFg7/register.png)

###### User dashboard
![dash1](https://i.ibb.co/jDK6kHQ/dash1.png)
---
![dash2](https://i.ibb.co/94c1D0r/dash2.png)

###### Admin dashboard
![dash](https://i.ibb.co/NjFW07C/admin.png)

###### Explore
![explore](https://i.ibb.co/2Nrhm9d/explore.png)
License
----

MIT



 
