# Truck Driver Logistics program!

Below is a detailed guide for using version control so nothing gets corrupted! We got this team!




# This is what we have to do as a team to build an awesome application using Version Control:
1. First clone the repository: `git clone https://github.com/The-Supreme-Elemental/truck-drivers-logistics.git`
2. Now get into the directory that was just cloned from the github.
3. You are currently on main branch, make sure to create a new branch: `git checkout -b lastname-issue`
4. Now to make sure you have all the changes that are in the main branch in your local repo switch to the main branch and pull all the changes. Use the following commands:
  ```
  git switch lastname-issue
  git pull origin main
  ```
5. Now you have to switch to the branch you will be working on and then merge the changes from the main branch to your working branch. This merge is not merging code in the remote repository so do not worry about having merge conflicts. Use the following command:
  ```
  git switch lastname-issue
  git merge main
  ```
6. It is a good practice to work on one feature at a time and have branch for every issue. For example you are assigned to work on two features which are to capitalize the first letter of the word and if user add no input throw an error.
7. So you will work on first feature and create a branch for that something like `git checkout -b lastname-capitalize` work on it and push the changes to your branch. Then you are going to create a new branch named `lastname-noinput` and then work on it and push your changes.
8. Work on one file at a time and when you are done working on that file push your changes, and make sure to do the following:-
  ```
  git add file_name
  git commit -m "Meaningful description of your changes"
  git push origin lastname-issue
  ```
9. Now we will meet as a team and merge all of our changes in the remote repository together. When we are done merging all the changes we are going to our local repository and switch to the main branch and pull all the changes in our local repo. Use the following commands to do all that:
  ```
  git switch main
  git pull origin main
  ```
10. We will repeat everything that we did above and this will be an efficient way to avoid main branch merging conflicts.

