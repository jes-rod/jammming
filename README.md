# Jammming ( React.js app - frontend project from Codecademy Web Development course)

This project was created as part of the Web Development course in Codecademy so it is not intended for mass web distribution, but only as part of a portfolio project.

## App description

The Jammming app serves as a searching platform that utilizes the Spotify API to gain access to their music catalog and at the same time, to be able to create a playlist in the website and add it directly to the user's Spotify profile. The authorization to the profile is performed through the "implicit grant flow request" format.

## How to use the app.

You can access the build version of this app on the following Netlify link: https://jesrod-jammming.netlify.app

In the current version, you will see a website with a search bar in which you can enter the name of any song or artist and a results feed will appear in the left side of the website.

If you are not yet logged in into your Spotify account, you will be prompted to do so and after that, you will be redirected to the same page.

Once you are logged in, you can freely search for any songs and then, in the results feed, you will see a "+" icon at the right side of each song.
You can click on it to add that song into the right side panel which is intended for the palylist that you want to create. You can modify the title of the playlist as well.

Once you have the playlist ready, you can submit it and it will be automatically added into your Spotify profile.

## Known issues (will eventually be fixed on further updates)

1- Everytime you restart the app (deleting the authentication token from the URL), the app will re-authenticate at the moment of pressing the "search" button, which will cause that what you already typed in the app will get deleted and you need to enter it again.
2- After submitting your playlist for the first time, this may not be saved into your Spotify profile , so you'll need to submit it again.

If you find any other known issues feel free to leave a comment in this repository to let me know.

## Details about the code.

Codecademy already provided the CSs styling and index.html file for the app to work. My duty was to code all JavaScript functionality related with React.js including the creation of the app itself through Node.js, to make the whole app to work from start to finish.

An instructions guide was also provided by the website about how to build the app.

## Will there be more functionality?

There may be more functionality implemented in the near future to further practice on React.js 

Feel free to leave any suggestion in the comments section below so I may implement it in the future.




