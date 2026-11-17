# SpendWise - Budget Tracker

## Project Description

SpendWise is a budget tracking web application built to help users manage their monthly budgets and keep track of their expenses.

Users can set a monthly budget, record expenses, view expense records, monitor their total spending, and check their remaining balance.

The application provides a simple dashboard that makes it easier to understand and manage personal finances.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- Netlify

## GitHub Repository Information

**Repository Name:** Budget-Tracker

**GitHub Repository:** https://github.com/zamzamjirow/Budget-Tracker

## Live Website

**Netlify URL:** https://spendwise-expense-manager.netlify.app/

The application is publicly accessible through the Netlify link above.

## Deployment Process Summary

I deployed SpendWise using GitHub and Netlify.

First, I uploaded my project files to a public GitHub repository. I then connected the GitHub repository to Netlify and selected the main branch for deployment.

Since SpendWise was built using HTML, CSS, and JavaScript, I did not need a build command. Netlify used the project files to publish the website.

I also changed the default Netlify site name to a name related to my project.

I created a `netlify.toml` configuration file to specify the publish directory and configure a fallback redirect to `index.html`.

## Continuous Deployment Verification

I tested continuous deployment by making a visible change to the dashboard heading, changing it to "SpendWise Budget Tracker".

I committed the change and pushed it to the main branch of my GitHub repository.

Netlify automatically detected the GitHub update and started a new deployment. After the deployment was published, I opened the live website and confirmed that the updated dashboard heading was displayed.

I also pushed the `netlify.toml` configuration file to GitHub. Netlify automatically detected this update and successfully published the new deployment.

This confirmed that changes pushed to the GitHub repository were automatically deployed to the live website without manually uploading the project files to Netlify.

## Challenges Encountered During Deployment

One challenge I experienced was pushing my updated project to GitHub because my local repository and remote repository had different commits. This resulted in Git merge conflicts.

I resolved the conflicts, completed the rebase process, and successfully pushed my project to GitHub.

Another challenge was finding an available Netlify site name because several names I tried were already taken. I resolved this by choosing another available name.

## Lessons Learned

Through this assignment, I learned how to deploy a website using GitHub and Netlify.

I also learned how to connect a GitHub repository to Netlify, configure a deployment, choose a custom website name, and publish a website online.

I gained a better understanding of continuous deployment and how changes pushed to GitHub can automatically update a live website.

This assignment helped me understand how to take a web application from development on my local computer to a publicly accessible website.