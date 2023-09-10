# Resumeness

This project is for creating resumes and cover letters and download them as pdf.

## Instructions on how to run the project

1- Clone Repository  
2- Go to both directories (Client & Server) and run `npm install`  
3- On Server directory run `node app`  
4- On Client directory run `npm run dev`

## A List with all Endpoints

- authRouter
  - POST /auth/signUp/
  - POST /auth/logIn/
  - POST /auth/image/
  - GET /auth/me/
- profileRouter
  - GET /profile/
  - DELETE /profile/  
- resumeRouter
  - POST /resume/create/
  - PUT /resume/edit/:id/
  - DELETE /resume/delete/:id/
- letterRouter
  - POST /cover-letter/create/
  - PUT /cover-letter/edit/:id/
  - DELETE /cover-letter/delete/:id/
