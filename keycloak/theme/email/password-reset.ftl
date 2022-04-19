<html>
<body>
    <div style="padding-top: 12px; padding-bottom: 12px; background-color: #fff; color: #fff; width: 100%; border-collapse: separate; text-align: center;">
        <br>
        <br>
        <div style="width: 600px; height: 570px; background-image: url('https://i.imgur.com/GImnl3H.png'); background-size: cover; background-repeat: no-repeat; margin: 0px auto;">
            <div>
                <img style="width: 25%; margin-top: 15%;" src="https://i.imgur.com/Fh7CCfF.png">
                    <h2 style="position: absolute;
                        top: 200px;
                        left: 0;
                        width: 100%;
                        margin: 0 auto;
                        font-size: 18px;
                        font-weight: 500;
                        font-family: 'Roboto', sans-serif;">Recuperación de contraseña</h2>
                    <h2 style="position: absolute;
                        top: 200px;
                        left: 0;
                        width: 100%;
                        margin: 0 auto;
                        font-size: 42px;
                        font-wight: bold;
                        font-family: 'Roboto', sans-serif;">¡Hola!</h2>
                    <br>
                    <h2 style="position: absolute;
                        top: 200px;
                        left: 0;
                        font-weight: normal;
                        width: 100%;
                        margin: 0 auto;
                        font-size: 14px;
                        font-family: 'Roboto', sans-serif;">Has solicitado la recuperación de tu<br>
                        contraseña, asociada a la cuenta de MedixLab</h2>
                    <br>
                    ${kcSanitize(msg("passwordResetBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))?no_esc}
                    <br>
                    <br>
                    <h2 style="position: absolute;
                        top: 200px;
                        left: 0;
                        width: 100%;
                        margin: 0 auto;
                        font-size: 14px;
                        font-weight: normal;
                        font-family: 'Roboto', sans-serif;
                        -webkit-box-shadow: 5px 4px 9px -5px rgba(0,0,0,0.74); 
                        box-shadow: 5px 4px 9px -5px rgba(0,0,0,0.74);">Si tú no solicitaste recuperar tu contraseña,<br>
                        ignora este correo electrónico.</h2>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
            </div>
        </div>
    </div>

</body>
</html>
