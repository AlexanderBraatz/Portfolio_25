# My Modern Portfolio

<a href="https://alexanderbraatz.com" target="_blank">alexanderbraatz.com</a> is built using Next.js and supabase. It serves as my digital fornt page, showcasing my projects and reviews form my colegues and clents.

![app preview](./other/preview/Desktop.png)

## Why does this project exist?

I began this project out of a need to diplay my work fo r potnetial clients and employers. it soon grew into an exploration into serverless architecture simply becasue i was trying to make the magic link supaer base auth feature work. after testing the testimonial feature with a few people i had identefied the password creation step as a key point of friction and i wanted to address it by swithcing to a magic link based aut system. This repo also includes the use of shadCn Ui componets which i alos enyed working with while they were a time save when taking in to acount the accesability and cross broswer compatability they insure, but the fine tuning of styles to match the rest of my app which wasnt shadCn took a long time. 

The project was driven by three primary goals:

- **Developing a Modern, User-Friendly Showcase of my work ** <br/>The aim was to create an engaging online platform to exhibit my projects.
- **Display my Peers reviews while also demonstrating my full stack skills** <br/>A key requirement was to build out the features of a CRUD app for my Testimonals so i could mention both onmy CV

the gratest chalange of the project was that i did not know what i didnot know when i set out to enebale magic link for the user auth and how many other steps ding this to a production grade would involve 

- seting up a custom SMPT server and verefieng my onw DNS records for example ose one thing
- setting up supaabse ege functions to send the emails was another

i ultematly scetched out the flow of data in this document. this DOcument is arguably to complex and information rich to be usfull to anyone who isnt in volved with the tech stack but it helped me in understanding why what i had built was working. 

![app preview](./other/preview/Desktop.png)


## What is it made of?

### User Interface Features

- Fully mobile responsive
- dynamic navigation bar
- shadcn UI Reviews Carosell-slder
- sign In form
- invlaid magic link pade
- valid magic link redirect
- middleware protecting authenticated user only routes
- gallary of my work
- external compont used for my experience time line
- contct form 

### Technologies
 
- TypeScript
- JavaScript
- React
- Next.js
- Server Actions & App Router
- SupaBase Auth & Database Management
- Framer Motion
- Resend
- React-Email
- Tailwind
- JSX
- HTML
- CSS
- Vercel
- Git

## 🚀 Quick Start Guide

Follow these steps to quickly set up and run the Frontend of alexanderbraatz.com on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm
- Git

### Installation

**Clone the Repository**

- Open your terminal.
- Clone the repository using Git:

  ```
  git clone https://github.com/AlexanderBraatz/Portfolio_25.git portfolio-25-fork
  ```

- Navigate to the project directory:

  ```
  cd portfolio-25-fork
  ```

**Install Dependencies**

- Inside the project directory, run the following command to install the necessary dependencies:

  ```
  npm install
  ```

**Run the Application**

- Once the installation is complete, start the app by running:

  ```
  npm run dev
  ```

- This will launch the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Now, you should see the portfolio-25-fork running locally on your machine, keeping in mind that the testimonial feature will not work without conecting your fork to a copy of my  backend infrastructure. Please se alexanderbratz.com to sea those features in action.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


