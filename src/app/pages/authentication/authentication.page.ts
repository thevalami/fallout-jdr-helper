import { Component, OnInit } from '@angular/core';
import { OAuth2Client } from '@byteowls/capacitor-oauth2';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async authenticateWithDiscord() {
    const authorizationBaseUrl = 'https://discord.com/api/oauth2/authorize'; // L'URL d'autorisation Discord
    const redirectUrl = 'http://192.168.1.30:8100/authentication'; // L'URL de redirection configurée dans les paramètres de votre application Discord
    const appId = '1124056339744829541'; // L'ID client de votre application Discord
    const responseType = 'token'; // Type de réponse, dans ce cas, un jeton d'accès
    const scope = 'identify email guilds guilds.join guilds.members.read connections'; // Type de réponse, dans ce cas, un jeton d'accès
    
    const options = {
      authorizationBaseUrl,
      appId,
      responseType,
      redirectUrl,
      scope
    };

    try {
      const result = await OAuth2Client.authenticate(options);
      console.log('Authentification réussie', result);
      // Ici, vous pouvez utiliser le jeton d'accès (access token) obtenu pour effectuer des appels à l'API Discord et récupérer des informations sur l'utilisateur
    } catch (error) {
      console.error('Erreur d\'authentification', error);
    }
  }

}
