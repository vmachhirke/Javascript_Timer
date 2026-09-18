# ⏱️ Timer Project

A simple **JavaScript Timer Project** built using **HTML, CSS, and JavaScript**.

This project displays the current time in **hours, minutes, and seconds**. The timer can be started, stopped, and cleared using the available buttons.

## 🚀 Features

* 🕐 Displays current hours, minutes, and seconds
* ▶️ **Start Time** button to start the timer
* ⏹️ **Stop Time** button to stop the timer
* 🗑️ **Clear Time** button to reset the displayed time to `00:00:00`
* 🔄 Uses JavaScript `setInterval()` for continuous time updates
* 🌐 Uses the JavaScript `Date` object to get the current time

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

## 📂 Project Structure

```text
timer/
│
├── index.html
├── index.css
└── index.js
```

## ⚙️ How It Works

The project uses JavaScript's `Date` object to get the current:

* Hours
* Minutes
* Seconds

When the **Start Time** button is clicked, `setInterval()` runs every second and updates the time displayed on the page.

When the **Stop Time** button is clicked, `clearInterval()` stops the timer.

The **Clear Time** button stops the timer and resets the displayed values to `00`.

## ▶️ How to Run

1. Download or clone the project.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.
4. Click **Start Time** to start displaying the current time.

## 📌 JavaScript Concepts Used

This project helped practice:

* `querySelector()`
* `addEventListener()`
* `setInterval()`
* `clearInterval()`
* `Date` object
* DOM manipulation
* `innerHTML`
* Event handling

## 🎯 Purpose

The main purpose of this project is to practice **JavaScript DOM manipulation, event handling, timers, and working with the JavaScript Date object**.
