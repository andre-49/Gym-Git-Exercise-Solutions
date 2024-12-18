# Gym-Git-Exercise-Solutions
## Bundle 1
### Exercise 1
```
mkdir 'git exercises'
cd 'git exercises'/
git init
git branch -M master
git branch -M main
git add .
git commit -m "first commit"
git remote add origin https://github.com/andre-49/Gym-Git-Exercise-Solutions.git
git push origin main
git checkout -b dev
git ckeckout -b test
git ckeckout dev && git checkout branch -d test
git status #to check for changes 
git add . && git commit -m "adding changes to README file" # to stage and commit changes
git push origin dev
