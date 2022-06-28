let accessToken = "";
let clientID = "a3e9264b555e405c9f796b4851e2a8eb";
let redirectURI = "";

const Spotify = {

  getAccessToken(){
    if(accessToken){
      return ;
    }
    else{
      redirectURI = window.location.href;
      let finalURL= window.location.href;
      let tokensrt = finalURL.match(/access_token=([^&]*)/) + "";
      let expirationsrt = finalURL.match(/expires_in=([^&]*)/) + "";
      let token = tokensrt.substring(13);
      let expiration = parseInt(expirationsrt.substring(11));

      if(!(token && expiration)){
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      }
      else {
        accessToken = token;
        console.log(accessToken);
        let expiresIn = expiration;
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      }
    }
  },

  check(){
    let finalURL= window.location.href;
    let tokensrt = finalURL.match(/access_token=([^&]*)/) + "";
    let expirationsrt = finalURL.match(/expires_in=([^&]*)/) + "";
    let token = tokensrt.substring(13);
    let expiration = parseInt(expirationsrt.substring(11));
      console.log(token);
      console.log(expiration);
  },

 search(term){
    let finalURL= window.location.href;
    let tokensrt = finalURL.match(/access_token=([^&]*)/) + "";
    if(tokensrt){
      let token = tokensrt.substring(13);
      accessToken = token;
    }
    
    if(!accessToken){
      this.getAccessToken();
    }
    else{
      
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }).then(response => {
       return response.json()
      }).then(jsonresponse => {
        return jsonresponse.tracks.items.map(track => {
          return {
            id : track.id,
            name : track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }
        })
      });
    }
  },

 async savePlaylist(playlistName, trackURIs){
   if(!accessToken){
     this.getAccessToken();
   }
    if(!(playlistName && trackURIs)){
      return;
    }
    else {
     console.log(accessToken);
      
      let userID;
      let playlistID;

      var response =  await fetch("https://api.spotify.com/v1/me",{headers: {
          Authorization: `Bearer ${accessToken}`
        }});
      var jresponse = await response.json();
      userID = await jresponse.id;
      console.log(userID);

                    
      var response1 = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          name: playlistName
        }),
      });

      var jresponse1 = await response1.json();
      playlistID = await jresponse1.id;


      fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          uris: trackURIs,
        }),
      });
      
    }
  }
  
}

export default Spotify;
