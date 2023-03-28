# Full Stack Code Editor Website</br>

This website is a team project, made to show the team members design and programming skills in front end (React) and backend (Laravel).<br>
## Team Members:</br>

-  Mohamad Balouza</br>
-  Rasha Maasoud</br>
-  Mohamad al-agha</br>
-  Mirvat Barakt</br>
-  Fadi Haddad</br></br>
## Languages and Tools:

<p align="left"> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://laravel.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p></br>

## Color Palette: 

we used adobe platform to come up with out color palette.</br></br>
<a href="https://ibb.co/0qRnCtR"><img src="https://i.ibb.co/qB3DN53/palette.png" alt="palette" border="0"></a></br>

## User Stories :</br>

1-As a User, I want to navigate the home page so that I can quickly and easily find the specific information or feature that I am looking for.</br>
2-As a User, I want to sign up so that I can have an account on the website to save my code snippets.<br>
3-As a User, I want to login so that I can go back to my user profile and codes</br>
4-As a User, I want to compile and run Python code without having to install python on my local machine.</br>
5-As a User, I want to be able to save my code on the website for later</br>
6-As a User, I want to download the code that I wrote so that I can use it in my projects</br>
7-As a User, I want to be able to search for other developers so that I can view their code</br>
8-As a User, I want to able to chat with other developers so that I can ask them questions, answer their questions and get to know them</br>
9-As an Admin, I want to display all the users so that I can see who's joining my website</br>

# Wireframes:

<a href="https://ibb.co/vvCVwJ5"><img src="https://i.ibb.co/k6V5Hhn/Interactive-Code-Editor-1.jpg" alt="Interactive-Code-Editor-1" border="0"></a>
<a href="https://ibb.co/9yqd6M1"><img src="https://i.ibb.co/0YfzTw6/Interactive-Code-Editor-2.jpg" alt="Interactive-Code-Editor-2" border="0"></a>
<a href="https://ibb.co/5xzbQZz"><img src="https://i.ibb.co/XkdcnHd/Interactive-Code-Editor-3.jpg" alt="Interactive-Code-Editor-3" border="0"></a>
<a href="https://ibb.co/VYwQ04M"><img src="https://i.ibb.co/gZ4PbKt/Interactive-Code-Editor-4.jpg" alt="Interactive-Code-Editor-4" border="0"></a>
<a href="https://ibb.co/Vg33k1z"><img src="https://i.ibb.co/zXNNtMB/Interactive-Code-Editor-5.jpg" alt="Interactive-Code-Editor-5" border="0"></a>
<a href="https://ibb.co/ZXqygNJ"><img src="https://i.ibb.co/bmcpv73/Interactive-Code-Editor-6.jpg" alt="Interactive-Code-Editor-6" border="0"></a></br>
## How to Run :</br>

Clone this Repository to your device</br>
```bash
git clone https://github.com/mhmd-Bal/Interactive-Code-Editor-FullStack-Website.git
```
Make sure you're running APACHE Web Server and phpMyAdmin (using XAMPP or WAMP) and [COMPOSER](https://getcomposer.org/download/)</br></br>

Using your command prompt, cd into the backend directory inside the main folder and run</br>
```bash
composer install
```
in the same directory, copy .env.example file and rename it to .env</br>
Set your databse conection in the .env file (username and password)</br>
Generate a new application key with the following command:
```bash
php:artisan key:generate
```
Run the migrations to create the database tables with the following command:
```bash
php artisan migrate
```
Run the Laravel application with the following command:
```bash
php artisan serve
```
Go to frontend directory inside the main folder and open the .env file with your code editor and add your api key [Code Compiler].(https://rapidapi.com/abdheshnayak/api/code-compiler/) </br></br>
Now run the following command to install react dependencies.</br>
```bash
npm install
```
Run the follwoing command to start the application on the home page in your browser
```bash
npm start
```


