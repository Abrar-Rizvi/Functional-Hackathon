Project Setup & Details

All project details are outlined in the Documentation file.

Public Folder: Contains assets including images and videos relevant to the project.

src Folder: Houses the app and components folders.

app Folder: Contains all the project's routes.

components Folder: Includes reusable components that are imported into the relevant routes.





Deployment & Staging Steps

All features and functionalities have been verified.

The project is fully responsive. Speed and responsiveness have been tested using Lighthouse.

Functionalities and components have been tested using ZAP.

Security has been implemented in input fields using regex, and contact form validation is performed through ZOD.

All data has been pushed to a GitHub repository named 'functional-hackathon'.

Vercel was chosen as the hosting platform to deploy the project.

The GitHub repository was linked to Vercel by importing the project.

Environment variables were set.

The project was deployed successfully.

Result: Project deployed successfully.

Live Link: https://functional-hackathon-rizvi.vercel.app/





Error Handling During Deployment

Build Errors: Running npm run build identifies all errors.

Linting Errors: ESlint errors related to linting were resolved by disabling linting errors entities.

Server-Side Rendering: To enable client-side rendering, use client was added. However, use client is not allowed with async functions. To address this, a server component was created and passed to the relevant page.

Environment Variables: All environment variables were saved in the project domain to prevent internal server errors.